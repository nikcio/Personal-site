<template>
  <div>
    <section class="section">
      <div class="columns is-multiline">
        <div class="column is-half" v-for="item in jobs" :key="item.title">
          <div class="card">
            <div class="card-image">
              <b-image v-if="item.image" :src="item.image" ratio="10by2" custom-class="job-image" />
            </div>
            <div class="card-content">
              <h3 class="title is-5" v-if="item.title">{{ item.title }}</h3>
              <p class="subtitle is-6" v-if="item.description">{{ item.description }}</p>
              <div class="buttons">
                <b-button
                  v-if="item.link"
                  type="is-light"
                  :label="item.link.label"
                  tag="a"
                  target="_blank"
                  :href="item.link.href"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns is-multiline">
        <div class="column is-half" v-for="item in educations" :key="item.title">
          <div class="card">
            <div class="card-image">
              <b-image
                v-if="item.image"
                :src="item.image"
                ratio="10by2"
                custom-class="education-image"
              />
            </div>
            <div class="card-content">
              <h3 class="title is-5" v-if="item.title">{{ item.title }}</h3>
              <p class="subtitle is-6" v-if="item.description">{{ item.description }}</p>
              <div class="buttons">
                <b-button
                  v-if="item.link"
                  type="is-light"
                  :label="item.link.label"
                  tag="a"
                  target="_blank"
                  :href="item.link.href"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns is-multiline">
        <div class="column is-half" v-for="item in projects" :key="item.title">
          <div class="card">
            <div class="card-image">
              <b-image
                v-if="item.image"
                :src="item.image"
                ratio="10by2"
                custom-class="project-image"
              />
            </div>
            <div class="card-content">
              <h3 class="title is-5" v-if="item.title">{{ item.title }}</h3>
              <p class="subtitle is-6" v-if="item.description">{{ item.description }}</p>
              <div class="buttons">
                <b-button
                  v-if="item.link"
                  type="is-light"
                  :label="item.link.label"
                  tag="a"
                  target="_blank"
                  :href="item.link.href"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default ({
  props: {
    educations: Array,
    jobs: Array,
    projects: Array
  },
})
</script>

<style>
.b-image-wrapper > img.education-image {
  @apply object-contain;
}

.b-image-wrapper > img.job-image {
  @apply object-contain;
}

.b-image-wrapper > img.project-image {
  @apply object-contain;
}
</style>
