<template>
  <section class="section">
    <h2 class="title is-3">Recent blog posts</h2>
    <div class="columns">
      <div class="column" v-for="(post, index) in blogPosts" :key="`blog-post-${index}`">
        <div class="card">
          <div class="card-content">
            <h3 class="title is-5" v-if="post.title">{{ post.title._text }}</h3>
            <p class="subtitle is-7" v-if="post.pubDate">{{ post.pubDate._text }}</p>
            <Button
              v-if="post.link"
              label="Read"
              tag="a"
              target="_blank"
              :href="post.link._text"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container flex justify-end">
      <Button
        label="Find more"
        tag="a"
        target="_blank"
        href="https://dev.to/nikcio/"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
onMounted(() => {
  getBlogPosts()
})

let blogPosts : {
  title: {
    _text: string
  },
  pubDate: {
    _text: string
  } | undefined,
  link: {
    _text: string
  } | undefined
}[] = []

async function getBlogPosts() {
  const convert = require("xml-js");
  await fetch('https://dev.to/feed/nikcio').then(res => {
    const data = JSON.parse(
      convert.xml2json(res, { compact: true, spaces: 2 })
    );
    if (data && data.rss && data.rss.channel && data.rss.channel.item) {
      blogPosts = data.rss.channel.item.slice(0, 2);
    }
  })
    .catch(err => {
      blogPosts = [
        {
          title: {
            _text: "No connection to dev.to"
          },
          pubDate: undefined,
          link: undefined,
        }
      ]
    })
}
</script>
