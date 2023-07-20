<template>
  <section class="section">
    <div class="columns">
      <div class="column self-center">
        <h1 class="title is-1">
          Hello!
          <br />I'm Nikolaj
        </h1>
        <p class="subtitle is-4">
          I’m a web developer based in Denmark, who loves to craft attractive
          design experiences for the web.
        </p>
        <div class="buttons">
          <Button
            type="is-primary"
            label="Email me"
            tag="a"
            href="mailto:devnikcio@gmail.com"
            icon-left="solid fa-paper-plane"
            icon-pack="fa"
          />
          <Button
            type="is-secondary"
            label="Follow my GitHub"
            tag="a"
            href="https://github.com/nikcio/"
            target="_blank"
            icon-left="brands fa-github"
            icon-pack="fa"
          />
        </div>
      </div>
      <div class="column">
        <!-- <b-image
          :src="require('@/assets/images/hero-image.webp')"
          ratio="13by16"
          alt="hero image"
          custom-class="hero-image"
        /> -->
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
