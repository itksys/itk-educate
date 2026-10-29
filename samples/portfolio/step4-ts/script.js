"use strict";
// 0〜(length - 1) のどれかの番号を、ランダムに選ぶ
function pickRandomIndex(length) {
    return Math.floor(Math.random() * length);
}
// ① 時間帯に合わせて、あいさつを変える
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
if (hour < 10) {
    greeting.textContent = "おはようございます！";
}
else if (hour < 18) {
    greeting.textContent = "こんにちは！";
}
else {
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
    const padButton = padButtons[pickRandomIndex(padButtons.length)];
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
    message.textContent = messages[pickRandomIndex(messages.length)];
});
