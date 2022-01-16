<template>
  <nav>
    <LogosDefault />
    <div class="center-nav">
      <NuxtLink :class="{ 'active': activeElement == 0 }" to="/">Home</NuxtLink>
      <NuxtLink
        :class="{ 'active': activeElement == 1 }"
        to="/projects"
        title="Work in progress"
      >Projects</NuxtLink>
      <NuxtLink
        :class="{ 'active': activeElement == 2 }"
        to="/experience"
        title="Work in progress"
      >Experience</NuxtLink>
    </div>
    <ButtonsSlim
      :internal-link="false"
      link-text="Download CV"
      link="/files/cv.pdf"
      :show-icon="true"
      icon-source="/icons/download-icon.svg"
      icon-alt="download"
    />
  </nav>
</template>

<script lang="ts" setup>
/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  activeElement: {
    type: Number,
    default: 0
  }
})
/* eslint-enable no-undef */
</script>

<style scoped>
nav {
  @apply flex justify-between items-center py-8 px-0 pt-4 z-50;
}

nav .center-nav {
  @apply items-center font-semibold text-base z-50
  fixed bottom-0 w-full flex justify-around h-12 text-white gap-0
  sm:gap-5 sm:text-current sm:justify-center sm:static sm:w-auto
  md:gap-8
  lg:text-xl;
}

nav .center-nav a {
  @apply relative transition-all duration-200;
}

nav .center-nav a:hover {
  transform: scale(1.1);
}

nav .center-nav a::before {
  content: "";
  @apply w-0 absolute;
  border: 0 solid #e06865;
  background: #e06865;
  bottom: -5px;
  transition: width 0.3s;
}

nav .center-nav a.active::before {
  @apply w-full;
  border: 1.5px solid #e06865;
}

nav .center-nav a:hover::before {
  @apply w-full;
  border: 1.5px solid #e06865;
}

@media (max-width: 640px) {
  nav .center-nav {
    background: #e06865;
    margin: 0 -20px;
  }

  nav .center-nav a.active::before {
    border: 1.5px solid #fff;
    background: #fff;
  }
}
</style>