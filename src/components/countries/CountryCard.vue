<template>
    <div>
        <JayCard v-if="country">
            <template #header>
                <JayImg :src="country.flags.png" :alt="country.flags.alt" height="150" />
            </template>
            <JayRow class="name-wrapper align-center no-wrap">
                <h3 class="name">
                    {{ country.name.common }}
                </h3>
                <label class="fav">
                    <JayButton :icon="isFav ? 'heart-filled' : 'heart-empty'" :is-icon-only="true" @click="toggleFav" />
                    <input v-model="isFav" type="checkbox" name="isFav">
                </label>
            </JayRow>
            <p class="description">
                {{ description }}
            </p>
            <template #footer>
                <JayButton icon="angle-small-right">
                    Learn More
                </JayButton>
            </template>
        </JayCard>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { shape, string, bool, number } from 'vue-types'

import JayRow from '@/components/base/JayRow.vue'
import JayCard from '@/components/base/JayCard.vue'
import JayImg from '@/components/base/JayImg.vue'
import JayButton from '@/components/base/JayButton.vue'

const props = defineProps({
    country: shape({
        flags: shape({
            png: string(),
            svg: string(),
            alt: string()
        }),
        cca2: string(),
        name: shape({
            common: string(),
            official: string(),
        }),
        independent: bool(),
        region: string(),
        subregion: string(),
        population: number()
    })
})

const isFav = ref(false)
const toggleFav = () => {
    isFav.value = !isFav.value
}

const calcPopulation = (number, name) => {
    const numberLength = number.toString().length

    let title = ''
    let count = number

    if (numberLength > 3 && numberLength <= 5) {
        title = 'thousand'
        count = number / 1000
    }
    else if (numberLength > 5 && numberLength <= 9) {
        title = 'million'
        count = number / 1000000
    } else if (numberLength > 9) {
        title = 'billion'
        count = number / 1000000000
    }

    let roundPow = 1
    const [countMain, countRemain] = count.toString().split('.')
    if (countMain === '0' || (countMain.length === 1 && countRemain?.length > 1)) {
        roundPow = 10
    }
    count = Math.floor(count * roundPow) / roundPow

    return `${count} ${title}`

}

const description = computed(() => {
    const name = props.country?.name?.official
    const type = props.country.independent ? 'an independent country' : 'a dependent territory'
    const subregion = props.country?.subregion
    const population = calcPopulation(props.country?.population || 0, name)

    return `${name} is ${type} in ${subregion} with an estimated population of over ${population} people.`
})
</script>

<style scoped>
.name {
    overflow: hidden;
    color: var(--black);
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    flex-grow: 1;
}

.fav {
    flex-grow: 0;
}

.fav input {
    position: absolute;
    visibility: hidden;
}

.name-wrapper {
    margin-top: 10px;
}

.description {
    overflow: hidden;
    color: rgba(0, 0, 0, 0.70);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 10px;
    height: 100px;
}
</style>