<template>
    <img :src="imageSource" />
</template>

<script lang="ts" setup>
const props = defineProps({
    imageSource: String,
})
</script>