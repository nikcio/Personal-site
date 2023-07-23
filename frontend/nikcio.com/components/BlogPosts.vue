<template>
  <section class="section">
    <h2 class="title is-3">Recent blog posts</h2>
    <div class="columns">
      <div class="column" v-for="(post, index) in blogPosts" :key="`blog-post-${index}`">
        <div class="card">
          <div class="card-content">
            <h3 class="title is-5" v-if="post.title">{{ post.title }}</h3>
            <p class="subtitle is-7" v-if="post.pubDate">{{ formatDate(post.pubDate) }}</p>
            <Button
              v-if="post.link"
              label="Read"
              tag="a"
              target="_blank"
              :href="post.link"
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
import { XMLParser } from "fast-xml-parser";
import moment from 'moment';

onMounted(() => {
  getBlogPosts()
})

let blogPosts : {
  title: string,
  pubDate: string | undefined,
  link: string | undefined,
  loading: boolean | undefined, 
}[] = reactive([
  {
    title: "Loading...",
    pubDate: undefined,
    link: undefined,
    loading: true,
  },
  {
    title: "Loading...",
    pubDate: undefined,
    link: undefined,
    loading: true,
  },
]);

async function getBlogPosts() {
  await fetch('https://dev.to/feed/nikcio').then(res => {
    return res.text();
  })
  .then(xml => {
    const data = convertXmlToJson(xml);
    if (data && data.rss && data.rss.channel && data.rss.channel.item) {
      blogPosts.length = 0;
      blogPosts.push(...data.rss.channel.item.slice(0, 2));
    }
  })
    .catch(err => {
      console.log(err);
      blogPosts.length = 0;
      blogPosts.push(
        {
          title: "No connection to dev.to",
          pubDate: undefined,
          link: undefined,
          loading: false,
        }
      )
    })
}

function convertXmlToJson(xml: string) {
  const parser = new XMLParser();
  return parser.parse(xml);
}

function formatDate(date: string) {
  return moment(date).format('MMM DD YYYY')
}
</script>
