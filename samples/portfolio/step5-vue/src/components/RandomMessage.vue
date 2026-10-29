<script setup lang="ts">
import { ref } from 'vue'
import { pickRandomIndex } from '../utils/pickRandomIndex'

// ④ ボタンを押すと、ひとことがランダムに変わる
const messages: string[] = [
  '最近はエアロピクルスも好きだよ',
  'スーの歌も好きだよ',
  'ねずみなんだけど丑年なんでスー'
]
const message = ref<string>('下のボタンを押してみてね。')

function showMessage(): void {
  const picked = messages[pickRandomIndex(messages.length)]
  if (picked) {
    message.value = picked
  }
}
</script>

<template>
  <p id="message">{{ message }}</p>
  <button id="message-button" @click="showMessage">ひとことを見る</button>
</template>
