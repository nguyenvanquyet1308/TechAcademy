<template>
  <div ref="parallaxContainer" class="parallax-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ParallaxEffect',
  props: {
    speed: {
      type: Number,
      default: 0.5
    },
    direction: {
      type: String,
      default: 'up',
      validator: (value) => ['up', 'down', 'left', 'right'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scrollY: 0,
      windowHeight: 0,
      elementTop: 0,
      elementHeight: 0,
      isInView: false,
      ticking: false,
      isDestroyed: false,
      scrollHandler: null
    }
  },
  mounted() {
    this.windowHeight = window.innerHeight
    
    // Delay initialization to ensure component is properly mounted
    this.$nextTick(() => {
      this.updateElementPosition()
      
      // Use a bound function reference for easier removal
      this.scrollHandler = this.handleScroll.bind(this)
      this.resizeHandler = this.handleResize.bind(this)
      
      window.addEventListener('scroll', this.scrollHandler, { passive: true })
      window.addEventListener('resize', this.resizeHandler)
      
      // Initial check
      this.handleScroll()
    })
  },
  beforeUnmount() {
    this.isDestroyed = true
    
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler)
    }
    
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler)
    }
  },
  methods: {
    updateElementPosition() {
      if (!this.$refs.parallaxContainer || this.isDestroyed) return
      
      try {
        const rect = this.$refs.parallaxContainer.getBoundingClientRect()
        this.elementTop = rect.top + window.scrollY
        this.elementHeight = rect.height
      } catch (e) {
        console.warn('Error measuring element:', e)
      }
    },
    handleResize() {
      if (this.isDestroyed) return
      
      this.windowHeight = window.innerHeight
      this.updateElementPosition()
      this.handleScroll()
    },
    handleScroll() {
      if (this.isDestroyed || this.ticking || this.disabled) return
      
      this.ticking = true
      
      requestAnimationFrame(() => {
        if (this.isDestroyed) return
        
        this.scrollY = window.scrollY
        this.checkVisibility()
        this.applyParallax()
        this.ticking = false
      })
    },
    checkVisibility() {
      if (!this.$refs.parallaxContainer || this.isDestroyed) return
      
      const viewportBottom = this.scrollY + this.windowHeight
      const elementBottom = this.elementTop + this.elementHeight
      
      // Check if element is in viewport
      this.isInView = !(
        viewportBottom < this.elementTop || 
        this.scrollY > elementBottom
      )
    },
    applyParallax() {
      if (this.disabled || !this.isInView || !this.$refs.parallaxContainer || this.isDestroyed) return
      
      try {
        const element = this.$refs.parallaxContainer
        const rect = element.getBoundingClientRect()
        const middleOfViewport = this.windowHeight / 2
        const middleOfElement = rect.top + rect.height / 2
        const distanceFromCenter = middleOfElement - middleOfViewport
        
        let translateValue = distanceFromCenter * this.speed
        
        // Adjust for direction
        let transform = ''
        switch (this.direction) {
          case 'up':
            transform = `translateY(${-translateValue}px)`
            break
          case 'down':
            transform = `translateY(${translateValue}px)`
            break
          case 'left':
            transform = `translateX(${-translateValue}px)`
            break
          case 'right':
            transform = `translateX(${translateValue}px)`
            break
        }
        
        element.style.transform = transform
      } catch (e) {
        console.warn('Error applying parallax effect:', e)
      }
    }
  }
}
</script>

<style scoped>
.parallax-container {
  position: relative;
  will-change: transform;
}
</style> 