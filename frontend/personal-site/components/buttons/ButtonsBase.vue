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
const props = defineProps({
  internalLink: Boolean,
  link: String,
  linkText: String,
  showIcon: Boolean,
  iconSource: String,
  iconAlt: String,
});
</script>

<style>
.button {
  @apply flex items-center gap-1 text-white relative;
  background: #ef6f6c;
  filter: drop-shadow(4px 4px 0 #370706);
  transition: filter 0.2s;
  width: fit-content;
}

.button:hover {
  background: #eb4a47;
  filter: drop-shadow(8px 8px 0 #370706);
}
</style>