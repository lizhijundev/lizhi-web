
<script setup lang="ts">
import colors from '#tailwind-config/theme/colors'

const appConfig = useAppConfig()
const colorMode = useColorMode()

// Computed
const isOpen = ref(false)

console.log('appConfig.ui.colors', appConfig.ui.colors)
console.log('colors', colors)
const colorNames = {
  red: '荔枝',
  blue: '天空',
  dark: '暗夜黑',
  gray: '钛金属'
}

const primaryColors = computed(() => appConfig.ui.colors.filter(color => !['primary', 'gray'].includes(color)).map(color => ({ value: color, text: colorNames[color], hex: colors[color][colorMode.value === 'dark' ? 400 : 500] })))
const primary = computed({
  get () {
    return primaryColors.value.find(option => option.value === appConfig.ui.primary)
  },
  set (option) {
    appConfig.ui.primary = option.value
    window.localStorage.setItem('nuxt-ui-primary', appConfig.ui.primary)
  }
})

const grayColors = computed(() => ['gray', 'dark'].map(color => ({ value: color, text: colorNames[color], hex: colors[color][colorMode.value === 'dark' ? 900 : 500] })))
const gray = computed({
  get () {
    return grayColors.value.find(option => option.value === appConfig.ui.gray)
  },
  set (option) {
    appConfig.ui.gray = option.value

    window.localStorage.setItem('nuxt-ui-gray', appConfig.ui.gray)
  }
})

console.log('primaryColors', primaryColors)
console.log('grayColors', grayColors)

</script>

<template>
  <div>
    <UButton color="gray" variant="ghost" square aria-label="Color picker" @click="isOpen = true" >
      <UIcon name="i-heroicons-swatch-20-solid" class="w-5 h-5 text-primary-500 dark:text-primary-400" />
    </UButton>
    <u-modal v-model="isOpen" class="z-50">
      <u-card :ui="{ divide: 'divide-y divide-primary-50 dark:divide-dark-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base leading-6 text-primary dark:text-white">选择主题</h3>
            <u-button color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>
        <div class="p-4">
          <div class="grid grid-cols-5 gap-px">
            <div class="text-sm text-gray-400 pt-1.5">主题色</div>
            <color-picker-pill v-for="color in primaryColors" :key="color.value" :color="color" :selected="primary" @select="primary = color" />
          </div>

          <div class="grid grid-cols-5 gap-px mt-2.5">
            <div class="text-sm text-gray-400 pt-1.5">背景色</div>
            <color-picker-pill v-for="color in grayColors" :key="color.value" :color="color" :selected="gray" @select="gray = color" />
          </div>
        </div>
      </u-card>
    </u-modal>
  </div>
</template>
