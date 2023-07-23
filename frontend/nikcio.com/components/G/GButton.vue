<template>
    <component :is="tag" :disabled="disabled" :type="buttonType" @click="onClick" :target="target" :href="href">
        <slot name="before-label"></slot>
        <slot default>
            <span>{{ label }}</span>
        </slot>
        <slot name="after-label"></slot>
    </component>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
    tag: {
        type: String,
        default: 'button'
    },
    label: {
        type: String,
        default: ''
    },
    buttonType: {
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