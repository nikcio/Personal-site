<template>
    <GNavbarItem :to="to" :name="name" :CurrentPage="currentPage" />
</template>

<script setup lang="ts">
import { RouteLocationRaw } from '.nuxt/vue-router';

defineProps({
    name: {
        type: String,
        default: '',
        reqired: true
    },
    to: {
        type: Object as PropType<RouteLocationRaw | undefined>,
        default: undefined
    },
    currentPage: {
        type: Boolean as PropType<boolean | undefined>,
        default: undefined
    }
})
</script>