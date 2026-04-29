const o = "goal-driven", t = "resume-topic", n = "clarity", s = [], l = 0, e = "Resume the most salient open topic from the prior session.", r = "You were working on {lastTopic} \u2014 still on your mind?", i = [{ signal: "turnCount", threshold: 3, operator: ">=" }], a = 5, c = "Good to have you back. What's next?", d = { mode: o, id: t, binderType: n, triggers: s, triggerThreshold: 0, goal: e, opening: r, exitConditions: i, maxTurns: a, fallbackTransition: c };
export {
  n as binderType,
  d as default,
  i as exitConditions,
  c as fallbackTransition,
  e as goal,
  t as id,
  a as maxTurns,
  o as mode,
  r as opening,
  l as triggerThreshold,
  s as triggers
};
