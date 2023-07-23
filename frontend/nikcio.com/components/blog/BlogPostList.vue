<template>
  <!-- <section class="section">
    <h2 class="title is-3">RSS blog posts feed</h2>
    <div class="columns is-multiline">
      <div class="column is-full" v-for="(post, index) in blogPosts" :key="`blog-post-${index}`">
        <div class="card">
          <div class="card-content">
            <h3 class="title is-5" v-if="post.title">{{ post.title._text }}</h3>
            <p class="subtitle is-7" v-if="post.pubDate">{{ post.pubDate._text | formatDate }}</p>
            <b-button
              v-if="post.link"
              type="is-outlined"
              label="Read"
              tag="a"
              target="_blank"
              :href="post.link._text"
            />
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>

<script>
// export default ({
//   mounted() {
//     this.getBlogPosts()
//   },
//   methods: {
//     async getBlogPosts() {
//       const convert = require("xml-js");
//       await this.$axios.$get('https://dev.to/feed/nikcio').then(res => {
//         const data = JSON.parse(
//           convert.xml2json(res, { compact: true, spaces: 2 })
//         );
//         console.log(data.rss.channel.item);
//         if (data && data.rss && data.rss.channel && data.rss.channel.item) {
//           this.blogPosts = data.rss.channel.item;
//         }
//       })
//         .catch(err => {
//           this.blogPosts = [
//             {
//               title: {
//                 _text: "No connection to dev.to"
//               }
//             }
//           ]
//         })
//     }
//   },
//   data() {
//     let blogPosts = []
//     return {
//       blogPosts
//     }
//   }
// })
</script>
