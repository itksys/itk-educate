# ITK Educate

社内向けの IT 教材サイトです。ビルド不要の静的サイト（HTML / CSS / JavaScript）で、外部ライブラリやネット接続なしで動作します。

## 見方

`index.html` をブラウザで開くだけで閲覧できます。

## 構成

```
itk-educate/
├── index.html                          トップ（レッスン一覧）
├── lessons/
│   ├── what-it-engineers-build.html    Lesson 1: ITエンジニアは何を作る人？
│   ├── how-apps-work.html              Lesson 2: アプリが動くしくみ（OSI参照モデルほか）
│   ├── it-job-roles.html               Lesson 3: IT業界の職種
│   ├── development-process.html        Lesson 4: 開発の流れ
│   ├── html-basics.html                Lesson 5: HTMLとは？はじめての Hello World
│   ├── dev-environment.html            Lesson 6: 開発環境を整えよう
│   ├── portfolio-html.html             Lesson 7: ポートフォリオ① HTML
│   ├── portfolio-css.html              Lesson 8: ポートフォリオ② CSS
│   └── portfolio-js.html               Lesson 9: ポートフォリオ③ JavaScript
├── samples/
│   ├── hello/                          Lesson 5 の Hello World
│   └── portfolio/step1-html〜step3-js/  Lesson 7〜9 の完成見本（レッスン中のコードはここと同じ内容）
└── assets/
    ├── css/style.css                   共通スタイル（ライト / ダーク対応）
    └── js/main.js                      テーマ切り替え・確認クイズ
```

## レッスンの追加方法

1. `lessons/` に既存のレッスンをコピーして新しい HTML を作る
2. `index.html` のレッスン一覧にリンクを追加する

確認クイズは次の形式で書くと、`main.js` が自動で正誤判定します。

```html
<div class="q" data-answer="正解の選択肢" data-explain="正解時の解説">
  <p>問題文</p>
  <div class="choices"><button type="button">選択肢A</button><button type="button">選択肢B</button></div>
  <p class="feedback" aria-live="polite"></p>
</div>
```
