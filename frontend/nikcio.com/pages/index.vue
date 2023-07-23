<template>
  <div>
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
              href="mailto:devnikcio@gmail.com">
              <template #after-label>
                <GIcon icon="fas-paper-plane" />
              </template>
            </Button>
            <Button
              type="is-base"
              label="Follow my GitHub"
              tag="a"
              href="https://github.com/nikcio/"
              target="_blank">
              <template #after-label>
                <GIcon icon="fab-github" />
              </template>
            </Button>
          </div>
        </div>
        <div class="column">
          <nuxt-img src="/images/hero-image.webp" alt="hero image"/>
        </div>
      </div>
    </section>
    <BlogPosts />
    <NugetPackages />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: "Nikcio - Personal website"
    }
  }
}
</script>


<style scoped>
.hero-image {
  max-height: 80vh;
  border-radius: 10px;
}
</style>