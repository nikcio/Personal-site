<template>
  <ButtonsBase
    :internalLink="internalLink"
    :linkText="linkText"
    :link="link"
    :showIcon="showIcon"
    :iconSource="iconSource"
    :iconAlt="iconAlt"
    class="slim-button"
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
.slim-button {
  @apply py-2 px-4 text-sm
  md:px-5 md:py-3 md:text-lg;
}
</style>