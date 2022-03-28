<template>
  <section class="section">
    <b-steps position="is-right" label-position="bottom" size="is-large">
      <b-step-item v-for="year in experience" :key="year.year" :label="year.year" :clickable="true">
        <Experience :educations="year.educations" :jobs="year.jobs" :projects="year.projects" />
      </b-step-item>

      <template #navigation="{ previous, next }">
        <b-button
          outlined
          type="is-outlined"
          icon-pack="mdi"
          icon-left="chevron-left"
          :disabled="previous.disabled"
          @click.prevent="previous.action"
        >Previous</b-button>
        <b-button
          outlined
          type="is-outlined"
          icon-pack="mdi"
          icon-right="chevron-right"
          :disabled="next.disabled"
          @click.prevent="next.action"
        >Next</b-button>
      </template>
    </b-steps>
  </section>
</template>

<script>
import Experience from "~/components/experience/Experience.vue";
export default {
  name: "ExperiencePage",
  components: { Experience },
  data() {
    let experience = [
      {
        year: "2022",
        educations: [
          {
            title: "A education",
            image: "@/assets/images/experience/free-code-camp.svg"
          }
        ],
        jobs: [
          {
            title: "A job",
            image: "@/assets/images/experience/free-code-camp.svg"
          }
        ],
        projects: [
          {
            title: "A project",
            image: "@/assets/images/experience/free-code-camp.svg"
          }
        ]
      },
      {
        year: "2021",
        educations: [
          {
            title: "A education"
          }
        ],
        jobs: [
          {
            title: "A job"
          }
        ],
        projects: [
          {
            title: "A project"
          }
        ]
      },
      {
        year: "2020",
        educations: [
          {
            title: "A education"
          }
        ],
        jobs: [
          {
            title: "A job"
          }
        ],
        projects: [
          {
            title: "A project"
          }
        ]
      },
      {
        year: "2019",
        educations: [
          {
            title: "A education"
          }
        ],
        jobs: [
          {
            title: "A job"
          }
        ],
        projects: [
          {
            title: "A project"
          }
        ]
      },
      {
        year: "2018",
        educations: [
          {
            title: "A education"
          }
        ],
        jobs: [
          {
            title: "A job"
          }
        ],
        projects: [
          {
            title: "A project"
          }
        ]
      }
    ]
    return {
      experience
    }
  }
}
</script>

<style>
</style>
