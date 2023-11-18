
<script setup lang="ts">
// import colors from '#tailwind-config/theme/colors'
import theme from '#tailwind-config/daisyui/themes'

const colorMode = useColorMode()

const colorNames = {
  light: '科技蓝',
  dark: '暗夜黑',
  lichi: '荔枝'
}

const themeArr: any = theme.map((item: any) => {
  const key = Object.keys(item)[0];
  const value = item[key];
  return { name: key, theme: value, title: colorNames[key] };
});

const colorPickerModel = ref('')

function onSelect(theme: string) {
  colorMode.preference = theme
}

</script>

<template>
  <div>
    <label
      class='btn btn-info btn-circle btn-ghost'
      @click='colorPickerModel.showModal()'>
      <Icon name="i-heroicons-sparkles-20-solid" class="text-base-content text-lg" />
    </label>

    <dialog ref="colorPickerModel" id="colorPickerModel"  class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-base text-base-content">
            <Icon name='i-heroicons-x-mark-20-solid'></Icon>
          </button>
        </form>
        <h3 class="font-bold text-base-content text-lg">选择主题</h3>
        <div class="py-4 grid grid-cols-2 md:grid-cols-3 gap-px">
          <div v-for="item in themeArr" :key="item.name" >
            <button
              :class="['btn', 'btn-ghost', item.name === colorMode.value ? 'btn-active' : '']"
              @click.stop.prevent="onSelect(item.name)"
            >
              <span class="w-8 h-8 rounded-md" :style="{ backgroundColor: item.theme.primary }" />
              <span class="mt-1 text-sm text-base-content">{{ item.title }}</span>
            </button>

          </div>
        </div>

      </div>
      <label class="modal-backdrop" for="colorPickerModel">Close</label>
    </dialog>
  </div>
</template>
