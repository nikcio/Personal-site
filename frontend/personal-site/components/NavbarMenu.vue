<template>
  <nav>
    <LogosDefault />
    <div class="center-nav">
      <NuxtLink class="active" to="/">Home</NuxtLink>
      <NuxtLink to="/projects" title="Work in progress">Projects</NuxtLink>
      <NuxtLink to="/experience" title="Work in progress">Experience</NuxtLink>
    </div>
    <ButtonsSlim
      :internalLink="false"
      linkText="Download CV"
      link="/files/cv.pdf"
      :showIcon="true"
      iconSource="/icons/download-icon.svg"
      iconAlt="download"
    />
  </nav>
</template>

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
  @apply relative;
}

nav .center-nav a::before {
  content: "";
  @apply w-0 absolute;
  border: 0 solid #ef6f6c;
  background: #ef6f6c;
  bottom: -5px;
  transition: width 0.3s;
}

nav .center-nav a.active::before {
  @apply w-full;
  border: 1.5px solid #ef6f6c;
}

nav .center-nav a:hover::before {
  @apply w-full;
  border: 1.5px solid #ef6f6c;
}

@media (max-width: 640px) {
  nav .center-nav {
    background: #ef6f6c;
    margin: 0 -20px;
  }

  nav .center-nav a.active::before {
    border: 1.5px solid #fff;
    background: #fff;
  }
}
</style>