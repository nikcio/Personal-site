<template>
  <section>
    <Image :imageSource="imageSource" :imageAlt="imageAlt" />
    <div class="text-container">
      <h3>{{ title }}</h3>
      <p>{{ body }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  imageSource: {
    type: String,
    default: ''
  },
  imageAlt: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  body: {
    type: String,
    default: ''
  }
})
/* eslint-enable no-undef */
</script>

<style scoped>
section {
  display: flex;
  align-content: center;
  justify-content: flex-start;
  align-items: stretch;
  gap: 10%;
  width: 90%;
  margin: 50px auto;
}

section.reverse {
  flex-direction: row-reverse;
}

img {
  max-width: 40%;
  border: 2px solid #2b2b2b;
  border-radius: 20px;
}

.text-container {
  display: flex;
  align-content: stretch;
  flex-direction: column;
  justify-content: space-evenly;
}

h3 {
  font-size: 36px;
  font-weight: 600;
}
</style>