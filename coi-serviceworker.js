/*! coi-serviceworker v0.1.7 - Guido Zuidhof and contributors, licensed under MIT */
/*
 * Cross-Origin Isolation shim for GitHub Pages.
 *
 * GitHub Pages cannot set COOP/COEP response headers directly.
 * This script registers itself as a service worker, then on the next
 * load intercepts all fetches and adds the required headers:
 *   Cross-Origin-Embedder-Policy: require-corp
 *   Cross-Origin-Opener-Policy: same-origin
 *
 * This enables SharedArrayBuffer, which is required for ONNX WASM
 * multi-threaded inference (ort-wasm-simd-threaded.jsep.wasm).
 *
 * Usage: include as the FIRST script tag in <body>, before the Vite module bundle.
 * The SW registers and reloads the page once. On subsequent loads, COOP/COEP
 * are injected into every fetch response via the SW's FetchEvent handler.
 *
 * Source: https://github.com/nickvdyck/coi-serviceworker (actively maintained fork)
 * Original: https://github.com/gzuidhof/coi-serviceworker
 */

/* eslint-disable */

if (typeof window === 'undefined') {
  // ---- Service Worker scope ----
  self.addEventListener("install", function() { self.skipWaiting(); });

  self.addEventListener("activate", function(event) {
    event.waitUntil(self.clients.claim());
  });

  self.addEventListener("fetch", function(event) {
    if (event.request.cache === "only-if-cached" && event.request.mode !== "same-origin") {
      return;
    }

    // For navigation requests, add COOP/COEP headers
    // For other requests, add CORP header if cross-origin
    event.respondWith(
      fetch(event.request)
        .then(function(response) {
          if (response.status === 0) {
            return response;
          }

          var newHeaders = new Headers(response.headers);

          if (event.request.mode === "navigate") {
            newHeaders.set("Cross-Origin-Opener-Policy", "same-origin");
            newHeaders.set("Cross-Origin-Embedder-Policy", "require-corp");
          }

          // Cross-Origin-Resource-Policy needed for cross-origin subresources under COEP
          if (!newHeaders.get("Cross-Origin-Resource-Policy")) {
            // Only set for same-origin or explicit cors requests
            if (event.request.mode === "no-cors") {
              newHeaders.set("Cross-Origin-Resource-Policy", "cross-origin");
            } else {
              newHeaders.set("Cross-Origin-Resource-Policy", "same-origin");
            }
          }

          return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders,
          });
        })
        .catch(function(e) {
          console.error("[coi-serviceworker] Fetch error:", e);
          return new Response("", { status: 408 });
        })
    );
  });

} else {
  // ---- Window / main thread scope ----

  // Check if we're already cross-origin isolated
  if (window.crossOriginIsolated !== undefined && !window.crossOriginIsolated) {
    // Not isolated yet — register the SW and reload
    if (!navigator.serviceWorker) {
      console.warn("[coi-serviceworker] ServiceWorker not supported — SharedArrayBuffer may be unavailable");
    } else {
      navigator.serviceWorker.register(window.document.currentScript.src).then(
        function(registration) {
          console.log("[coi-serviceworker] SW registered:", registration.scope);

          // If SW is already controlling, reload to activate isolation
          if (registration.active && !navigator.serviceWorker.controller) {
            window.location.reload();
          }
        },
        function(err) {
          console.error("[coi-serviceworker] SW registration failed:", err);
        }
      );

      // If there's a controller change (first install), reload once to pick up COOP/COEP
      var hasController = !!navigator.serviceWorker.controller;
      navigator.serviceWorker.addEventListener("controllerchange", function() {
        if (!hasController) {
          hasController = true;
          console.log("[coi-serviceworker] SW activated — reloading for cross-origin isolation");
          window.location.reload();
        }
      });
    }
  }
}
