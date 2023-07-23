<template>
    <li>
        <NuxtLink :to="to" :class="classes" :aria-current="CurrentPage">{{ name }}</NuxtLink>
    </li>
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
    classes: {
        type: String,
        default: ''
    },
    CurrentPage: {
        type: Boolean as PropType<boolean | undefined>,
        default: undefined
    }
})
</script>