<template>
    <component :is="tag" class="button" :class="classes" :disabled="disabled" :type="type" @click="onClick" :target="target" :href="href">
        <span v-if="iconLeft" class="icon">
            <font-awesome-icon :icon="iconLeft"></font-awesome-icon>
        </span>
        <span>{{ label }}</span>
        <span v-if="iconRight" class="icon">
            <font-awesome-icon :icon="iconRight"></font-awesome-icon>
        </span>
    </component>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
    classes: {
        type: String,
        default: ''
    },
    type: {
        type: String as PropType<"button" | "submit" | "reset" | undefined>,
        default: 'button'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    onClick: {
        type: Function as PropType<(payload: MouseEvent) => void | undefined>,
        default: undefined
    },
    label: {
        type: String,
        default: ''
    },
    iconLeft: {
        type: String,
        default: ''
    },
    iconRight: {
        type: String,
        default: ''
    },
    tag: {
        type: String,
        default: 'button'
    },
    target: {
        type: String,
        default: ''
    },
    href: {
        type: String,
        default: ''
    }
})
</script>

<style scoped>
.button {
    border-radius: 0;
    border: 1px solid #000;
    background-color: #000;
    color: #fff;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}
</style>