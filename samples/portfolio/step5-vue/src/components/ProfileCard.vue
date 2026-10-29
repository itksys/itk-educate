<script setup lang="ts">
// 親（App.vue）から受け取るデータ
defineProps<{
  title: string
  text?: string
}>()
</script>

<template>
  <section class="card">
    <h2>{{ title }}</h2>
    <p v-if="text">{{ text }}</p>
    <slot></slot>
  </section>
</template>
