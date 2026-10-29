<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// ② 鉄棒の人が、くるくる回り続ける
const angle = ref<number>(0)
const moving = ref<boolean>(true)
let timer: number = 0

onMounted(function (): void {
  timer = window.setInterval(function (): void {
    if (moving.value) {
      angle.value = angle.value + 5
    }
  }, 30)
})

onUnmounted(function (): void {
  window.clearInterval(timer)
})

function toggle(): void {
  moving.value = !moving.value
}
</script>

<template>
  <div class="stage" id="tetsubo" @click="toggle">
    <img src="../assets/images/tetsubo-bar.svg" alt="鉄棒のイラスト">
    <img
      src="../assets/images/person.svg"
      alt=""
      class="person"
      :style="{ transform: 'rotate(' + angle + 'deg)' }"
    >
  </div>
  <p class="hint">イラストをクリックすると、止まったり動いたりします。</p>
</template>
