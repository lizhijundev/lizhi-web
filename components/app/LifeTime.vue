<script setup lang="ts">
import { ref } from '@vue/reactivity'

const lifeTime = ref('')
const props = defineProps({
  birthday: {
    type: String,
    default: '19940516'
  }
})

const intervalID  = ref()

onMounted(()=>{
  intervalID.value = setInterval(function(){
    const currentDate = new Date();
    const birthYear = parseInt(props.birthday.substr(0, 4));
    const birthMonth = parseInt(props.birthday.substr(4, 2)) - 1;
    const birthDay = parseInt(props.birthday.substr(6, 2));
    const birthDateTime = new Date(birthYear, birthMonth, birthDay);
    const diff = currentDate - birthDateTime;
    const diffYear = diff / (1000 * 60 * 60 * 24 * 365.25);
    lifeTime.value = diffYear.toFixed(9)
  },10)
})

onUnmounted(()=>{
  clearInterval(intervalID.value)
})
</script>

<template>
  <span>{{lifeTime}} years old</span>
</template>

<style lang='scss' scoped>
</style>
