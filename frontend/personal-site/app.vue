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