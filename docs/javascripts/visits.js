// Visit count in the footer, from GoatCounter (no cookies, no personal data). Each page view on
// the published site is counted; the total is shown once GoatCounter answers, and stays hidden
// otherwise (local previews, or a blocked request).
(function () {
  var GC = "https://rustgis-tw.goatcounter.com"; // empty turns counting off
  var HOST = "begin0808.github.io";
  var START = "2026-11-17";
  var shown = false;
  function count() {
    if (!GC || location.hostname !== HOST) return;
    var q = new URLSearchParams({ p: location.pathname.replace(/\/index\.html$/, "/"), t: document.title, rnd: String(Math.random()) });
    try {
      var ref = new URL(document.referrer).origin;
      if (ref !== location.origin) q.set("r", ref);
    } catch (e) {}
    new Image().src = GC + "/count?" + q;
  }
  function show() {
    var el = document.getElementById("rgtw-visits");
    if (!GC || !el) return;
    fetch(GC + "/counter/TOTAL.json?start=" + START)
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d || typeof d.count !== "string" || !/[1-9]/.test(d.count)) return;
        el.textContent = "累計瀏覽 " + d.count + " 人次";
        el.hidden = false;
      })
      .catch(function () {});
  }
  function onPage() {
    count();
    show();
  }
  if (typeof document$ !== "undefined") {
    document$.subscribe(onPage);
  } else {
    document.addEventListener("DOMContentLoaded", onPage);
  }
})();
