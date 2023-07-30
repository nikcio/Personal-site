<template>
  <GNavbar nav-classes="px-4 py-3" container-classes="flex items-center justify-between"
    menu-toggle-classes="block md:hidden" @menu-toggle="(menuExpanded) => navbarOpen = menuExpanded">
    <template #brand>
      <NuxtLink :to="{ path: '/' }" class="flex items-center">
        <span class="font-bold text-4xl mr-2 text-primary">Nikcio</span>
      </NuxtLink>
    </template>
    <template #navbarItems>
      <div class="md:flex flex-row items-center space-x-4" :class="{ 'hidden': navbarOpen }">
        <NavbarItem name="Home" :to="{ path: '/' }" :currentPage="true" />
        <NavbarItem name="Blog" :to="{ path: '/blog' }" />
        <NavbarItem name="Experience" :to="{ path: 'experience' }" />
      </div>
    </template>
  </GNavbar>
</template>

<script setup lang="ts">
let navbarOpen = ref(false);
</script>

<style scoped>
.navbar-start a.navbar-item {
  @apply relative transition-all duration-200 text-base font-semibold;
}

.navbar-start a.navbar-item:hover {
  transform: scale(1.1);
}

.navbar-start a.navbar-item::before {
  content: "";
  @apply w-0 absolute;
  border: 0 solid #e06865;
  background: #e06865;
  bottom: 5px;
  left: 0;
  transition: width 0.3s;
}

.navbar-start a.navbar-item.nuxt-link-active::before {
  @apply w-9/12;
  left: 50%;
  transform: translateX(-50%);
  border: 1.5px solid #e06865;
}

.navbar-start a.navbar-item:hover::before {
  @apply w-full;
  border: 1.5px solid #e06865;
}

@media (max-width: 1023px) {
  .navbar-start a.navbar-item.nuxt-link-active::before {
    @apply w-20;
    left: 0.75em;
    transform: none;
    border: 1.5px solid #e06865;
  }
}
</style>