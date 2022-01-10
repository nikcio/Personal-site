<template>
  <a v-if="!internalLink" class="button" :href="link">
    <img v-if="showIcon" :src="iconSource" :alt="iconAlt" />
    {{ linkText }}
  </a>
  <NuxtLink v-else class="button" :to="link">
    <img :src="iconSource" :alt="iconAlt" />
    {{ linkText }}
  </NuxtLink>
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

<style>
.button {
  @apply flex items-center gap-1 text-white relative;
  background: #e06865;
  filter: drop-shadow(4px 4px 0 #370706);
  transition: filter 0.2s;
  width: fit-content;
}

.button:hover {
  background: #eb4a47;
  filter: drop-shadow(8px 8px 0 #370706);
}
</style>