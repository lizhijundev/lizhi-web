<template>
  <!-- tabindex Dealing with CSS :focus selector on iOS Safari  -->
  <!-- https://serko.dev/post/dealing-with-css-focus-selector-on-ios-safari/ -->
  <NuxtLayout tabindex="0">
    <NuxtPage/>
  </NuxtLayout>
</template>

<script lang='ts' setup>

</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
