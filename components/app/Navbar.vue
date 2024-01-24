<script lang='ts' setup>
import Avatar from '~/components/app/Avatar.vue'
import ThemeToggle from '~/components/app/ThemeToggle.vue'
import { useDebounceFn } from '@vueuse/core'

const appConfig = useAppConfig()
const route = useRoute()

const isScrollTop = ref(true)
const displayY = ref(0)

const onScroll = useDebounceFn(() => {
  // do something
  displayY.value = window.pageYOffset || document.documentElement.scrollTop
  isScrollTop.value = displayY.value === 0
  // console.log(isScrollTop.value, displayY.value)
}, 10)

onMounted(() => {
  window.addEventListener('scroll', onScroll);


})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
})

</script>

<template>
  <div class="fixed top-0 z-10 w-full"
    :class="[isScrollTop ? 'bg-transparent' : 'bg-base-300/80 backdrop-blur-lg shadow md:shadow-md']">
    <div class='container mx-auto main-container flex-row-y-center justify-between'>
      <div
        class='w-full flex-row-y-center divide-x px-1'
        :class="[isScrollTop ? 'divide-gray-400' : 'divide-gray-600']">
        <nuxt-link to="/" class='shrink-0 flex-row-y-center md:mr-2'>
          <avatar class='w-10 mr-1' />
          <div class='mx-1 text-lg font-normal'>Lizhijun.com.cn</div>
        </nuxt-link>
        <div class='hidden px-1 md:flex-row-xy-center'>
          <div class="dropdown dropdown-bottom">
            <label
              tabindex="0"
              class="btn btn-sm px-2 btn-ghost
                min-w-min truncate
                flex-row-xy-center
                hover:bg-base-300/60 hover:text-primary">
              <template v-for='item in appConfig.blogNav' :key='item.name'>
                <span v-if='item.name === route.name'  class='max-w-[60px] truncate text-base font-normal pr-1'>{{ item.title }}</span>
              </template>
              <Icon name='ep:arrow-down' class='text-base'/>
            </label>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-52">
              <li v-for='item in appConfig.blogNav' :key='item.name'>
                <nuxt-link :to="item.url" :class="['font-medium', item.name === route.name ? 'active' : '']">
                  <Icon :name='item.icon' class='text-sm'/>
                  {{ item.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class='flex-row-xy-center'>
        <theme-toggle />
        <div class="dropdown dropdown-bottom dropdown-end">
          <label
            tabindex="0"
            class="btn btn-info btn-circle btn-ghost">
            <Icon name='material-symbols:menu' class='text-base'/>
          </label>
          <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-52">
            <li v-for='item in appConfig.blogNav' :key='item.name'>
              <nuxt-link :to="item.url" :class="['font-medium', item.name === route.name ? 'active' : '']">
                <Icon :name='item.icon' class='text-sm'/>
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>