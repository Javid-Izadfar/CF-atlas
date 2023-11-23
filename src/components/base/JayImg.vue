<template>
    <div class="j-img">
        <img class="j-img-content" :src="src" :height="height" />
    </div>
</template>

<script setup>
import { string, oneOfType, number } from 'vue-types'

defineProps({
    src: string().isRequired,
    alt: string().isRequired,
    height: oneOfType([number(), string().validate(v => !isNaN(+v))]).isRequired
})
</script>

<style scoped>
.j-img {
    border-radius: 10px;
    position: relative;
    height: 150px;
    box-shadow: 0px 30px 60px 0px rgba(0, 0, 0, 0.10), 0px 30px 60px 0px rgba(0, 0, 0, 0.50);
}

.j-img:after {
    content: '';
    width: 100%;
    height: 100%;
    mix-blend-mode: lighten;
    border: solid 1px var(--border-color);
    position: absolute;
    inset: 0;
    z-index: 2;
    border-radius: 10px;
}

.j-img-content {
    width: 100%;
    object-fit: cover;
    border-radius: inherit;
    position: relative;
    z-index: 1;
}
</style>