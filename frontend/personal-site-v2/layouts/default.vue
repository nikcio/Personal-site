<template>
  <div>
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }" exact>
          <LogosDefault />
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item tag="router-link" :to="{ path: '/' }" exact>Home</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/blog' }">Blog</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/about' }">About</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/experience' }">Experience</b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <b-button type="is-primary" tag="router-link" :to="'/contact'">
              <strong>Contact</strong>
            </b-button>
            <b-button
              tag="a"
              type="is-light"
              href="/files/cv_public.pdf"
              target="_blank"
              icon-left="solid fa-download"
              icon-pack="fa"
            >Download CV</b-button>
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
import fontawesomeScript from '@fortawesome/fontawesome-free/js/all.js'

export default {
  name: "DefaultLayout",
  data() {
    return {

    };
  },
  components: { LogosDefault },
  head() {
    return {
      scripts: [
        {
          src: fontawesomeScript,
          async: true,
        },
      ]
    }
  }
}
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
</style>
