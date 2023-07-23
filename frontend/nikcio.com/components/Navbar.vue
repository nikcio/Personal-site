<template>
    <GNavbar>
        <template #brand>
            <NuxtLink :to="{ path: '/' }" class="flex items-center">
                <span class="font-bold text-3xl mr-2">Nikcio</span>
            </NuxtLink>
        </template>
        <template #navbarItems>
            <ul>
                <NavbarItem name="Home" :to="{ path: '/' }" :currentPage="true" />
                <NavbarItem name="Blog" :to="{ path: '/blog' }" />
                <NavbarItem name="Experience" :to="{ path: 'experience' }" />
            </ul>
        </template>
    </GNavbar>
</template>


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