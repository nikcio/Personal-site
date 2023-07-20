<template>
  <section class="section">
    <h2 class="title is-3">Featured Nuget packages</h2>
    <div class="columns is-multiline">
      <div class="column is-half" v-for="item in nugetPackages" :key="item.title">
        <div class="card">
          <div class="card-content">
            <h3 class="title is-5">{{ item.title }}</h3>
            <p class="subtitle is-6">{{ item.description }}</p>
            <div class="buttons">
              <Button
                label="View on GitHub"
                tag="a"
                target="_blank"
                icon-right="fa brands fa-github"
                :href="item.github"
              />
              <Button
                type="is-outlined"
                label="View on Nuget.org"
                tag="a"
                target="_blank"
                :href="item.nuget"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
const nugetPackages = [
  {
    title: "Nikcio.UHeadless",
    description: "An easy setup solution for making Umbraco headless using GraphQL",
    nuget: "https://www.nuget.org/packages/Nikcio.UHeadless/",
    github: "https://github.com/nikcio/Nikcio.UHeadless"
  },
  {
    title: "Nikcio.DataAccess",
    description: "Generic models for data access with EF Core",
    nuget: "https://www.nuget.org/packages/Nikcio.DataAccess/",
    github: "https://github.com/nikcio/Nikcio.DataAccess"
  },
  {
    title: "Nikcio.ApiAuthentication",
    description: "Easy to setup authentication for Asp Net Core",
    nuget: "https://www.nuget.org/packages/Nikcio.ApiAuthentication/",
    github: "https://github.com/nikcio/Nikcio.ApiAuthentication"
  }
]
</script>
