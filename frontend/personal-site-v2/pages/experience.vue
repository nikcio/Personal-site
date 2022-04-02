<template>
  <section class="section">
    <b-steps position="is-right" label-position="bottom" size="is-large">
      <b-step-item v-for="year in experience" :key="year.year" :label="year.year" :clickable="true">
        <ExperienceItem
          :educations="year.educations"
          :jobs="year.jobs"
          :projects="year.projects"
          :certificates="year.certificates"
        />
      </b-step-item>

      <template #navigation="{ previous, next }">
        <b-button
          outlined
          type="is-outlined"
          icon-pack="mdi"
          icon-left="chevron-left"
          :disabled="previous.disabled"
          @click.prevent="previous.action"
          @click="scrollTop"
        >Previous</b-button>
        <b-button
          outlined
          type="is-outlined"
          icon-pack="mdi"
          icon-right="chevron-right"
          :disabled="next.disabled"
          @click.prevent="next.action"
          @click="scrollTop"
        >Next</b-button>
      </template>
    </b-steps>
  </section>
</template>

<script>
import ExperienceItem from "~/components/experience/ExperienceItem.vue";

export default {
  name: "ExperiencePage",
  head() {
    return {
      title: "Experience"
    }
  },
  components: { ExperienceItem },
  methods: {
    scrollTop(event) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  },
  data() {
    let experience = [
      {
        year: "2022",
        educations: [
          {
            title: "UCL Erhvervsakademi og Professionshøjskole",
            description: "AP Computer Science degree",
            image: {
              src: require('@/assets/images/logos/ucl-logo.webp'),
              alt: "UCL logo"
            },
            links: [
              {
                label: "First semester project",
                href: "https://github.com/nikcio/UCL-Projekt-1"
              },
              {
                label: "Second semester project",
                href: "https://github.com/nikcio/UCL-Projekt-2"
              },
              {
                label: "Third semester project",
                href: "https://github.com/nikcio/UCL-Projekt-2"
              }
            ]
          },
        ],
        jobs: [
          {
            title: "Full Stack Developer",
            description: "Working with C#, Umbraco, Asp Net / Asp Net Core, Umbraco packages, Vue and Nuxt. Developing both private and municipality websites.",
            company: "Limbo",
            date: "aug. 2021 - now"
          },
        ],
        projects: [
          {
            title: "Nikcio.UHeadless",
            description: "Make Umbraco headless using GraphQL.",
            links: [
              {
                label: "View project",
                href: "https://github.com/nikcio/Nikcio.UHeadless"
              },
              {
                label: "View on Nuget",
                href: "https://www.nuget.org/packages/Nikcio.UHeadless/"
              }
            ],
            date: "sep. 2021 - now",
            role: "Author"
          },
          {
            title: "Nikcio.ApiAuthentication",
            description: "Easy to setup authentication for Asp Net Core.",
            links: [
              {
                label: "View project",
                href: "https://github.com/nikcio/Nikcio.ApiAuthentication"
              },
              {
                label: "View on Nuget",
                href: "https://www.nuget.org/packages/Nikcio.ApiAuthentication/"
              }
            ],
            date: "feb. 2022 - now",
            role: "Author"
          },
          {
            title: "Nikcio.DataAccess",
            description: "Generic models for data access with EF Core.",
            links: [
              {
                label: "View project",
                href: "https://github.com/nikcio/Nikcio.DataAccess"
              },
              {
                label: "View on Nuget",
                href: "https://www.nuget.org/packages/Nikcio.DataAccess/"
              }
            ],
            date: "feb. 2022 - now",
            role: "Author"
          },
          {
            title: "UBlog",
            description: "A POC of the Nikcio.UHeadless.",
            links: [
              {
                label: "View project",
                href: "https://github.com/nikcio/UBlog"
              },
            ],
            date: "feb. 2022",
            role: "Author"
          },
          {
            title: "Personal site rework (v2)",
            description: "I recreated my website with a the Buefy UI library and Nuxt.",
            links: [
              {
                label: "View project",
                href: "https://github.com/nikcio/Personal-site/tree/master/frontend/personal-site-v2"
              },
            ],
            date: "apr. 2022",
            role: "Author"
          },
          {
            title: "Limbo.Umbraco.UserPermissions",
            description: "A package for limiting user access to content and media in Umbraco.",
            links: [
              {
                label: "View project",
                href: "https://github.com/limbo-works/Limbo.Umbraco.UserPermissions"
              },
            ],
            date: "mar. 2022",
            role: "Author"
          },
          {
            title: "Limbo.Umbraco.Subscriptions",
            description: "",
            links: [
              {
                label: "View project",
                href: "https://github.com/limbo-works/Limbo.Umbraco.Subscriptions"
              },
            ],
            date: "feb. 2022",
            role: "Author"
          },
        ],
        certificates: [
        ]
      },
      {
        year: "2021",
        educations: [
          {
            title: "UCL Erhvervsakademi og Professionshøjskole",
            description: "AP Computer Science degree",
            image: {
              src: require('@/assets/images/logos/ucl-logo.webp'),
              alt: "UCL logo"
            },
            links: [
              {
                label: "First semester project",
                href: "https://github.com/nikcio/UCL-Projekt-1"
              },
              {
                label: "Second semester project",
                href: "https://github.com/nikcio/UCL-Projekt-2"
              },
              {
                label: "Third semester project",
                href: "https://github.com/nikcio/UCL-Projekt-2"
              }
            ]
          },
        ],
        jobs: [
          {
            title: "Full Stack Developer",
            description: "Working with C#, Umbraco, Asp Net / Asp Net Core, Umbraco packages, Vue and Nuxt. Developing both private and municipality websites.",
            company: "Limbo",
            date: "aug. 2021 - now"
          },
          {
            title: "Full Stack Developer",
            description: "Developing a product where I'm the primary developer in front and backend. I'm working with C#, Umbraco, Asp Net Core, and multiple smaller add-ons to these pilar elements.",
            company: "Webti",
            date: "okt. 2020 - jul. 2021"
          }
        ],
        projects: [
          {
            title: "Nikcio.UHeadless",
            description: "Make Umbraco headless using GraphQL.",
            links: [
              {
                label: "View project",
                href: "https://github.com/nikcio/Nikcio.UHeadless"
              },
              {
                label: "View on Nuget",
                href: "https://www.nuget.org/packages/Nikcio.UHeadless/"
              }
            ],
            date: "sep. 2021 - now",
            role: "Author"
          },
          {
            title: "Umbraco Docker Template",
            description: "A template project for getting started with Umbraco 9 and Docker.",
            links: [
              {
                label: "View project",
                href: "https://github.com/nikcio/UmbracoDockerTemplate"
              }
            ],
            date: "jun. 2021",
            role: "Author"
          },
          {
            title: "Personal site rework (v1)",
            description: "My website was made using Nuxt, which is based on Vue. This project is hosted in Docker on a Linux server. To create this website I used Figma as a design platform to quickly iterate over design ideas, and see them in action. With this help, it was easy to code the frontend code needed to have the website following the design.",
            links: [
              {
                label: "View project",
                href: "https://github.com/nikcio/Personal-site/tree/master/frontend/personal-site"
              }
            ],
            date: "okt. 2021",
            role: "Author"
          },
          {
            title: "Personal server setup",
            description: "I've created my personal Linux server to host a bunch of services and make the foundation for future projects. The server is primarily a docker host with multiple containers running different services, including a web server created with Traefik, a Portainer instance to manage the docker containers, Uptime Kuma for monitoring, and Watchtower for automatic updates of docker images.",
            links: [
            ],
            date: "okt. 2021",
            role: "Author"
          },
          {
            title: "Umbraco Docs",
            description: "Contributed to the Umbraco documentation.",
            links: [
              {
                label: "View project",
                href: "https://github.com/umbraco/UmbracoDocs"
              }
            ],
            date: "aug. 2021",
            role: "Contributer"
          },
          {
            title: "Umbraco CMS",
            description: "Contributed to Umbraco CMS.",
            links: [
              {
                label: "View project",
                href: "https://github.com/umbraco/Umbraco-CMS"
              }
            ],
            date: "may. 2021 - now",
            role: "Contributer"
          },
          {
            title: "Skybrud.Umbraco.Search",
            description: "Contributed to Skybrud.Umbraco.Search.",
            links: [
              {
                label: "View project",
                href: "https://github.com/skybrud/Skybrud.Umbraco.Search"
              }
            ],
            date: "",
            role: "Contributer"
          },
          {
            title: "Skybrud.Umbraco.Time",
            description: "Contributed to Skybrud.Umbraco.Time.",
            links: [
              {
                label: "View project",
                href: "https://github.com/abjerner/Skybrud.Umbraco.Time"
              }
            ],
            date: "",
            role: "Contributer"
          },
          {
            title: "Skybrud.Umbraco.Redirects",
            description: "Contributed to Skybrud.Umbraco.Redirects.",
            links: [
              {
                label: "View project",
                href: "https://github.com/skybrud/Skybrud.Umbraco.Redirects"
              }
            ],
            date: "",
            role: "Contributer"
          },
          {
            title: "Skybrud.Umbraco.ImagePicker",
            description: "Contributed to Skybrud.Umbraco.ImagePicker.",
            links: [
              {
                label: "View project",
                href: "https://github.com/skybrud/Skybrud.ImagePicker"
              }
            ],
            date: "",
            role: "Contributer"
          },
          {
            title: "Skybrud.Umbraco.LinkPicker",
            description: "Contributed to Skybrud.Umbraco.LinkPicker.",
            links: [
              {
                label: "View project",
                href: "https://github.com/skybrud/Skybrud.LinkPicker"
              }
            ],
            date: "",
            role: "Contributer"
          },
        ],
        certificates: [
          {
            title: "Software Architecture: Domain-Driven Design",
            provider: "LinkedIn",
            image: {
              src: require('@/assets/certificates/domain-driven.webp'),
              alt: "certificate"
            },
            date: "nov. 2021",
            links: [
              {
                label: "View certificate",
                href: "https://www.linkedin.com/learning/certificates/060f511faf494642749aba8e81ee59efd0a721cc91f2b1f2d02d56a1c6e5e214?u=57075649"
              }
            ]
          },
          {
            title: "ASP.NET Core: Token-Based Authentication",
            provider: "LinkedIn",
            image: {
              src: require('@/assets/certificates/asp-token-auth.webp'),
              alt: "certificate"
            },
            date: "sep. 2021",
            links: [
              {
                label: "View certificate",
                href: "https://www.linkedin.com/learning/certificates/0e8abfb3431440d2da3e9a0224955a9228fb6beb6d117e5e37465718d708f645?u=57075649"
              }
            ]
          },
          {
            title: "Docker for Developers",
            provider: "LinkedIn",
            image: {
              src: require('@/assets/certificates/docker.webp'),
              alt: "certificate"
            },
            date: "sep. 2021",
            link: [
              {
                label: "View certificate",
                href: "https://www.linkedin.com/learning/certificates/fb90bfe14488a9f50aa2b51f99ad48052fce56f482950d908ca1b73f3c43829d?u=57075649"
              }
            ]
          }
        ]
      },
      {
        year: "2020",
        educations: [
          {
            title: "CS50",
            description: "I woked on the CS50W course that thought be about database design, scalability, security and user experience. It included six projects which were made using Python, Django and JavaScript.",
            image: {
              src: require('@/assets/images/logos/harvard-logo.svg'),
              alt: "Harvard logo"
            },
            links: [
              {
                label: "View projects",
                href: "https://github.com/nikcio/CS50-Web"
              }
            ]
          },
          {
            title: "UCL Erhvervsakademi og Professionshøjskole",
            description: "AP Computer Science degree",
            image: {
              src: require('@/assets/images/logos/ucl-logo.webp'),
              alt: "UCL logo"
            },
            links: [
              {
                label: "First semester project",
                href: "https://github.com/nikcio/UCL-Projekt-1"
              },
              {
                label: "Second semester project",
                href: "https://github.com/nikcio/UCL-Projekt-2"
              },
              {
                label: "Third semester project",
                href: "https://github.com/nikcio/UCL-Projekt-2"
              }
            ]
          },
          {
            title: "FreeCodeCamp",
            description: "I woked on FreeCodeCamp courses where I learned about different areas of webdevelopment.",
            image: {
              src: require('@/assets/images/logos/free-code-camp-logo.svg'),
              alt: "FreeCodeCamp"
            },
            links: [
              {
                label: "View projects",
                href: "https://github.com/nikcio/FreeCodeCamp"
              }
            ]
          }
        ],
        jobs: [
          {
            title: "Full Stack Developer",
            description: "Developing a product where I'm the primary developer in front and backend. I'm working with C#, Umbraco, Asp Net Core, and multiple smaller add-ons to these pilar elements.",
            company: "Webti",
            date: "okt. 2020 - jul. 2021"
          },
          {
            title: "Intern",
            description: "Built websites using Umbraco",
            company: "Webtimisten",
            date: "feb. 2020 - mar. 2020"
          }
        ],
        projects: [
          {
            title: "Recipe Website (Jinny Project)",
            description: "This project was about making a website that could contain any number of recipes. It was built with Django and featured user submission with login capabilities for the creation of recipes.",
            links: [
              {
                label: "View project",
                href: "https://github.com/nikcio/JinnyProject"
              }
            ],
            date: "apr. 2020 - jun. 2020",
            role: "Author"
          },
          {
            title: "Netscraper app (Esfand app)",
            description: "The app's purpose was to show posts and videos that were scraped from Reddit and gathered through the Youtube API. (Built in Flutter with a Django REST API backend)",
            links: [
              {
                label: "View project",
                href: "https://github.com/nikcio/Esfand_app"
              }
            ],
            date: "aug. 2020 - sep. 2020",
            role: "Author"
          },
          {
            title: "GitHub introduction",
            description: "A simple introduction to the most useful concepts on Git and GitHub.",
            links: [
              {
                label: "View project",
                href: "https://github.com/nikcio/GitHub-Introduction"
              }
            ],
            date: "sep. 2020",
            role: "Author"
          },
          {
            title: "Nikcios toolkit",
            description: "Gulpfile to perform useful commands.",
            links: [
              {
                label: "View project",
                href: "https://github.com/nikcio/Nikcios-toolkit"
              }
            ],
            date: "may 2020",
            role: "Author"
          }
        ],
        certificates: [
          {
            title: "CS50's Web Programming with Python and Javascript",
            provider: "CS50 (Harvard University)",
            image: {
              src: require('@/assets/certificates/cs50w.webp'),
              alt: "certificate"
            },
            date: "dec.2020",
            links: [
              {
                label: "Verify certificate",
                href: "https://learndigital.withgoogle.com/digitalworkshop-eu/validate-certificate-code"
              }
            ]
          }
        ]
      },
      {
        year: "2019",
        educations: [
          {
            title: "FreeCodeCamp",
            description: "I woked on FreeCodeCamp courses where I learned about different areas of webdevelopment.",
            image: {
              src: require('@/assets/images/logos/free-code-camp-logo.svg'),
              alt: "FreeCodeCamp"
            },
            links: [
              {
                label: "View projects",
                href: "https://github.com/nikcio/FreeCodeCamp"
              }
            ]
          }
        ],
        jobs: [
        ],
        projects: [
          {
            title: "Handicapskydning Website",
            description: "This project was made to replace the current website on https://handicapskydning.dk/. The Handicapskydning website consists of a frontend for the average user and an admin backend for the person managing the website.",
            links: [
              {
                label: "View project",
                href: "https://github.com/nikcio/Handicapskydning-Public"
              }
            ],
            date: "sep. 2019 - nov. 2019",
            role: "Author"
          },
          {
            title: "Sci10",
            description: "A project to teach classmates about coding.",
            links: [
              {
                label: "View project",
                href: "https://github.com/nikcio/Sci10-project"
              }
            ],
            date: "dec. 2019",
            role: "Author"
          },
          {
            title: "Atom",
            description: "Project to calculate decay series of isotopes.",
            links: [
              {
                label: "View project",
                href: "https://github.com/nikcio/Atom"
              }
            ],
            date: "oct. 2019",
            role: "Author"
          }
        ],
        certificates: [
          {
            title: "The Fundamentals of Digital Marketing",
            provider: "Google",
            image: {
              src: require('@/assets/certificates/digital-marketing.webp'),
              alt: "certificate"
            },
            date: "feb. 2019",
            links: [
              {
                label: "Verify certificate",
                href: "https://learndigital.withgoogle.com/digitalworkshop-eu/validate-certificate-code"
              }
            ]
          },
          {
            title: "JavaScript Algorithms and Data Structures",
            provider: "FreeCodeCamp",
            image: {
              src: require('@/assets/certificates/javascript-and-datastructures.webp'),
              alt: "certificate"
            },
            date: "feb. 2019",
            links: [
              {
                label: "View certificate",
                href: "https://www.freecodecamp.org/certification/nikcio/javascript-algorithms-and-data-structures"
              }
            ]
          }
        ]
      },
      {
        year: "2018",
        educations: [
          {
            title: "FreeCodeCamp",
            description: "I woked on FreeCodeCamp courses where I learned about different areas of webdevelopment.",
            image: {
              src: require('@/assets/images/logos/free-code-camp-logo.svg'),
              alt: "FreeCodeCamp"
            },
            links: [
              {
                label: "View projects",
                href: "https://github.com/nikcio/FreeCodeCamp"
              }
            ]
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
            image: {
              src: require('@/assets/certificates/response-web-design.webp'),
              alt: "certificate"
            },
            date: "okt. 2018",
            links: [
              {
                label: "View certificate",
                href: "https://www.freecodecamp.org/certification/nikcio/responsive-web-design"
              }
            ]
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
