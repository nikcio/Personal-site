<template>
  <div class="contactcta">
    <a href="/contact">Contact</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>

<style scoped>
div.contactcta {
  @apply absolute bottom-12 left-4 z-50
}

a {
  @apply text-2xl md:text-4xl font-dubai-light m-4 transform transition duration-100
}

a::after {
  content: '';
  @apply bg-light-red w-20 h-20 absolute top-1/2 left-1/2
  transform -translate-y-10 -translate-x-1/2 -z-10 rounded-full
  transition duration-500 scale-125 md:scale-100
}

a:hover::after {
  @apply scale-150
}
</style>
