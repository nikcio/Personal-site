<template>
  <section>
    <div>
      <h1>
        Hello!
        <br />I'm Nikolaj
      </h1>
      <p class="hero-text">
        I’am a web developer based in Denmark who loves to craft attractive
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
    <div>
      <Image image-source="/images/hero-image.webp" alt="hero image" class="hero-image" />
    </div>
  </section>
</template>

<style scoped>
h1 {
  @apply font-bold text-5xl
  md:text-7xl
  lg:text-8xl;
  font-family: "Playfair Display", serif;
}

section {
  @apply flex justify-between items-end;
}

.hero-text {
  @apply max-w-sm text-base mt-6 mb-4
  md:text-lg md:mt-8
  lg:max-w-md;
}

.hero-image {
  max-width: 50vw;
  max-height: 80vh;
}

@media (max-width: 1100px) {
  .hero-image {
    max-width: 40vw;
  }
}

@media (max-width: 425px) {
  .hero-image {
    @apply max-w-full w-screen max-h-80 object-scale-down mt-8;
  }

  section {
    @apply flex-col;
  }
}
</style>