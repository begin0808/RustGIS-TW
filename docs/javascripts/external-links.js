// Open links to other sites in a new tab, so readers keep their place in the tutorial.
function openExternalLinksInNewTab() {
  document.querySelectorAll("a[href]").forEach(function (a) {
    if (a.host && a.host !== window.location.host) {
      a.target = "_blank";
      a.rel = "noopener";
    }
  });
}
if (typeof document$ !== "undefined") {
  document$.subscribe(openExternalLinksInNewTab);
} else {
  document.addEventListener("DOMContentLoaded", openExternalLinksInNewTab);
}
