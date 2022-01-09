<template>
  <ButtonsBase
    :internal-link="internalLink"
    :link-text="linkText"
    :link="link"
    :show-icon="showIcon"
    :icon-source="iconSource"
    :icon-alt="iconAlt"
    class="medium-button"
  />
</template>

<script lang="ts" setup>
/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  internalLink: Boolean,
  link: {
    type: String,
    default: ""
  },
  linkText: {
    type: String,
    default: ""
  },
  showIcon: Boolean,
  iconSource: {
    type: String,
    default: ""
  },
  iconAlt: {
    type: String,
    default: ""
  },
});
/* eslint-enable no-undef */
</script>

<style scoped>
.medium-button {
  @apply py-2 px-6 
  md:px-8 md:py-3 
  lg:px-10 lg:py-5;
}
</style>