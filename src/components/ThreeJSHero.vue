<template>
  <div ref="threeContainer" class="three-container"></div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'

export default {
  name: 'ThreeJSHero',
  setup() {
    const threeContainer = ref(null)
    let scene, camera, renderer, particles, animationId

    // Initialize Three.js scene
    const initThree = () => {
      if (!threeContainer.value) return

      // Create scene
      scene = new THREE.Scene()
      
      // Create camera
      const width = threeContainer.value.clientWidth || window.innerWidth
      const height = threeContainer.value.clientHeight || 500
      
      camera = new THREE.PerspectiveCamera(
        75,
        width / height,
        0.1,
        1000
      )
      camera.position.z = 30
      
      // Create renderer
      renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true 
      })
      renderer.setSize(width, height)
      renderer.setClearColor(0x000000, 0) // Transparent background
      
      // Check if the container exists before appending
      if (threeContainer.value) {
        threeContainer.value.appendChild(renderer.domElement)
        
        // Create particle system
        createParticles()
        
        // Handle window resize
        window.addEventListener('resize', onWindowResize)
        
        // Start animation loop
        animate()
      }
    }
    
    // Create particles
    const createParticles = () => {
      const particleCount = 1000
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(particleCount * 3)
      const colors = new Float32Array(particleCount * 3)
      
      const colorPalette = [
        new THREE.Color(0x4a6bff), // Blue
        new THREE.Color(0x56ccf2), // Light Blue
        new THREE.Color(0x6a3aef)  // Purple
      ]
      
      for (let i = 0; i < particleCount; i++) {
        // Position
        const x = (Math.random() - 0.5) * 100
        const y = (Math.random() - 0.5) * 50
        const z = (Math.random() - 0.5) * 50
        positions[i * 3] = x
        positions[i * 3 + 1] = y
        positions[i * 3 + 2] = z
        
        // Color
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
        colors[i * 3] = color.r
        colors[i * 3 + 1] = color.g
        colors[i * 3 + 2] = color.b
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
      
      const material = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.7
      })
      
      particles = new THREE.Points(geometry, material)
      scene.add(particles)
    }
    
    // Animation loop
    const animate = () => {
      if (!renderer || !scene || !camera) return
      
      animationId = requestAnimationFrame(animate)
      
      if (particles) {
        particles.rotation.x += 0.0005
        particles.rotation.y += 0.0005
        
        // Make particles move up and down slightly
        const positions = particles.geometry.attributes.position.array
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(Date.now() * 0.001 + positions[i]) * 0.01
        }
        particles.geometry.attributes.position.needsUpdate = true
      }
      
      renderer.render(scene, camera)
    }
    
    // Handle window resize
    const onWindowResize = () => {
      if (!threeContainer.value || !camera || !renderer) return
      
      camera.aspect = threeContainer.value.clientWidth / threeContainer.value.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(threeContainer.value.clientWidth, threeContainer.value.clientHeight)
    }
    
    // Cleanup resources
    const cleanup = () => {
      window.removeEventListener('resize', onWindowResize)
      
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      
      // Clean up Three.js resources
      if (renderer && threeContainer.value) {
        try {
          if (renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement)
          }
          renderer.dispose()
        } catch (e) {
          console.warn('Error cleaning up renderer:', e)
        }
      }
      
      if (particles) {
        try {
          scene.remove(particles)
          particles.geometry.dispose()
          particles.material.dispose()
        } catch (e) {
          console.warn('Error cleaning up particles:', e)
        }
      }
      
      scene = null
      camera = null
      renderer = null
      particles = null
    }
    
    // Lifecycle hooks
    onMounted(() => {
      // Delay initialization to ensure the DOM is fully rendered
      setTimeout(() => {
        initThree()
      }, 50)
    })
    
    onBeforeUnmount(() => {
      cleanup()
    })
    
    return {
      threeContainer
    }
  }
}
</script>

<style scoped>
.three-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
</style> 