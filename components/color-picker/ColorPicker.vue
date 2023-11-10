
<script setup lang="ts">
import colors from '#tailwind-config/theme/colors'

const appConfig = useAppConfig()
const colorMode = useColorMode()

// Computed
const isOpen = ref(false)

console.log('appConfig.ui.colors', appConfig.ui.colors)
console.log('colors', colors)
console.log('colorMode', colorMode.value)
const colorNames = {
  red: '荔枝',
  blue: '天空',
  dark: '暗夜黑',
  cool: '钛金属'
}

const primaryColors = computed(() => appConfig.ui.colors.filter(color => !['primary', 'gray'].includes(color)).map(color => ({ value: color, text: colorNames[color], hex: colors[color][colorMode.value === 'dark' ? 400 : 500] })))
const primary = computed({
  get () {
    return primaryColors.value.find(option => option.value === appConfig.ui.primary)
  },
  set (option) {
    console.log('set primary color', option.value)
    appConfig.ui.primary = option.value
    window.localStorage.setItem('nuxt-ui-primary', appConfig.ui.primary)
  }
})

const grayColors = computed(() => ['cool', 'dark'].map(color => ({ value: color, text: colorNames[color], hex: colors[color][800] })))
const gray = computed({
  get () {
    return grayColors.value.find(option => option.value === appConfig.ui.gray)
  },
  set (option) {
    console.log('set gray color', option.value)
    appConfig.ui.gray = option.value

    window.localStorage.setItem('nuxt-ui-gray', appConfig.ui.gray)
  }
})

console.log('primaryColors', primaryColors.value)
console.log('grayColors', grayColors.value)

</script>

<template>
  <div>
    <u-button color="gray" variant="ghost" square aria-label="Color picker" @click="isOpen = true" >
      <u-icon name="i-heroicons-sparkles-20-solid" class="w-5 h-5 text-primary-500 dark:text-primary-400" />
    </u-button>
    <u-modal v-model="isOpen" class="z-50">
      <u-card :ui="{ divide: 'divide-y divide-primary-50 dark:divide-dark-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base leading-6 text-primary dark:text-white">选择主题</h3>
            <u-button color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>
        <div>
          <div class="text-sm text-gray-500 pb-3">主题色</div>
          <div class="grid grid-cols-2 gap-px">
            <color-picker-pill v-for="color in primaryColors" :key="color.value" :color="color" :selected="primary" @select="primary = color" />
          </div>

          <div class="text-sm text-gray-500 py-3">背景色</div>
          <div class="grid grid-cols-2 gap-px">
            <color-picker-pill v-for="color in grayColors" :key="color.value" :color="color" :selected="gray" @select="gray = color" />
          </div>
        </div>
      </u-card>
    </u-modal>
  </div>
</template>
