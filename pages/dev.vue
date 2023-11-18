<script setup lang="ts">
import { UseClipboard } from '@vueuse/components';
import { usePermission } from '@vueuse/core';

definePageMeta({
  layout: 'blog'
})
const colorDrawer = ref([
  {name: '主色调', bg: 'bg-primary', color: 'text-primary-content', vname: 'primary'},
  {name: '第二色调', bg: 'bg-secondary', color: 'text-secondary-content', vname: 'secondary'},
  {name: '强调色', bg: 'bg-accent', color: 'text-accent-content', vname: 'accent'},
  {name: '中立色调', bg: 'bg-neutral', color: 'text-neutral-content', vname: 'neutral'},
  {name: '背景色1（层级1）', bg: 'bg-base-100', color: 'text-base-content', vname: 'base-100'},
  {name: '背景色2（层级2）', bg: 'bg-base-200', color: 'text-base-content', vname: 'base-200'},
  {name: '背景色3（层级3）', bg: 'bg-base-300', color: 'text-base-content', vname: 'base-300'},
  {name: 'info', bg: 'bg-info', color: 'text-info-content', vname: 'info'},
  {name: 'success', bg: 'bg-success', color: 'text-success-content', vname: 'success'},
  {name: 'warning', bg: 'bg-warning', color: 'text-warning-content', vname: 'warning'},
  {name: 'error', bg: 'bg-error', color: 'text-error-content', vname: 'error'},
])


const permissionRead = usePermission('clipboard-read')
const permissionWrite = usePermission('clipboard-write')


</script>

<template>
<div>
  <div class='p-base'>开发测试</div>

  <div class="p-base">
    <div class="bg-base-200 border-base-300 p-base">
      <div>剪切板权限: 读 <b>{{ permissionRead }}</b> | 写 <b>{{ permissionWrite }}</b></div>
      <div
        v-for='(item, index) in colorDrawer'
        :key='index'
        class='flex flex-row items-center'
        :class="[item.color, item.bg]">
        <div class='p-2 flex flex-col justify-center'>
          <div class='mb-1'>{{item.name}}</div>
          <div class='mb-1'>
            .{{item.bg}}
            <UseClipboard :source="item.bg" v-slot="{ copy, copied }">
              <button :class="['btn', 'btn-xs', `btn-${item.vname}`]" @click="copy()">
                {{ copied ? '已复制' : '复制背景样式' }}
              </button>
            </UseClipboard>
          </div>
          <div>
            .{{item.color}}
            <UseClipboard :source="item.color" v-slot="{ copy, copied }">
              <button :class="['btn', 'btn-xs', `btn-${item.vname}`]" @click="copy()">
                {{ copied ? '已复制' : '复制文字样式' }}
              </button>
            </UseClipboard>
          </div>
        </div>
        <!--      <div class='w-3/5 p-2 bg-white'>-->
        <!--        <button :class="['btn', 'btn-xs', `btn-${item.vname}`]">按钮{{item.vname}}</button>-->
        <!--      </div>-->
      </div>
    </div>

    <hr class='my-base'/>

    <div class="bg-base-200 border-base-300 p-base">
      <h1 class='text-2xl text-color-brand'>text-color-brand</h1>
      <h2 class='text-lg text-color-primary'>text-color-primary</h2>
      <h3 class='test-base text-color-secondary'>text-color-secondary</h3>
      <div class='test-base text-color-placeholder'>text-color-placeholder</div>
      <div class='test-base text-color-disabled'>text-color-disabled</div>
      <p class='text-color-content'>text-color-content</p>
      <a href='#'>链接</a>

      <hr class='my-base'/>

      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
      <h4>H4</h4>
      <h5>H5</h5>

    </div>
  </div>



</div>
</template>

<style scoped>


</style>
