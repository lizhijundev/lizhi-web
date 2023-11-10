<template>
    <UButton
        class="flex flex-row content-center items-center mr-2"
        color="white"
        square
        :ui="{
        color: {
          white: {
            solid: 'ring-gray-400 click:bg-primary-200 dark:bg-dark-800',
            ghost: 'hover:bg-primary-200 dark:hover:bg-dark-800/50'
          }
        }
      }"
        :variant="color.value === selected.value ? 'solid' : 'ghost'"
        @click.stop.prevent="$emit('select')"
    >
      <span class="w-8 h-8 rounded-md" :style="{ backgroundColor: color.hex }" />
      <span class="mt-1 text-sm text-gray-400">{{ color.text }}</span>
    </UButton>
</template>

<script setup lang="ts">
defineProps<{ color: { value: string, hex: string, text: string}, selected: { value: string} }>()
defineEmits(['select'])
</script>
