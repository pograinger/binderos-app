import { d as l, i as c, Y as m, y as I } from "./index-DwiQ5yRy.js";
const d = 50, g = "crdtMigrationSeed";
async function h() {
  const o = await y(), n = f(o), s = (await l.atoms.toArray()).filter((i) => !i.yDocInitialized);
  if (s.length === 0) return;
  console.log(`[CRDT migration] Migrating ${s.length} atoms with clientId=${n}...`);
  const u = c.clientID;
  c.clientID = n;
  try {
    for (let i = 0; i < s.length; i += d) {
      const r = s.slice(i, i + d);
      c.transact(() => {
        for (const t of r) {
          const e = new m();
          e.set("id", t.id), e.set("content", t.content), e.set("title", t.title), e.set("type", t.type), e.set("status", t.status), e.set("tags", t.tags ?? []), e.set("sectionId", t.sectionId ?? null), e.set("sectionItemId", t.sectionItemId ?? null), e.set("contentVersion", t.contentVersion ?? 0), e.set("updatedAt", t.updated_at), I.set(t.id, e);
        }
      }), await l.atoms.bulkPut(r.map((t) => ({ ...t, yDocInitialized: true })));
    }
  } finally {
    c.clientID = u;
  }
  console.log("[CRDT migration] Complete");
}
async function y() {
  const o = await l.config.get(g);
  if (o) return o.value;
  const n = crypto.randomUUID();
  return await l.config.put({ key: g, value: n }), n;
}
function f(o) {
  let n = 0;
  for (let a = 0; a < o.length; a++) n = Math.imul(31, n) + o.charCodeAt(a) | 0;
  return Math.abs(n) % 2147483646 + 1;
}
export {
  h as runCRDTMigration,
  f as seedToClientId
};
