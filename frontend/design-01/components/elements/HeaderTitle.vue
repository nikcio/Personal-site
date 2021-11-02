<template>
  <div class="headerTitle">
    <h1>{{title}}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped>
div.headerTitle {
  @apply block pb-4
}

h1 {
  @apply text-6xl md:text-8xl font-dubai m-12 ml-16 relative
}

h1::after {
  content: '';
  @apply bg-light-orange w-36 md:w-52 h-36 md:h-52 absolute top-1/2
  transform -translate-y-1/2 -left-20 md:-left-24 -z-10 rounded-full
}
</style>
