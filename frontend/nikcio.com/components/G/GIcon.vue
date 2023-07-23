<template>
    <font-awesome-icon 
        :icon="icon" 
        :size="size" 
        :fixed-width="fixedWidth" 
        :rotation="rotation" 
        :flip="flip"
        :beat="beat"
        :beat-fade="beatFade"
        :bounce="bounce"
        :fade="fade"
        :shake="shake"
        :spin="spin"
        :spin-reverse="spinReverse"
        :spin-pulse="spinPulse" />
</template>

<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
    icon: {
        type: String,
        default: '',
        requred: true
    },
    size: {
        type: String as PropType<"2xs" | "xs" | "s" | "m" | "l" | "xl" | "2xl" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | undefined>,
        default: undefined
    },
    fixedWidth: {
        type: Boolean,
        default: false
    },
    rotation: {
        type: Number as PropType<number | undefined>,
        default: undefined
    },
    flip: {
        type: [String, Boolean] as PropType<"horizontal" | "vertical" | "both" | boolean | undefined>,
        default: undefined
    },
    beat: {
        type: Boolean,
        default: false
    },
    beatFade: {
        type: Boolean,
        default: false
    },
    bounce: {
        type: Boolean,
        default: false
    },
    fade: {
        type: Boolean,
        default: false
    },
    shake: {
        type: Boolean,
        default: false
    },
    spin: {
        type: Boolean,
        default: false
    },
    spinReverse: {
        type: Boolean,
        default: false
    },
    spinPulse: {
        type: Boolean,
        default: false
    }
})
</script>