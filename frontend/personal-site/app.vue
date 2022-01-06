<template>
  <div class="container">
    <nav>
      <p class="logo">
        Nikcio
      </p>
      <div class="center-nav">
        <a
          class="active"
          href="/"
        >Home</a>
        <a>Projects</a>
        <a>Experience</a>
      </div>
      <a
        class="button download-button"
        href="Files/cv.pdf"
      ><img
        src="Icons/download-icon.svg"
        alt="download"
      >Download CV</a>
    </nav>
    <main>
      <section>
        <div>
          <h1>
            Hello! <br>
            I'm Nikolaj
          </h1>
          <p class="hero-text">
            I’am a web developer based in Denmark who loves to craft attractive design experiences for the web.
          </p>
          <a
            class="button email-button"
            href="mailto:devnikcio@gmail.com"
          ><img
            src="Icons/mail-icon.svg"
            alt="email"
          >Email me</a>
        </div>
        <div>
          <img
            src="Images/hero-image.webp"
            alt="hero image"
            class="hero-image"
          >
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
import './assets/css/tailwind.css'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;600;700&display=swap');

body {
  max-width: 100%;
  overflow-x: hidden;
  background: #FEF6EF;
  font-family: 'Poppins', sans-serif;
}

@media (max-width: 425px) {
  body {
    padding-bottom: 70px;
  }
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>

<style lang="postcss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 30px 0;
}

nav .center-nav {
  display: flex;
  align-items: center;
  gap: 30px;
  font-weight: 600;
  font-size: 20px;
}

nav .center-nav a {
  position: relative;
}

nav .center-nav a.active::before {
  content: '';
  width: 100%;
  border: 1.5px solid #EF6F6C;
  background: #EF6F6C;
  position: absolute;
  bottom: -5px;
}

nav .center-nav a::before {
  content: '';
  width: 0;
  border: 0 solid #EF6F6C;
  background: #EF6F6C;
  position: absolute;
  bottom: -5px;
  transition: width 0.3s;
}

nav .center-nav a:hover::before {
  width: 100%;
  border: 1.5px solid #EF6F6C;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  font-size: 90px;
}

.logo {
  font-weight: bold;
  color: #EF6F6C;
  font-size: 30px;
}

.button {
  background: #EF6F6C;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #fff;
  position: relative;
  filter: drop-shadow(4px 4px 0 #370706);
  transition: filter 0.2s;
}

.button:hover {
  background: #EB4A47;
  filter: drop-shadow(8px 8px 0 #370706);
}

.download-button {
  padding: 12px 20px;
}

section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.hero-text {
  max-width: 400px;
}

.email-button {
  width: fit-content;
  margin-top: 50px;
  padding: 20px 40px;
}

.hero-image {
  max-width: 50vw;
}

@media (max-width: 1100px){
  h1 {
    font-size: 70px;
  }

  nav .center-nav {
    font-size: 16px;
  }

  .hero-text {
    font-size: 16px;
  }

  .hero-image {
    max-width: 40vw;
  }

  .email-button {
    padding: 15px 30px;
  }
}

@media (max-width: 768px){
  h1 {
    font-size: 50px;
  }

  .hero-image {
    max-width: 40vw;
  }

  .email-button {
    padding: 10px 25px;
  }

  .hero-text {
    max-width: 350px;
  }

  .download-button {
    padding: 8px 15px;
    font-size: 14px;
  }

  nav .center-nav {
    gap: 20px;
  }
}

@media (max-width: 425px){
  .hero-image {
    max-width: 100%;
    width: 100vw;
    max-height: 300px;
    object-fit: scale-down;
    margin-top: 30px;
  }

  section {
    flex-direction: column;
  }

  nav .center-nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #ef6f6c;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    margin: 0 -20px;
    color: #fff;
    gap: 0;
  }

  nav .center-nav a.active::before {
    border: 1.5px solid #fff;
    background: #fff;
  }
}
</style>