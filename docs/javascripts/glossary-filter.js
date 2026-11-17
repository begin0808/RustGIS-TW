// Filter the glossary table as you type (glossary.md). Case is ignored; every column is searched.
// When nothing matches, say so, and point to the variant-spellings table if the word is there.
(function () {
  function setup() {
    var input = document.getElementById("glossary-filter");
    var box = document.getElementById("glossary");
    if (!input || !box || input.dataset.ready) return;
    input.dataset.ready = "1";
    var rows = box.querySelectorAll("tbody tr");
    var empty = document.getElementById("glossary-empty");
    var heading = document.getElementById("variants");
    var variants = heading ? heading.nextElementSibling : null;
    while (variants && variants.tagName !== "TABLE" && !variants.querySelector("table")) {
      variants = variants.nextElementSibling;
    }
    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      var shown = 0;
      rows.forEach(function (tr) {
        var hit = !q || tr.textContent.toLowerCase().indexOf(q) !== -1;
        tr.style.display = hit ? "" : "none";
        if (hit) shown++;
      });
      if (!empty) return;
      if (!q || shown) {
        empty.hidden = true;
        return;
      }
      empty.textContent = "";
      empty.appendChild(document.createTextNode("這張表裡沒有「" + input.value.trim() + "」。"));
      if (variants && variants.textContent.toLowerCase().indexOf(q) !== -1) {
        var a = document.createElement("a");
        a.href = "#variants";
        a.textContent = "常見的異體寫法";
        empty.appendChild(document.createTextNode("它在下方的「"));
        empty.appendChild(a);
        empty.appendChild(document.createTextNode("」裡，本站和 RustGIS 用的是另一種寫法。"));
      } else {
        empty.appendChild(document.createTextNode("試試英文（例如 buffer），或換一個說法。"));
      }
      empty.hidden = false;
    });
  }
  if (typeof document$ !== "undefined") {
    document$.subscribe(setup);
  } else {
    document.addEventListener("DOMContentLoaded", setup);
  }
})();
