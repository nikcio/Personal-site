<template>
  <div class="container">
    <NavbarMenu :activeElement="activeElement" />
    <main>
      <h1>Work in progress...</h1>
    </main>
    <ElementsFooter />
  </div>
</template>

<script lang="ts" setup>
const activeElement = 1;

// eslint-disable-next-line no-undef
useMeta(() => ({
  title: 'Projects'
}))
</script>