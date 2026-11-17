// Filter the glossary table as you type (glossary.md). Case is ignored; every column is searched.
(function () {
  function setup() {
    var input = document.getElementById("glossary-filter");
    var box = document.getElementById("glossary");
    if (!input || !box || input.dataset.ready) return;
    input.dataset.ready = "1";
    var rows = box.querySelectorAll("tbody tr");
    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      rows.forEach(function (tr) {
        tr.style.display = !q || tr.textContent.toLowerCase().indexOf(q) !== -1 ? "" : "none";
      });
    });
  }
  if (typeof document$ !== "undefined") {
    document$.subscribe(setup);
  } else {
    document.addEventListener("DOMContentLoaded", setup);
  }
})();
