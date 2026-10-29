<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { pickRandomIndex } from '../utils/pickRandomIndex'

// ③ コントローラーのボタンが、ポチポチ光る
const colors: string[] = ['red', 'yellow', 'green', 'blue']
const pressedIndex = ref<number>(-1) // 光っているボタンの番号（-1 はどれも光っていない）
let timer: number = 0

onMounted(function (): void {
  timer = window.setInterval(function (): void {
    pressedIndex.value = pickRandomIndex(colors.length)
    window.setTimeout(function (): void {
      pressedIndex.value = -1
    }, 200)
  }, 350)
})

onUnmounted(function (): void {
  window.clearInterval(timer)
})
</script>

<template>
  <div class="stage">
    <img src="../assets/images/game-base.svg" alt="ゲームのコントローラーのイラスト">
    <span
      v-for="(color, index) in colors"
      :key="color"
      class="pad-button"
      :class="[color, { pressed: index === pressedIndex }]"
    ></span>
  </div>
</template>
