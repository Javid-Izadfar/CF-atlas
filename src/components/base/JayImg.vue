<template>
    <div class="j-img">
        <img class="j-img-content" :src="src" :alt="alt" :height="height" loading="lazy"/>
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
    box-shadow: 0px 30px 60px 0px rgba(0, 0, 0, 0.10);
}

.j-img::before,
.j-img::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    z-index: 2;
    border-radius: 10px;
}

.j-img::before {
    box-shadow: 0px 10px 40px -5px rgba(0, 0, 0, 0.2);
    mix-blend-mode: overlay;
}

.j-img:after {
    border: solid 1px var(--border-color);
}

.j-img-content {
    width: 100%;
    object-fit: cover;
    border-radius: inherit;
    position: relative;
    z-index: 1;
}
</style>