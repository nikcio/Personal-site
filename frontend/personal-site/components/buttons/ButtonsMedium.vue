<template>
  <ButtonsBase
    :internalLink="internalLink"
    :linkText="linkText"
    :link="link"
    :showIcon="showIcon"
    :iconSource="iconSource"
    :iconAlt="iconAlt"
    class="medium-button"
  />
</template>

<script lang="ts" setup>
const props = defineProps({
  internalLink: Boolean,
  link: String,
  linkText: String,
  showIcon: Boolean,
  iconSource: String,
  iconAlt: String,
});
</script>

<style scoped>
.medium-button {
  @apply py-2 px-6 
  md:px-8 md:py-3 
  lg:px-10 lg:py-5;
}
</style>