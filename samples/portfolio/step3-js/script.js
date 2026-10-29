// ① 時間帯に合わせて、あいさつを変える
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 10) {
  greeting.textContent = "おはようございます！";
} else if (hour < 18) {
  greeting.textContent = "こんにちは！";
} else {
  greeting.textContent = "こんばんは！";
}

// ② 鉄棒の人が、くるくる回り続ける
const person = document.getElementById("person");
const tetsubo = document.getElementById("tetsubo");
let angle = 0;
let moving = true;

setInterval(function () {
  if (moving) {
    angle = angle + 5;
    person.style.transform = "rotate(" + angle + "deg)";
  }
}, 30);

tetsubo.addEventListener("click", function () {
  moving = !moving;
});

// ③ コントローラーのボタンが、ポチポチ光る
const padButtons = document.querySelectorAll(".pad-button");

setInterval(function () {
  const index = Math.floor(Math.random() * padButtons.length);
  const padButton = padButtons[index];
  padButton.classList.add("pressed");
  setTimeout(function () {
    padButton.classList.remove("pressed");
  }, 200);
}, 350);

// ④ ボタンを押すと、ひとことがランダムに変わる
const messages = [
  "最近はエアロピクルスも好きだよ",
  "スーの歌も好きだよ",
  "ねずみなんだけど丑年なんでスー"
];
const message = document.getElementById("message");
const messageButton = document.getElementById("message-button");

messageButton.addEventListener("click", function () {
  const index = Math.floor(Math.random() * messages.length);
  message.textContent = messages[index];
});
