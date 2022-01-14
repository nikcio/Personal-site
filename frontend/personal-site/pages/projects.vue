<template>
  <div class="container">
    <NavbarMenu :activeElement="activeElement" />
    <main>
      <section>
        <Image imageSource="/images/projects/personal-site.webp" imageAlt="Personal site" />
        <div class="text-container">
          <h3>Personal website frontend</h3>
          <p>My website was made using Nuxt, which is based on Vue. This project is hosted in Docker on a Linux server. To create this website I used Figma as a design platform to quickly iterate over design ideas, and see them in action. With this help, it was easy to code the frontend code needed to have the website following the design.</p>
        </div>
      </section>
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