<script setup lang="ts">
const currentDate = new Date()
const currentYear = ref(0)
currentYear.value = currentDate.getFullYear()
</script>

<template>
  <div class="footer footer-center p-base md:p-10 text-color-placeholder text-sm font-mono font-light">
    <aside>
      <p class='flex flex-row justify-center items-center'>
        <span>© 2015 - {{ currentYear }} All Rights Reserved.</span>
        <span class='flex-row-xy-center'><Icon name='icon-park-twotone:baokemeng' class='mx-1'></Icon> 荔枝君</span>
      </p>
      <a href='http://beian.miit.gov.cn/' target='_blank'>粤ICP备18126829号-1</a>
    </aside>
  </div>
</template>

<style scoped>

</style>
