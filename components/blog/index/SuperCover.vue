<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch } from 'vue'
import Typed from 'typed.js'
const device = useDevice()

// const screenSize = ref({
//   width: 0,
//   height: 0
// })
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

const emit = defineEmits(['onNext']);
const mottoContent = ref(null)

function onNext() {
  emit('onNext')
}


onMounted(() => {
  new Typed(mottoContent.value, {
    strings: [`
       <div class="text-left">${props.motto?.content}</div>
       <p class="text-right">—— ${props.motto?.author}</p>
    `],
    typeSpeed: 20,
    showCursor: false,
    loop: false,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
  });
})

onBeforeUnmount(() => {
})

</script>

<template>
  <div class="w-full h-screen">
    <div
      class="bg relative left-0 top-0 w-full h-full bg-cover"
      :class="[!device.isIos?'bg-fixed':'']"
      :style="{
          backgroundImage: 'url(' + coverInfo?.cover + ')'
       }">
      <!--  motto    -->
      <div class="absolute top-1/2 left-1/2 w-5/6 md:w-[500px] -translate-x-1/2 -translate-y-1/2 p-2.5
      backdrop-blur-lg rounded-3xl overflow-hidden
       bg-gradient-to-tl from-primary/80 to-accent/80
       dark:bg-gradient-to-tl dark:from-dark-900/70 dark:to-dark-800/70">
        <div class="flex flex-col border-base-200 border p-5 min-h-[180px] rounded-3xl">
          <div class="text-primary-content text-center text-2xl pb-5 border-base-200 border-b">{{ title }}</div>
          <div class="text-primary-content text-base pt-5" >
            <div ref='mottoContent'></div>
          </div>
        </div>
      </div>
      <!--  bg-gradient    -->
      <div class="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-dark-950/70 to-20% dark:to-80%"></div>
      <!--  next-btn    -->
      <a href="#main-section" class="absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer">
        <Icon name='i-heroicons-chevron-down' class="animate-bounce text-4xl text-white"></Icon>
      </a>
      <div v-if="coverInfo?.time"
           class="absolute bottom-3 right-3 px-2 py-1 text-sm
           text-base-content font-medium
           rounded-full
           cursor-pointer
           backdrop-blur-md bg-base-200/50
           hover:bg-base-300/80 opacity-0 md:opacity-100">
        {{ coverInfo?.time }} · 摄于 {{ coverInfo?.place }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg:before {
  content: ' ';
  position: fixed;
  background-size: cover;
  background-position: center;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
