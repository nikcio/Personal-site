<template>
  <!-- <div class="columns is-multiline">
    <div class="column is-half" v-for="(item, index) in items" :key="`${item.title}-${index}`">
      <div class="card">
        <div class="card-image">
          <b-image
            v-if="item.image && item.image.src"
            :src="item.image.src"
            :alt="item.image.alt"
            ratio="10by2"
            custom-class="item-image"
          />
        </div>
        <div class="card-content">
          <h3 class="title is-5" v-if="item.title">{{ item.title }}</h3>
          <p class="subtitle is-6" v-if="item.company">{{ item.company }}</p>
          <div class="content">
            <p v-if="item.description">{{ item.description }}</p>
            <div>
              <small v-if="item.date && item.date != ''">{{ item.date }}</small>
            </div>
            <div>
              <small v-if="item.role && item.role != ''">Role: {{ item.role }}</small>
            </div>
          </div>
          <div v-if="item.links" class="buttons">
            <b-button
              v-for="link in item.links"
              :key="link.label"
              type="is-light"
              :label="link.label"
              tag="a"
              target="_blank"
              :href="link.href"
            />
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default ({
  props: {
    items: Array,
  },
})
</script>

<style>
.b-image-wrapper > img.item-image {
  @apply object-contain;
}
</style>
