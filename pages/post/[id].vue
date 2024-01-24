<script setup lang="ts">
const route = useRoute()

useHead({
  title: route.params.id + ' - My Site',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
})

definePageMeta({
  middleware: ['article-access']
})



</script>

<template>
<div>
  这是文章 {{ route.params.id }} 的页面
</div>
</template>

<style scoped>

</style>
