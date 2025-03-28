<template>
  <div class="parallax-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ParallaxEffect',
  props: {
    speed: {
      type: Number,
      default: 0.1
    },
    direction: {
      type: String,
      default: 'up',
      validator: (value) => ['up', 'down', 'left', 'right'].includes(value)
    }
  }
  // Đã loại bỏ tất cả logic parallax
}
</script>

<style scoped>
.parallax-container {
  position: relative;
  z-index: 1;
}
</style> 