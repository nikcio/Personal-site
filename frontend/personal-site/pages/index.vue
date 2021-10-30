<template>
  <div>
    <Logo />
    <Hero />
    <ContactCta />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Hero from '../components/partials/Hero.vue'
import Logo from '../components/elements/basics/Logo.vue'
import ContactCta from '../components/elements/ContactCta.vue'
export default Vue.extend({
  components: {
    Logo,
    ContactCta,
    Hero
  }
})
</script>

<style>
#__nuxt {
  font-family: 'Dubai';
}

@font-face {
  font-family: 'Dubai Regular';
  font-style: normal;
  font-weight: normal;
  src: url('~/assets/fonts/Dubai-Regular.woff') format('woff');
}


@font-face {
  font-family: 'Dubai Light';
  font-style: normal;
  font-weight: normal;
  src: url('~/assets/fonts/Dubai-Light.woff') format('woff');
}


@font-face {
  font-family: 'Dubai Medium';
  font-style: normal;
  font-weight: normal;
  src: url('~/assets/fonts/Dubai-Medium.woff') format('woff');
}


@font-face {
  font-family: 'Dubai Bold';
  font-style: normal;
  font-weight: normal;
  src: url('~/assets/fonts/Dubai-Bold.woff') format('woff');
}
</style>
