<template>
  <section class="section">
    <b-steps position="is-right" label-position="bottom" size="is-large">
      <b-step-item v-for="year in experience" :key="year.year" :label="year.year" :clickable="true">
        <ExperienceItem :educations="year.educations" :jobs="year.jobs" :projects="year.projects" />
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
import ExperienceItem from "~/components/experience/ExperienceItem.vue";


export default {
  name: "ExperiencePage",
  components: { ExperienceItem },
  data() {
    let experience = [
      {
        year: "2022",
        educations: [
          {
            title: "A education",
            image: require('@/assets/images/logos/free-code-camp-logo.svg')
          }
        ],
        jobs: [
          {
            title: "A job",
            image: require('@/assets/images/logos/free-code-camp-logo.svg')
          }
        ],
        projects: [
          {
            title: "A project",
            image: require('@/assets/images/logos/free-code-camp-logo.svg')
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
        ],
        certificates: [
          {
            title: "CS50's Web Programming with Python and Javascript",
            provider: "CS50 (Harvard University)",
            image: require('@/assets/certificates/cs50w.webp'),
            date: "feb. 2019",
            link: {
              label: "Verify certificate",
              href: "https://learndigital.withgoogle.com/digitalworkshop-eu/validate-certificate-code"
            }
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
        ],
        certificates: [
          {
            title: "The Fundamentals of Digital Marketing",
            provider: "Google",
            image: require('@/assets/certificates/digital-marketing.webp'),
            date: "feb. 2019",
            link: {
              label: "Verify certificate",
              href: "https://learndigital.withgoogle.com/digitalworkshop-eu/validate-certificate-code"
            }
          },
          {
            title: "JavaScript Algorithms and Data Structures",
            provider: "FreeCodeCamp",
            image: require('@/assets/images/certificates/javascript-and-datastructures'),
            date: "feb. 2019",
            link: {
              label: "View certificate",
              href: "https://www.freecodecamp.org/certification/nikcio/javascript-algorithms-and-data-structures"
            }
          }
        ]
      },
      {
        year: "2018",
        educations: [
          {
            title: "FreeCodeCamp",
            description: "I woked on FreeCodeCamp courses where I learned about different areas of webdevelopment.",
            image: require('@/assets/images/logos/free-code-camp-logo.svg'),
            link: {
              label: "View projects",
              href: "https://github.com/nikcio/FreeCodeCamp"
            }
          }
        ],
        jobs: [
        ],
        projects: [
        ],
        certificates: [
          {
            title: "Response Web Design",
            provider: "FreeCodeCamp",
            image: require('@/assets/certificates/response-web-design.webp'),
            date: "okt. 2018",
            link: {
              label: "View certificate",
              href: "https://www.freecodecamp.org/certification/nikcio/responsive-web-design"
            }
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
