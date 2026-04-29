function u(e, n) {
  return new Promise((o) => {
    const c = crypto.randomUUID(), d = setTimeout(() => {
      e.removeEventListener("message", i), o(null);
    }, 3e3), i = (m) => {
      const t = m.data;
      t.id === c && (e.removeEventListener("message", i), clearTimeout(d), t.type === "PROMPT_CLASSIFIED" ? o({ inputType: t.inputType, inputTypeConfidence: t.inputTypeConfidence, commandIntent: t.commandIntent, commandIntentConfidence: t.commandIntentConfidence }) : o(null));
    };
    e.addEventListener("message", i), e.postMessage({ type: "CLASSIFY_PROMPT", id: c, text: n });
  });
}
function s(e) {
  const n = e.trim();
  return /^https?:\/\/|^www\./i.test(n) || /https?:\/\/\S+/.test(n) ? { inputType: "url", inputTypeConfidence: 0.95, commandIntent: "unknown", commandIntentConfidence: 0 } : n.includes(`
`) && n.length > 200 ? { inputType: "paste", inputTypeConfidence: 0.8, commandIntent: "unknown", commandIntentConfidence: 0 } : /^(hi|hello|hey|good morning|good afternoon|morning|howdy|greetings|yo|sup)\b/i.test(n) && n.length < 30 ? { inputType: "greeting", inputTypeConfidence: 0.8, commandIntent: "unknown", commandIntentConfidence: 0 } : /^(no[,.]?\s|actually|correction|that's wrong|you got that|wrong|scratch that)/i.test(n) ? { inputType: "correction", inputTypeConfidence: 0.7, commandIntent: "unknown", commandIntentConfidence: 0 } : /^(ok|thanks|got it|sure|right|exactly|perfect|understood|never mind|skip)$/i.test(n) ? { inputType: "meta", inputTypeConfidence: 0.8, commandIntent: "unknown", commandIntentConfidence: 0 } : /^(connect|setup|configure|enable|disable|disconnect|reload|bust|fix|clear|help|version|settings|seed|pair|update|refresh|use|switch|fhe|encryption|tier|status|show|what do you know)/i.test(n) ? { inputType: "command", inputTypeConfidence: 0.6, commandIntent: "unknown", commandIntentConfidence: 0 } : n.endsWith("?") || /^(what|who|where|when|why|how|which|tell me|show|do you|can you|is my|are my)/i.test(n) ? { inputType: "question", inputTypeConfidence: 0.7, commandIntent: "unknown", commandIntentConfidence: 0 } : { inputType: "narrative", inputTypeConfidence: 0.5, commandIntent: "unknown", commandIntentConfidence: 0 };
}
export {
  u as classifyPrompt,
  s as classifyPromptFallback
};
