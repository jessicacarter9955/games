function e(e) {
  try {
    return e.replaceAll(`community_`, ``).replaceAll(`_`, ` `);
  } catch {
    return `Error (?)`;
  }
}
function t(e = ``) {
  return e.split(` `).join(`_`).toLowerCase();
}
export { e as n, t };
