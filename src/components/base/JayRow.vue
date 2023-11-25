<template>
    <component :is="tag" class="j-row">
        <slot />
    </component>
</template>

<script setup>
import { string } from 'vue-types'

defineProps({
    tag: string().def('div')
})
</script>
  
<style scoped>
.j-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 calc(var(--row-gap) / -2);
}
</style>
 
<style>
.j-row>* {
    flex-grow: 1;
    flex-shrink: 1;
    padding: 0 calc(var(--row-gap) / 2);
}
</style>