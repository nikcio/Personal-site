<template>
  <div>
    <a href="google.com">Developer</a>
  </div>
</template>

<style scoped>
a {
  @apply text-4xl font-dubai-light m-4 absolute bottom-12 left-4 transform transition duration-100
}

a::after {
  content: '';
  @apply bg-light-red w-20 h-20 absolute top-1/2 left-1/2
  transform -translate-y-10 -translate-x-1/2 -z-10 rounded-full
  transition duration-500
}

a:hover::after {
  @apply scale-150
}
</style>
