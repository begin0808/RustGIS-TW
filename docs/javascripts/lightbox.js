// Click a screenshot to see it full size; click again, press Esc or the × button to close.
// On a narrow screen a large screenshot opens wider than the screen, to scroll sideways.
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
    var narrow = window.innerWidth < 700 && img.naturalWidth > window.innerWidth * 1.5;
    if (narrow) {
      box.classList.add("rgtw-lightbox--pan");
      big.style.width = Math.min(img.naturalWidth, window.innerWidth * 2.5) + "px";
    }
    box.appendChild(big);
    var x = document.createElement("button");
    x.type = "button";
    x.className = "rgtw-lightbox__close";
    x.setAttribute("aria-label", "關閉");
    x.textContent = "×";
    box.appendChild(x);
    var cap = document.createElement("figcaption");
    cap.textContent =
      (img.alt ? img.alt + "　" : "") + (narrow ? "（左右滑動看全圖，點一下關閉）" : "（點一下或按 Esc 關閉）");
    box.appendChild(cap);
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
