<script setup lang="ts">
import BaseContainer from "~/components/app/BaseContainer.vue";
import ThemeToggle from "~/components/app/ThemeToggle.vue";
import ColorPicker from "~/components/app/ColorPicker.vue";
import Avatar from "~/components/app/Avatar.vue";
import LifeTime from "~/components/app/LifeTime"

const appConfig = useAppConfig()
const route = useRoute()

</script>

<template>
  <div class="sidebar hidden md:block pr-4">
    <base-container>
      <div class="py-6 text-center bg-gradient-to-tl from-primary to-secondary text-primary-content dark:bg-gradient-to-tl dark:from-dark-900 dark:to-dark-800">
        <h1 class="text-xl">Lizhijun.com.cn</h1>
        <div class="text-sm mx-2.5">A Developer & Explorer</div>
      </div>
      <ul class="w-full hidden md:block menu">
        <li v-for='item in appConfig.blogNav' :key='item.name' class='mb-1'>
          <nuxt-link :to="item.url" :class="['font-medium', item.name === route.name ? 'active' : '']">
            <Icon :name='item.icon' class='text-sm'/>
            {{ item.title }} | {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </base-container>

    <base-container class="mt-4 px-2.5 py-5 flex flex-col items-center">
      <avatar class='w-[120px]' />
      <div class='text-base text-color-primary leading-9'>荔枝君</div>
      <life-time class='text-color-secondary text-xs font-mono' />
      <div class='text-color-secondary text-sm font-mono'>A Developer & Explorer</div>
      <div class="w-full my-2.5 grid grid-cols-3 divide-x">
        <div class='group cursor-pointer flex flex-col items-center'>
          <div class='leading-8 text-color-primary text-base group-hover:text-primary'>9</div>
          <div class='text-color-secondary text-xs'>文章</div>
        </div>
        <div class='group cursor-pointer flex flex-col items-center'>
          <div class='leading-8 text-color-primary text-base group-hover:text-primary'>21221</div>
          <div class='text-color-secondary text-xs'>分类</div>
        </div>

        <div class='group cursor-pointer flex flex-col items-center'>
          <div class='leading-8 text-color-primary text-base group-hover:text-primary'>1111</div>
          <div class='text-color-secondary text-xs'>标签</div>
        </div>
      </div>
      <ul class="w-full menu p-0 grid grid-cols-2">
        <li v-for='item in appConfig.linkNav' :key='item.name' class='mb-2'>
          <a :href="item.url" :class="['font-medium', 'text-sm']">
            <Icon :name='item.icon' class='text-sm'/>
            {{ item.title }}
          </a>
        </li>
      </ul>
    </base-container>


    <base-container class="mt-2 px-5 py-3 grid grid-cols-2">
      <div class="flex items-center justify-center">
        <theme-toggle class="flex-1" />
      </div>
      <div class="flex items-center justify-center">
        <color-picker class="flex-1" />
      </div>
    </base-container>
  </div>

</template>

<style scoped>
</style>
