<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">
          Hello!
          <br />I'm Nikolaj
        </h1>
        <p class="subtitle is-3">
          I’m a web developer based in Denmark who loves to craft attractive
          design experiences for the web.
        </p>
        <ButtonsMedium
          :internal-link="false"
          link-text="Email me"
          link="mailto:devnikcio@gmail.com"
          :show-icon="true"
          icon-source="/icons/mail-icon.svg"
          icon-alt="mail"
        />
      </div>
      <div class="column">
        <b-image
          :src="require('@/assets/images/hero-image.webp')"
          ratio="13by16"
          alt="hero image"
          custom-class="hero-image"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'IndexPage',
  components: {
    Card,
  },
}
</script>

<style>
.hero-image {
  max-height: 80vh;
}
</style>
