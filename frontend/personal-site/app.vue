<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import './assets/css/tailwind.css'

var fadeInElements = []
var fadeOutElements = []

// eslint-disable-next-line no-undef
onMounted(() => {
  fadeInElements = Array.from(document.getElementsByClassName('fade-in'))
  fadeOutElements = Array.from(document.getElementsByClassName('fade-out'))
  document.addEventListener('scroll', handleScroll)
})

// eslint-disable-next-line no-undef
onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll)
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleScroll = (_evt: unknown) => {
  handleFadeOutElements()

  handleFadeInElements()
}

const handleFadeOutElements = () => {
  for (var i = 0; i < fadeOutElements.length; i++) {
    var elem = fadeOutElements[i]
    if (!isElemVisible(elem)) {
      elem.style.opacity = '0.5'
      elem.style.transform = 'scale(0.8)'
      fadeOutElements.splice(i, 1)
      fadeInElements.push(elem)
    }
  }
}

const handleFadeInElements = () => {
  for (var i = 0; i < fadeInElements.length; i++) {
    var elem = fadeInElements[i]
    if (isElemVisible(elem)) {
      elem.style.opacity = '1'
      elem.style.transform = 'scale(1)'
      fadeInElements.splice(i, 1)
      fadeOutElements.push(elem)
    }
  }
}

const isElemVisible = (el) => {
  var rect = el.getBoundingClientRect()
  var elemBottom = rect.bottom
  return !(elemBottom < (rect.height / 3 * 2))
}

</script>

<script lang="ts">
export default {
  data() {
    return {
      title: 'Nikcio'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A personal website for Nikolaj Brask-Nielsen showing projects, experience and social information.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'nikcio, Nikolaj Brask-Nielsen, Personal website, Portfolio, GitHub, LinkedIn, Nikcio, Umbraco'
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'index, follow'
        },
        {
          hid: 'http-equiv',
          "http-equiv": 'Content-Type',
          content: 'text/html; charset=utf-8'
        },
        {
          hid: 'language',
          name: 'language',
          content: 'English'
        },
        {
          hid: 'revisit-after',
          name: 'revisit-after',
          content: '7 days'
        },
        {
          hid: 'author',
          name: 'author',
          content: 'Nikolaj "Nikcio" Brask-Nielsen'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://nikcio.com/'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Nikcio'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'A personal website for Nikolaj Brask-Nielsen showing projects, experience and social information.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://nikcio.com/images/SoMe.jpg'
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: 'https://nikcio.com/'
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'Nikcio'
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://nikcio.com/images/SoMe.jpg'
        }
      ]
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;600;700&display=swap");

body {
  max-width: 100%;
  overflow-x: hidden;
  background: #fef6ef;
  font-family: "Poppins", sans-serif;
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

.fade-out {
  opacity: 1;
  transition: 0.3s all ease-out;
  transform: scale(1);
}
</style>