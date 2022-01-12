<template>
  <div class="container">
    <NavbarMenu :activeElement="activeElement" />
    <main>
      <ElementsHero class="fade-out" />
      <ElementsBigTitle
        text="Let’s<br />Connect"
        image-source="/images/backdrops/dots-red.svg"
        class="fade-in fade-out"
      />
      <ElementsSocials class="fade-in fade-out" />
      <ElementsBigTitle
        text="Get to<br>know me"
        image-source="/images/backdrops/dots-blue.svg"
        class="fade-in fade-out"
      />
    </main>
    <ElementsFooter />
  </div>
</template>

<script lang="ts" setup>
const activeElement = 0;

// eslint-disable-next-line no-undef
useMeta(() => ({
  title: 'Homepage'
}))
</script>