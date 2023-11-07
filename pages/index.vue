<script setup lang="ts">
import SuperCover from "~/components/app/SuperCover.vue";
import ThemeToggle from "~/components/app/ThemeToggle.vue";
import BaseContainer from "~/components/app/BaseContainer.vue";
import Avatar from "~/components/app/Avatar.vue";


const siteTitle = ref('lizhijun.com.cn');


const motto = ref({
  content: '以无厚入有间。',
  author: '庄子'
});

const cover = ref({
  cover: '/cover.png',
  place: '深圳',
  time: '2023年1月',
});

</script>

<template>
<div>
  <super-cover :title="siteTitle" :cover-info='cover' :motto="motto" />
  <u-container class="p-0 mx-auto flex flex-col md:flex-row md:space-x-4" ui="bg-primary">
    <div class="w-full md:w-1/4 sticky top-0 md:block">
      <div class="md:sticky md:top-0 z-10">
        <base-container class="shadow-md">
          <div class="py-6 text-center bg-primary text-white dark:bg-gradient-to-tl dark:from-dark-900 dark:to-dark-800">
            <h1 class="text-xl">Lizhijun.com.cn</h1>
            <div class="text-sm mx-2.5">A Developer & Explorer</div>
          </div>
          <div class="hidden md:flex flex-col">
            <div class="flex flex-row items-center px-5 py-3 cursor-pointer hover:bg-primary-200 hover:text-primary-800">
              <i class="mr-2 i-heroicons-home"></i>
              <span class="text-sm">首页 / Home</span>
            </div>
            <div class="flex flex-row items-center px-5 py-3 cursor-pointer hover:bg-gray-200 hover:text-primary">
              <i class="mr-2 i-heroicons-archive-box"></i>
              <span class="text-sm">归档 / Archives</span>
            </div>
            <div class="flex flex-row items-center px-5 py-3 cursor-pointer hover:bg-gray-200 hover:text-primary">
              <i class="mr-2 i-heroicons-swatch"></i>
              <span class="text-sm">分类 / Categories</span>
            </div>
            <div class="flex flex-row items-center px-5 py-3 cursor-pointer hover:bg-gray-200 hover:text-primary">
              <i class="mr-2 i-heroicons-tag"></i>
              <span class="text-sm">标签 / Tags</span>
            </div>

            <nuxt-link to="/about" class="flex flex-row items-center px-5 py-3 cursor-pointer hover:bg-gray-200 hover:text-primary">
              <i class="mr-2 i-heroicons-user"></i>
              <span class="text-sm">关于 / Intro Myself</span>
            </nuxt-link>
          </div>
        </base-container>

        <base-container class="mt-2 px-5 py-3 shadow">
          <avatar />
        </base-container>
      </div>

      <base-container class="mt-2 px-5 py-3 shadow grid grid-cols-2">
        <div class="flex items-center justify-center">
          <theme-toggle class="flex-1" />
        </div>
        <div class="flex items-center justify-center">
          <color-picker class="flex-1" />
        </div>
      </base-container>

    </div>
    <div class="w-full md:w-3/4">
      <base-container style="height: 2000px">
        <div class="text-lg text-primary">文章列表</div>

        <div class="flex flex-row items-center">
          <div>

          </div>
          <div>

          </div>
        </div>
      </base-container>
    </div>
  </u-container>
</div>
</template>

<style scoped>
</style>
