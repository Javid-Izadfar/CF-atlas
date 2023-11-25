<template>
    <component :is="tag" :class="['j-card', `j-card--${isSimple ? 'simple' : 'default'}`]">
        <div v-if="$slots.header" class="j-card-header">
            <slot name="header" />
        </div>
        <slot />
        <div v-if="$slots.footer" class="j-card-footer">
            <slot name="footer" />
        </div>
    </component>
</template>

<script setup>
import { bool, string } from 'vue-types'

defineProps({
    isSimple: bool().def(false),
    tag: string().def('div')
})
</script>

<style scoped>
.j-card {
    display: flex;
    color: rgba(0, 0, 0, 0.70);
    border: 1px solid var(--border-color);
    background: rgba(255, 255, 255, 0.60);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), 0px 10px 10px 0px rgba(0, 0, 0, 0.10);
}

.j-card--default {
    padding: 20px;
    border-radius: 10px;
    flex-direction: column;
    gap: 10px;
}

.j-card-header {
    z-index: 0;
}
</style>