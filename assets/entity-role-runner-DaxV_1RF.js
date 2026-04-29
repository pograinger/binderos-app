function m(e, o) {
  return new Promise((n) => {
    const i = crypto.randomUUID(), c = setTimeout(() => {
      e.removeEventListener("message", s), n(null);
    }, 5e3), s = (a) => {
      const t = a.data;
      t.id === i && (e.removeEventListener("message", s), clearTimeout(c), t.type === "ENTITY_ROLE_RESULT" ? n({ role: t.role, confidence: t.confidence }) : n(null));
    };
    e.addEventListener("message", s), e.postMessage({ type: "CLASSIFY_ENTITY_ROLE", id: i, text: o });
  });
}
export {
  m as classifyEntityRole
};
