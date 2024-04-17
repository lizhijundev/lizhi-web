<script setup lang="ts">
import Navbar from "~/components/app/Navbar.vue";
import BaseFooter from "~/components/blog/base/BaseFooter.vue";
</script>
<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#1a4bb3',
      },
    }"
  >
    <div class='scroll-smooth'>
      <slot />
      <base-footer />
    </div>
  </a-config-provider>
</template>