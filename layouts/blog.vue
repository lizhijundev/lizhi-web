<script setup lang="ts">
  import Navbar from "~/components/app/Navbar.vue"
  import Sidebar from "~/components/blog/sidebar/Sidebar.vue"
  import BaseContainer from "~/components/app/BaseContainer.vue"
  import BaseFooter from "~/components/blog/base/BaseFooter.vue"
</script>
<template>
  <navbar class='navbar' />
  <div class="container mx-auto main-container flex flex-col md:flex-row">
    <div class="w-full md:w-1/4 min-w-[300px]">
      <sidebar />
    </div>
    <base-container class="w-full md:w-3/4">
      <slot></slot>
    </base-container>
  </div>
  <base-footer />
</template>
<style lang='scss' scoped>
.t{

}
</style>
