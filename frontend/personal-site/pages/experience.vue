<template>
  <div class="container">
    <NavbarMenu :activeElement="activeElement" />
    <main>
      <Image imageSource="/files/cv_website.svg" imageAlt="CV" />
    </main>
    <ElementsFooter />
  </div>
</template>

<script lang="ts" setup>
const activeElement = 2;

// eslint-disable-next-line no-undef
useMeta(() => ({
  title: 'Experience'
}))
</script>

<style scoped>
img {
  width: 100%;
}
</style>