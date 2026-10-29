// ==========================================================
// ITK Educate - 共通スクリプト
// ==========================================================

(function () {
  var root = document.documentElement;

  // ---------- ライト／ダーク切り替え ----------
  function readTheme() {
    try { return localStorage.getItem("itk-theme"); } catch (e) { return null; }
  }

  function saveTheme(value) {
    try { localStorage.setItem("itk-theme", value); } catch (e) { /* 保存できなくても動作に支障なし */ }
  }

  var saved = readTheme();
  if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);

  function currentTheme() {
    var attr = root.getAttribute("data-theme");
    if (attr) return attr;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".theme-toggle");
    if (toggle) {
      var label = function () {
        toggle.textContent = currentTheme() === "dark" ? "☀ ライト" : "☾ ダーク";
      };
      label();
      toggle.addEventListener("click", function () {
        var next = currentTheme() === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        saveTheme(next);
        label();
      });
    }

    // ---------- コードのコピーボタン ----------
    document.querySelectorAll(".copy-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var code = btn.closest(".code-block").querySelector("code").textContent;
        var done = function () {
          btn.textContent = "コピーしました";
          setTimeout(function () { btn.textContent = "コピー"; }, 1500);
        };
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(code).then(done);
        } else {
          var area = document.createElement("textarea");
          area.value = code;
          document.body.appendChild(area);
          area.select();
          document.execCommand("copy");
          document.body.removeChild(area);
          done();
        }
      });
    });

    // ---------- 確認クイズ ----------
    // <div class="q" data-answer="正解の選択肢"> 内の button をクリックで判定
    document.querySelectorAll(".q").forEach(function (q) {
      var answer = q.getAttribute("data-answer");
      var feedback = q.querySelector(".feedback");
      var explain = q.getAttribute("data-explain") || "";
      q.querySelectorAll("button").forEach(function (btn) {
        btn.addEventListener("click", function () {
          q.querySelectorAll("button").forEach(function (b) { b.classList.remove("correct", "wrong"); });
          if (btn.textContent.trim() === answer) {
            btn.classList.add("correct");
            feedback.textContent = "正解！ " + explain;
          } else {
            btn.classList.add("wrong");
            feedback.textContent = "もう一度考えてみましょう。";
          }
        });
      });
    });
  });
})();
