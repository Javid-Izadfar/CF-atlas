<template>
    <component :is="tag" class="j-container">
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
.j-container {
    --container-max-width: 100%;
    width: 100%;
    margin: auto;
    overflow-x: hidden;
    overflow-y: hidden;
    max-width: var(--container-max-width);
}

@media screen and (max-width: 720px) {
    .j-container {
        padding: 0 20px;
    }
}

@media screen and (min-width: 720px) and (max-width: 1200px) {
    .j-container {
        --container-max-width: 720px;
    }
}

@media screen and (min-width: 1200px) and (max-width: 1400px) {
    .j-container {
        --container-max-width: 1140px;
    }
}

@media screen and (min-width: 1400px) {
    .j-container {
        --container-max-width: 1320px;
    }
}
</style>
  