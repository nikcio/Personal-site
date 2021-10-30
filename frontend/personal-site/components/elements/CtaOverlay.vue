<template>
  <div class="ctaoverlay" :class="{'scale-0': !isActive}">
    <span>{{text}}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String,
      default: 'This is an overlay'
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped>
div.ctaoverlay {
  @apply relative right-1/2 transform translate-x-1/2 w-full
  text-white rounded p-4 text-center bg-gray-800
  transition duration-300
}
</style>
