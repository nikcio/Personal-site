<template>
  <div>
    <p>
      {{text}}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped>
div {
  @apply w-full font-dubai text-xl block
}
</style>
