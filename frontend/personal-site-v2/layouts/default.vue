<template>
  <div>
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <LogosDefault />
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item tag="router-link" :to="{ path: '/' }" :active="true">Home</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/blog' }">Blog</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/about' }">About</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/experience' }">Experience</b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <NuxtLink class="button is-primary" :to="'/contact'">
              <strong>Contact</strong>
            </NuxtLink>
            <a class="button is-light" href="/files/cv_public.pdf" target="_blank">Download CV</a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <section class="main-content">
      <div class="container">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import LogosDefault from "~/components/logos/LogosDefault.vue"
export default {
  name: "DefaultLayout",
  data() {
    return {

    };
  },
  components: { LogosDefault }
}
</script>

<style scoped>
.navbar-start a.navbar-item {
  @apply relative transition-all duration-200 text-base;
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
</style>
