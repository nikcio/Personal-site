<template>
  <section>
    <div class="socials">
      <a href="https://www.linkedin.com/in/nikcio/">
        <Image
          image-source="/icons/socials/linkedin-icon.svg"
          alt="linkedin"
        />
      </a>
      <a href="https://our.umbraco.com/members/nikcio/">
        <Image
          image-source="/icons/socials/umbraco-icon.svg"
          alt="umbraco"
        />
      </a>
      <a href="https://github.com/nikcio">
        <Image
          image-source="/icons/socials/github-icon.svg"
          alt="github"
        />
      </a>
    </div>
  </section>
</template>

<style scoped>
.socials {
    @apply flex flex-row justify-evenly max-w-lg items-center mx-auto;
}

.socials a {
    @apply relative flex items-center justify-center;
}

.socials a img {
    @apply relative;
}

.socials a img {
    @apply z-10 w-3/6 h-3/6;
}

.socials a:nth-child(1) {
    @apply w-32 h-32 mb-32;
    margin-right: -2rem;
}

.socials a:nth-child(2) {
    @apply w-16 h-16 mt-36;
}

.socials a:nth-child(3) {
    @apply w-40 h-40;
}

.socials a::before {
    content: "";
    @apply w-full h-full absolute z-0 rounded-full;
    background: #ef6f6c;
}

.socials a:hover::before {
    background: #eb4a47;
}

.socials a:nth-child(2)::before {
    content: "";
    @apply w-full h-full absolute z-0 rounded-full;
    background: #676cdb;
}

.socials a:nth-child(2):hover::before {
    background: #4950d4;
}
</style>