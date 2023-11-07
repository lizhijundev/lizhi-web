<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

const screenHeight = ref(1200)
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  coverInfo: {
    type: Object,
    default: () => {
      return {
        cover: '/cover.png',
        time: '2023年1月',
        place: '深圳',
      }
    }
  },
  motto: {
    type: Object,
    default: () => {
      return {
        content: '',
        author: ''
      }
    }
  }
})

function setBgSize() {
  console.log('屏幕高度', screenHeight.value)
  screenHeight.value = `${window.innerHeight}px`
}

onMounted(() => {
  console.log('mounted')
  setBgSize()
  window.addEventListener('onresize', setBgSize)
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
  window.removeEventListener('onresize', setBgSize)
})

</script>

<template>
  <div
      class="w-full h-screen">
    <div class="relative left-0 top-0 w-full h-full">
      <div class="absolute top-1/2 left-1/2 w-5/6 md:w-[500px] -translate-x-1/2 -translate-y-1/2 p-2.5
       bg-white/75 backdrop-blur-md dark:bg-dark-950/40 z-10">
        <div class="flex flex-col border-primary border p-5 divide-y divide-primary dark:border-white dark:divide-white">
          <div class="text-center text-primary text-2xl pb-5 dark:text-white">{{ title }}</div>
          <div class="text-primary text-base pt-5 dark:text-white">
            <div class="text-center">{{ motto.content }}</div>
            <div class="text-right">—— {{ motto.author }}</div>
          </div>
        </div>
      </div>

      <div
          class="w-full h-screen bg-auto md:bg-cover bg-center bg-fixed bg-no-repeat"
          :style="`background-image: url(${coverInfo.cover});background-size: 100% ${screenHeight}`"></div>
      <div class="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-dark-950/70 to-20% dark:to-80%"></div>
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2">
        <div class="animate-bounce text-4xl text-white i-heroicons-chevron-down"></div>
      </div>
      <div v-if="coverInfo.time" class="absolute bottom-3 right-3 px-2 py-1 text-sm text-white rounded-full backdrop-blur-md bg-dark-50/50 hover:bg-dark-50 opacity-0 md:opacity-100">
        {{ coverInfo.time }} · 摄于 {{ coverInfo.place }}
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
