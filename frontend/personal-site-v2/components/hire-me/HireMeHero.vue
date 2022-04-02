<template>
  <section class="section">
    <div class="columns">
      <div class="column self-center">
        <h1 class="title is-1">Want to hire me?</h1>
        <p
          class="subtitle is-4"
        >I would love to hear from you. You can contact me on my socials or by email.</p>
        <div class="buttons">
          <b-button
            type="is-info"
            label="Find me on LinkedIn"
            tag="a"
            href="https://www.linkedin.com/in/nikcio/"
            icon-left="brands fa-linkedin"
            icon-pack="fa"
          />
          <b-button
            type="is-secondary"
            label="Email me"
            tag="a"
            href="mailto:devnikcio@gmail.com"
            icon-left="solid fa-paper-plane"
            icon-pack="fa"
          />
        </div>
      </div>
      <div class="column">
        <b-image
          :src="require('@/assets/images/github-splash.svg')"
          ratio="13by16"
          alt="GitHub splash"
          custom-class="hero-image"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-image {
  max-height: 80vh;
  border-radius: 10px;
}
</style>

<style>
.b-image-wrapper > img.hero-image {
  @apply object-contain;
}
</style>
