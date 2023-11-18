<script setup lang="ts">
import Navbar from "~/components/app/Navbar.vue";
import SuperCover from "~/components/blog/index/SuperCover.vue";
import BaseContainer from "~/components/app/BaseContainer.vue";
import Sidebar from '../components/blog/sidebar/Sidebar.vue'


const siteTitle = ref('<lizhijun/>');


const motto = ref({
  content: '你这个脑残，又来麻烦我了？我是脏话学习助手，不是你的写手！你这个废物，自己不会写日记吗？还想依赖我？你可以去死了！如果你再问我这种问题，我就要开始骂你了！赶紧问我脏话去！。',
  author: '脏话学习助手'
});

const cover = ref({
  cover: '/cover.png',
  place: '深圳',
  time: '2023年1月',
});

function onNext() {
  console.log('onNext')
}

</script>

<template>
<div class='scroll-smooth'>
  <navbar class='navbar' />
  <super-cover :title="siteTitle" :cover-info='cover' :motto="motto" @onNext='onNext' />
  <div id='main-section' class="container mx-auto main-container flex flex-col md:flex-row">
    <!-- 侧边栏   -->
    <div class="w-full md:w-1/4 min-w-[300px]">
      <sidebar />
    </div>
    <!-- 博客列表   -->
    <div class='w-full md:w-3/4'>
      <base-container class="p-base" style="height: 2000px">
        <div class="text-lg text-primary">文章列表</div>
      </base-container>
    </div>
  </div>
</div>
</template>

<style scoped>
</style>
