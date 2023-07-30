<template>
    <nav :class="navClasses">
        <div :class="containerClasses">
            <slot name="brand"></slot>
            <GButton 
                :class="menuToggleClasses"
                :data-collapse-toggle="navbarName"
                type="button"
                :aria-controls="navbarName" 
                :aria-expanded="navbarExpanded"
                :onClick="expandMenu">
                <template #default>
                    <span class="sr-only">Open main menu</span>
                    <slot default>
                        <GIcon :icon="['fas', 'fa-bars']" />
                    </slot>
                </template>
            </GButton>
            <slot name="navbarItems"></slot>
        </div>
    </nav>
</template>

<script setup lang="ts">
defineProps({
    navbarName: {
        type: String,
        default: 'navbar'
    },
    navClasses: {
        type: String,
        default: ''
    },
    containerClasses: {
        type: String,
        default: ''
    },
    menuToggleClasses: {
        type: String,
        default: ''
    },
})

const emit = defineEmits(['menuToggle']);

let navbarExpanded = ref(false);

const expandMenu = (event: MouseEvent) => {
    event.preventDefault();
    navbarExpanded.value = !navbarExpanded.value;
    emit('menuToggle', navbarExpanded.value);
}
</script>