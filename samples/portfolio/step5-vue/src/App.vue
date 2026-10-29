<script setup lang="ts">
import ProfileCard from './components/ProfileCard.vue'
import TetsuboAnimation from './components/TetsuboAnimation.vue'
import GameController from './components/GameController.vue'
import RandomMessage from './components/RandomMessage.vue'

// ① 時間帯に合わせて、あいさつを変える
function getGreeting(hour: number): string {
  if (hour < 10) {
    return 'おはようございます！'
  } else if (hour < 18) {
    return 'こんにちは！'
  } else {
    return 'こんばんは！'
  }
}

const greeting: string = getGreeting(new Date().getHours())
</script>

<template>
  <header>
    <p id="greeting">{{ greeting }}</p>
    <h1>Mayu Takahashi Portfolio</h1>
    <p>はじめまして！ 私の好きなものを紹介します。</p>
  </header>

  <main>
    <ProfileCard title="特技：鉄棒" text="子どものころから鉄棒が大好きです。">
      <TetsuboAnimation />
    </ProfileCard>

    <ProfileCard
      title="今いちばんハマっているもの：Valorant"
      text="5人対5人で戦う、チーム対戦型のシューティングゲームです。"
    >
      <GameController />
    </ProfileCard>

    <ProfileCard title="ひとこと">
      <RandomMessage />
    </ProfileCard>
  </main>

  <footer>
    <p>&copy; 2026 Mayu Takahashi</p>
  </footer>
</template>
