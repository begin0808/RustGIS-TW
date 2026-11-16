// Add a "report a mistake on this page" link at the end of each page. It opens a new GitHub
// issue with the page's title and address filled in.
(function () {
  var REPO = "https://github.com/begin0808/RustGIS-TW";
  function setup() {
    var article = document.querySelector("article.md-content__inner");
    if (!article || article.querySelector(".rgtw-errata")) return;
    var h1 = article.querySelector("h1");
    var title = h1 ? h1.textContent.replace(/[¶#]\s*$/, "").trim() : document.title;
    var url = location.origin + location.pathname;
    var issue =
      REPO +
      "/issues/new?title=" +
      encodeURIComponent("[勘誤] " + title) +
      "&body=" +
      encodeURIComponent("頁面：" + url + "\n\n哪裡有問題：\n\n建議怎麼改：\n");
    var p = document.createElement("p");
    p.className = "rgtw-errata";
    p.innerHTML = '發現錯誤或看不懂的地方？<a href="' + issue + '" target="_blank" rel="noopener">回報本頁勘誤</a>（需要 GitHub 帳號）。';
    article.appendChild(p);
  }
  if (typeof document$ !== "undefined") {
    document$.subscribe(setup);
  } else {
    document.addEventListener("DOMContentLoaded", setup);
  }
})();
