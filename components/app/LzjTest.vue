<script setup lang="ts">

</script>

<template>
  <div class="w-full p-3 flex flex-row">
    <div class='w-20 h-20 p50'>p50</div>
    <div class='w-20 h-20 p100'>p100</div>
    <div class='w-20 h-20 p200'>p200</div>
    <div class='w-20 h-20 p300'>p300</div>
    <div class='w-20 h-20 p400'>p400</div>
    <div class='w-20 h-20 p500'>p500</div>
    <div class='w-20 h-20 p600'>p600</div>
    <div class='w-20 h-20 p700'>p700</div>
    <div class='w-20 h-20 p800'>p800</div>
    <div class='w-20 h-20 p900'>p900</div>
    <div class='w-20 h-20 p950'>p950</div>
  </div>
  <div class="w-full p-3 flex flex-row">
    <div class='w-20 h-20 g50'>g50</div>
    <div class='w-20 h-20 g100'>g100</div>
    <div class='w-20 h-20 g200'>g200</div>
    <div class='w-20 h-20 g300'>g300</div>
    <div class='w-20 h-20 g400'>g400</div>
    <div class='w-20 h-20 g500'>g500</div>
    <div class='w-20 h-20 g600'>g600</div>
    <div class='w-20 h-20 g700'>g700</div>
    <div class='w-20 h-20 g800'>g800</div>
    <div class='w-20 h-20 g900'>g900</div>
    <div class='w-20 h-20 g950'>g950</div>
  </div>

  <div class="w-full p-3 flex flex-row">
    <div class='w-20 h-20 bg-brand'>text-brand</div>
  </div>
  <div class='w-full p-4'>
    <h1 class='text-2xl text-color-brand'>text-color-brand</h1>
    <h2 class='text-lg text-color-primary'>text-color-primary</h2>
    <h3 class='test-base text-color-secondary'>text-color-secondary</h3>
    <div class='test-base text-color-placeholder'>text-color-placeholder</div>
    <div class='test-base text-color-disabled'>text-color-disabled</div>
    <p class='text-color-content'>text-color-content</p>
    <a href='#'>链接</a>
  </div>

</template>

<style scoped>


.p50 {
  background: rgb(var(--color-primary-50));
}
.p100 {
  background: rgb(var(--color-primary-100));
}
.p200 {
  background: rgb(var(--color-primary-200));
}
.p300 {
  background: rgb(var(--color-primary-300));
}
.p400 {
  background: rgb(var(--color-primary-400));
}
.p500 {
  background: rgb(var(--color-primary-500));
}
.p600 {
  background: rgb(var(--color-primary-600));
}
.p700 {
  background: rgb(var(--color-primary-700));
}
.p800 {
  background: rgb(var(--color-primary-800));
}
.p900 {
  background: rgb(var(--color-primary-900));
}
.p950 {
  background: rgb(var(--color-primary-950));
}



.g50 {
  background: rgb(var(--color-gray-50));
}

.g100 {
  background: rgb(var(--color-gray-100));
}
.g200 {
  background: rgb(var(--color-gray-200));
}
.g300 {
  background: rgb(var(--color-gray-300));
}
.g400 {
  background: rgb(var(--color-gray-400));
}
.g500 {
  background: rgb(var(--color-gray-500));
}
.g600 {
  background: rgb(var(--color-gray-600));
}
.g700 {
  background: rgb(var(--color-gray-700));
}
.g800 {
  background: rgb(var(--color-gray-800));
}
.g900 {
  background: rgb(var(--color-gray-900));
}
.g950 {
  background: rgb(var(--color-gray-950));
}


</style>
