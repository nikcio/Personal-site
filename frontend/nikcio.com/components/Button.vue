<template>
    <GButton
        :class="
        [
            'button',
            type,
        ]"
        :buttonType="buttonType"
        :tag="tag"
        :label="label"
        :disabled="disabled"
        :onClick="onClick"
        :target="target"
        :href="href">
        <template #before-label>
            <slot name="before-label"></slot>
        </template>
        <template #default>
            <slot default></slot>
        </template>
        <template #after-label>
            <slot name="after-label"></slot>
        </template>
        </GButton>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
    type: {
        type: String as PropType<"is-base" | "is-primary" | "is-outlined" | undefined>,
        default: 'is-base'
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
    label: {
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
/* Find more styles here: https://flowbite.com/docs/components/buttons */
.button {
    @apply text-white text-center font-medium text-sm px-5 py-2.5 mr-2 mb-2 border-2 bg-gray-800 border-gray-800 hover:bg-gray-900 hover:border-gray-900 dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-700
}

.button.is-primary {
    @apply bg-blue-700 border-blue-600 hover:border-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
}

.button.is-outlined {
    @apply bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-blue-700 hover:text-white dark:border-blue-600 dark:text-blue-600 dark:hover:bg-blue-600 dark:hover:text-white
}
</style>