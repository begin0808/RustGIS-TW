// Keep the theme's "back to top" button showing once the reader is well down the page. The
// theme alone shows it only while scrolling up, so a reader who scrolls to the end never sees it.
(function () {
  var root = document.documentElement;
  function update() {
    root.classList.toggle("rgtw-show-top", window.scrollY > window.innerHeight * 1.5);
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  if (typeof document$ !== "undefined") {
    document$.subscribe(update);
  } else {
    document.addEventListener("DOMContentLoaded", update);
  }
})();
