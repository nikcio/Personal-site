<template>
  <div class="container">
    <NavbarMenu :activeElement="activeElement" />
    <main>
      <ElementsProject
        class="fade-out"
        imageSource="/images/projects/personal-site.webp"
        imageAlt="Personal site"
        title="Personal website frontend"
        body="My website was made using Nuxt, which is based on Vue. This project is hosted in Docker on a Linux server. To create this website I used Figma as a design platform to quickly iterate over design ideas, and see them in action. With this help, it was easy to code the frontend code needed to have the website following the design."
      />
      <ElementsProject
        class="reverse fade-out"
        imageSource="/images/projects/personal-server.webp"
        imageAlt="Personal server"
        title="Personal server"
        body="I've created my personal Linux server to host a bunch of services and make the foundation for future projects. The server is primarily a docker host with multiple containers running different services, including a web server created with Traefik, a Portainer instance to manage the docker containers, Uptime Kuma for monitoring, and Watchtower for automatic updates of docker images."
      />
    </main>
    <ElementsFooter />
  </div>
</template>

<script lang="ts" setup>
const activeElement = 1;

// eslint-disable-next-line no-undef
useMeta(() => ({
  title: 'Projects'
}))
</script>

