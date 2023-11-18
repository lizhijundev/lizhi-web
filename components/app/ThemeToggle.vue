<script setup>
const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <ClientOnly>
    <button
        aria-label="Theme"
        class='btn btn-info btn-circle btn-ghost'
        @click="isDark = !isDark">
      <Icon v-show='isDark' name='i-heroicons-moon-20-solid' class='text-lg text-base-content'/>
      <Icon v-show='!isDark' name='i-heroicons-sun-20-solid' class='text-lg text-base-content'/>
    </button>

    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>
