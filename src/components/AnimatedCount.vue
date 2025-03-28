<template>
  <span>{{ displayValue }}</span>
</template>

<script>
export default {
  name: 'AnimatedCount',
  props: {
    value: {
      type: Number,
      required: true
    },
    duration: {
      type: Number,
      default: 2000
    },
    startCount: {
      type: Number,
      default: 0
    },
    isInView: {
      type: Boolean,
      default: false
    },
    decimals: {
      type: Number,
      default: 0
    },
    suffix: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      displayValue: '0',
      rafId: null,
      startTime: null,
      hasStarted: false
    }
  },
  watch: {
    isInView(newValue) {
      if (newValue && !this.hasStarted) {
        this.startAnimation()
      }
    },
    value(newValue) {
      if (this.hasStarted) {
        // Cancel previous animation if running
        if (this.rafId) {
          cancelAnimationFrame(this.rafId)
        }
        this.startAnimation()
      }
    }
  },
  methods: {
    startAnimation() {
      this.hasStarted = true
      this.startTime = performance.now()
      this.updateCount()
    },
    updateCount() {
      const now = performance.now()
      const elapsedTime = now - this.startTime
      const progress = Math.min(elapsedTime / this.duration, 1)
      
      // Easing function (ease out cubic)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      
      // Calculate current value
      const currentValue = this.startCount + (this.value - this.startCount) * easedProgress
      
      // Format value with decimals
      this.displayValue = this.formatNumber(currentValue) + this.suffix
      
      if (progress < 1) {
        this.rafId = requestAnimationFrame(this.updateCount)
      } else {
        this.displayValue = this.formatNumber(this.value) + this.suffix
        this.rafId = null
      }
    },
    formatNumber(value) {
      return value.toFixed(this.decimals)
    }
  },
  beforeUnmount() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId)
    }
  }
}
</script>

<style scoped>
/* You can add custom styling for the counter here */
</style> 