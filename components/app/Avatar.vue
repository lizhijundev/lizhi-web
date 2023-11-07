<script setup lang="ts">
// https://juejin.cn/post/7196747356796518460
</script>

<template>
  <img src="~/assets/images/lichi_icon.svg" alt="">
</template>

<style scoped>
img {
  --s: 120px; /* image size */
  --b: 6px; /* border thickness */
  --c: #eee; /* border color */
  --cb: #f4f3f2; /* background color */
  --f: 0.6; /* initial scale */

  width: var(--s);
  aspect-ratio: 1;
  padding-top: calc(var(--s)/5);
  cursor: pointer;
  border-radius: 0 0 999px 999px;
  --_g: 50%/calc(100%/var(--f)) 100% no-repeat content-box;
  --_o: calc((1/var(--f) - 1)*var(--s)/2 - var(--b));
  outline: var(--b) solid var(--c);
  outline-offset: var(--_o);
  background:
      radial-gradient(
          circle closest-side,
          var(--cb) calc(99% - var(--b)),var(--c) calc(100% - var(--b)) 99%,#0000
      ) var(--_g);
  -webkit-mask:
      linear-gradient(#000 0 0) no-repeat
      50% calc(1px - var(--_o)) / calc(100%/var(--f) - 2*var(--b) - 2px) 50%,
      radial-gradient(circle closest-side,#000 99%,#0000) var(--_g);
  transform: scale(var(--f));
  transition: .5s;
}
img:hover {
  --f: 1.2; /* hover scale */
}
</style>
