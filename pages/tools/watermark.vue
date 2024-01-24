<script setup lang="ts">
import { ref } from '@vue/reactivity'

definePageMeta({
  layout: 'blog'
})

const selectedImage = ref(null)
const canvasRef = ref(null)

const color = ref('#000000');
const content = ref('Watermark');
const angle = ref(30);
const interval = ref(100);

function handleButtonClick() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';

  input.onchange = (event) => {
    const file = event.target.files[0];
    selectedImage.value = file;
    drawImg(file)
  };

  input.click();
}

function drawImg(file) {
  if (file && file.type.startsWith('image/')) {

    const canvas = canvasRef.value;
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };

    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target.result;
    };

    reader.readAsDataURL(selectedImage.value);
  }
}
const handleMessage = () => {
  message.info("This is a normal message");
}
</script>

<template>
<div class='p-9'>
  <div class='text-2xl pb-6'>图片水印</div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-3">
    <div>
      <a-button type="primary" @click="handleMessage">Primary Button</a-button>
      <button class="btn btn-primary" @click="handleButtonClick">选择图片</button>

      <div class="form-control w-full max-w-xs py-4">
        <label class="label label-text">水印内容</label>
        <input type="text" placeholder="请输入水印内容" class="input input-bordered w-full max-w-xs" />
        <label class="label label-text">水印颜色</label>
        <input type="text" placeholder="请输入水印颜色" class="input input-bordered w-full max-w-xs" />
        <label class="label label-text">水印内容</label>
        <input type="text" placeholder="请输入水印内容" class="input input-bordered w-full max-w-xs" />
        <label class="label label-text">水印内容</label>
        <input type="text" placeholder="请输入水印内容" class="input input-bordered w-full max-w-xs" />
      </div>
    </div>


    <div class='w-full'>
      <canvas ref="canvasRef" class='w-full'></canvas>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
