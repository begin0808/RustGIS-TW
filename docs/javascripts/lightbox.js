// Click a screenshot to see it full size; click again or press Esc to close.
(function () {
  function close() {
    var box = document.querySelector(".rgtw-lightbox");
    if (box) box.remove();
    document.removeEventListener("keydown", onKey);
  }
  function onKey(e) {
    if (e.key === "Escape") close();
  }
  function open(img) {
    close();
    var box = document.createElement("figure");
    box.className = "rgtw-lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-label", img.alt || "放大圖片");
    var big = document.createElement("img");
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    box.appendChild(big);
    if (img.alt) {
      var cap = document.createElement("figcaption");
      cap.textContent = img.alt;
      box.appendChild(cap);
    }
    box.addEventListener("click", close);
    document.body.appendChild(box);
    document.addEventListener("keydown", onKey);
  }
  function setup() {
    close();
    document.querySelectorAll(".md-typeset img").forEach(function (img) {
      // Images that are links keep their link.
      if (img.closest("a") || img.dataset.rgtwZoom) return;
      img.dataset.rgtwZoom = "1";
      img.classList.add("rgtw-zoomable");
      img.addEventListener("click", function () {
        open(img);
      });
    });
  }
  if (typeof document$ !== "undefined") {
    document$.subscribe(setup);
  } else {
    document.addEventListener("DOMContentLoaded", setup);
  }
})();
