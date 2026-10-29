// 0〜(length - 1) のどれかの番号を、ランダムに選ぶ
function pickRandomIndex(length: number): number {
  return Math.floor(Math.random() * length);
}

// ① 時間帯に合わせて、あいさつを変える
const greeting = document.getElementById("greeting") as HTMLElement;
const hour: number = new Date().getHours();

if (hour < 10) {
  greeting.textContent = "おはようございます！";
} else if (hour < 18) {
  greeting.textContent = "こんにちは！";
} else {
  greeting.textContent = "こんばんは！";
}

// ② 鉄棒の人が、くるくる回り続ける
const person = document.getElementById("person") as HTMLImageElement;
const tetsubo = document.getElementById("tetsubo") as HTMLElement;
let angle: number = 0;
let moving: boolean = true;

setInterval(function (): void {
  if (moving) {
    angle = angle + 5;
    person.style.transform = "rotate(" + angle + "deg)";
  }
}, 30);

tetsubo.addEventListener("click", function (): void {
  moving = !moving;
});

// ③ コントローラーのボタンが、ポチポチ光る
const padButtons = document.querySelectorAll(".pad-button");

setInterval(function (): void {
  const padButton = padButtons[pickRandomIndex(padButtons.length)];
  padButton.classList.add("pressed");
  setTimeout(function (): void {
    padButton.classList.remove("pressed");
  }, 200);
}, 350);

// ④ ボタンを押すと、ひとことがランダムに変わる
const messages: string[] = [
  "最近はエアロピクルスも好きだよ",
  "スーの歌も好きだよ",
  "ねずみなんだけど丑年なんでスー"
];
const message = document.getElementById("message") as HTMLElement;
const messageButton = document.getElementById("message-button") as HTMLButtonElement;

messageButton.addEventListener("click", function (): void {
  message.textContent = messages[pickRandomIndex(messages.length)];
});
