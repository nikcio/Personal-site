<template>
    <section>
        <div class="background" :style="{ 'background-image': 'url(' + imageSource + ')' }"></div>
        <h3 v-html="text"></h3>
    </section>
</template>

<script lang="ts" setup>
const props = defineProps({
    imageSource: String,
    text: String,
});
</script>

<style scoped>
section {
    @apply h-80 flex items-center justify-center font-semibold relative text-6xl
    sm:h-96
    md:text-8xl;
}

@media (min-width: 768px) {
    section {
        height: 80vh;
    }
}

.background {
    @apply w-full h-full absolute z-0 bg-no-repeat bg-center bg-contain
    sm:w-2/3 sm:h-2/3
    md:w-3/6 md:h-3/6;
}

h3 {
    @apply z-10;
}
</style>