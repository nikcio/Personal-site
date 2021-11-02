<template>
  <div class="hero">
    <HeaderTitle title="Nikolaj" />
    <Socials />
    <TextBlock text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra enim velit orci dui risus suspendisse. Potenti eu blandit nullam massa enim scelerisque proin. Tempus iaculis sagittis purus amet. Tincidunt semper leo enim, malesuada feugiat fringilla. Integer sit cursus enim, praesent mauris non hac iaculis enim. Lorem tempus sit eu vitae ut. Tristique massa enim in sed. Vel laoreet quam justo, faucibus quam. Amet in egestas vitae nec. Placerat pulvinar faucibus justo nunc.
Aliquet at tincidunt urna faucibus. Amet placerat viverra quam vel quisque. Dis et morbi tempus nam quis viverra. Pretium arcu suspendisse risus id nullam nunc. Ultrices maecenas sit commodo diam. Id bibendum est eu eget pulvinar porttitor. Id."/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TextBlock from '../elements/TextBlock.vue'
import HeaderTitle from '../elements/HeaderTitle.vue'
import Socials from '../elements/Socials.vue'
export default Vue.extend({
  components: {
    TextBlock,
    HeaderTitle,
    Socials
  }
})
</script>

<style scoped>
div.hero {
  @apply relative pl-20 md:pl-0 pr-10 md:pr-0 lg:mr-20 flex flex-col w-full md:w-3/4 lg:w-1/2 float-right
}
</style>
