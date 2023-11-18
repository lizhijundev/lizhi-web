<script setup lang="ts">
import Navbar from "~/components/app/Navbar.vue";
import BaseFooter from "~/components/blog/base/BaseFooter.vue";
</script>
<template>
  <div class='scroll-smooth'>
    <slot />
    <base-footer />
  </div>
</template>