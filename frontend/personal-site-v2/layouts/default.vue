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
        <b-navbar-item tag="router-link" :to="{ path: '/experience' }">Experience</b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <b-button type="is-primary" tag="router-link" :to="{ path: '/hire-me' }">
              <strong>Hire me!</strong>
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
      ],
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
          content: 'https://nikcio.com/SoMe.jpg'
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
          content: 'https://nikcio.com/SoMe.jpg'
        },
        {
          hid: 'msapplication-TileColor',
          name: 'msapplication-TileColor',
          content: '#ef6fec'
        },
        {
          hid: 'msapplication-config',
          name: 'msapplication-config',
          content: '/favicon/browserconfig.xml'
        },
        {
          hid: 'theme-color',
          name: 'theme-color',
          content: '#ffffff'
        }
      ],
      link: [
        {
          hid: 'apple-touch-icon',
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png'
        },
        {
          hid: 'icon-32',
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon/favicon-32x32.png'
        },
        {
          hid: 'icon-16',
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon/favicon-16x16.png'
        },
        {
          hid: 'manifest',
          rel: 'manifest',
          href: '/favicon/site.webmanifest'
        },
        {
          hid: 'mask-icon',
          rel: 'mask-icon',
          href: '/favicon/safari-pinned-tab.svg',
          color: '#ef6f6c'
        },
        {
          hid: 'shortcut icon',
          rel: 'shortcut icon',
          href: '/favicon.ico'
        }
      ]
    }
  },
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

@media (max-width: 1023px) {
  .navbar-start a.navbar-item.nuxt-link-active::before {
    @apply w-20;
    left: 0.75em;
    transform: none;
    border: 1.5px solid #e06865;
  }
}
</style>
