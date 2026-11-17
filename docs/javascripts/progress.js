// Learning progress: a "done" checkbox at the end of each lesson, and ticks in the lesson table
// of the tutorials index. Kept in this browser only (localStorage); without it, nothing shows.
(function () {
  var KEY = "rgtw-done-";
  function read(slug) {
    try {
      return window.localStorage.getItem(KEY + slug) === "1";
    } catch (e) {
      return false;
    }
  }
  function write(slug, done) {
    try {
      if (done) window.localStorage.setItem(KEY + slug, "1");
      else window.localStorage.removeItem(KEY + slug);
      return true;
    } catch (e) {
      return false;
    }
  }
  function storageWorks() {
    try {
      window.localStorage.setItem(KEY + "test", "1");
      window.localStorage.removeItem(KEY + "test");
      return true;
    } catch (e) {
      return false;
    }
  }
  // "tutorials/03-attribute-table/" -> "03-attribute-table"
  function lessonSlug(path) {
    var m = /tutorials\/(\d\d-[^/]+)\/?/.exec(path);
    return m ? m[1] : null;
  }
  function lessonPage(article, slug) {
    if (article.querySelector(".rgtw-progress")) return;
    var p = document.createElement("p");
    p.className = "rgtw-progress";
    var label = document.createElement("label");
    var box = document.createElement("input");
    box.type = "checkbox";
    box.checked = read(slug);
    box.addEventListener("change", function () {
      write(slug, box.checked);
    });
    label.appendChild(box);
    label.appendChild(document.createTextNode(" 我完成這一課了（記錄在這台電腦的瀏覽器裡，可以在入門教學的課程表看到進度）"));
    p.appendChild(label);
    var errata = article.querySelector(".rgtw-errata");
    article.insertBefore(p, errata);
  }
  function indexPage(article) {
    var table = article.querySelector("table");
    if (!table || table.dataset.rgtwProgress) return;
    table.dataset.rgtwProgress = "1";
    var head = table.querySelector("thead tr");
    if (head) {
      var th = document.createElement("th");
      th.textContent = "完成";
      head.appendChild(th);
    }
    table.querySelectorAll("tbody tr").forEach(function (tr) {
      var a = tr.querySelector("a[href]");
      var slug = a ? lessonSlug(a.getAttribute("href")) || lessonSlug(a.href) : null;
      var td = document.createElement("td");
      td.style.textAlign = "center";
      if (slug && read(slug)) td.textContent = "✓";
      tr.appendChild(td);
    });
  }
  function setup() {
    if (!storageWorks()) return;
    var article = document.querySelector("article.md-content__inner");
    if (!article) return;
    var slug = lessonSlug(location.pathname);
    if (slug) lessonPage(article, slug);
    else if (/tutorials\/?$/.test(location.pathname)) indexPage(article);
  }
  if (typeof document$ !== "undefined") {
    document$.subscribe(setup);
  } else {
    document.addEventListener("DOMContentLoaded", setup);
  }
})();
