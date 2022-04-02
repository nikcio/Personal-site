<template>
  <div>
    <section class="section" v-if="jobs && jobs.length > 0">
      <h3 class="title">Jobs:</h3>
      <ExperienceCategoryItem :items="jobs" />
    </section>
    <section class="section" v-if="certificates && certificates.length > 0">
      <h3 class="title">Certificates:</h3>
      <ExperienceCategoryItem :items="certificates" />
    </section>
    <section class="section" v-if="educations && educations.length > 0">
      <h3 class="title">Education:</h3>
      <ExperienceCategoryItem :items="educations" />
    </section>
    <section class="section" v-if="projects && projects.length > 0">
      <h3 class="title">Projects:</h3>
      <ExperienceCategoryItem :items="projects" />
    </section>
  </div>
</template>

<script>
export default ({
  props: {
    educations: Array,
    jobs: Array,
    projects: Array,
    certificates: Array
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
