<template>
    <div class="filter-wrapper">
        <JayCard class="filter-card align-center" :is-simple="true">
            <template #header>
                Filter
            </template>
            <div>
                <JayButton @click="toggleDropdown" class="btn" icon="angle-small-down">
                    {{ dropdownTitle }}
                </JayButton>
            </div>
            <JayCard v-show="isDropdownOpen" tag="ul" class="filter-options">
                <li v-for="option in filterOptions" :key="option.value"
                    :class="['filter-options-item', option.value === localModelValue ? ' selected' : '']"
                    @click="onRegionSelect(option)">
                    {{ option.label }}
                </li>
            </JayCard>
        </JayCard>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { string } from 'vue-types'
import { useLocalModelValue } from '@/composables/localModelValue.js'

import JayCard from '@/components/base/JayCard.vue'
import JayButton from '@/components/base/JayButton.vue'

const props = defineProps({
    modelValue: string()
})
defineEmits(['update:modelValue'])

const { localModelValue } = useLocalModelValue({ props })

const REGIONS = ['Africa', 'Americas', 'Antarctica', 'Asia', 'Europe', 'Oceania'];
const filterOptions = [
    {
        label: 'All Regions',
        value: undefined,
    },
    ...REGIONS.map(region => ({
        label: region,
        value: region
    }))
]

const isDropdownOpen = ref(false)
const toggleDropdown = () => isDropdownOpen.value = !isDropdownOpen.value
const dropdownTitle = computed(() => {
    if (!localModelValue.value) {
        return 'Region'
    }
    return filterOptions.find(option => option.value === props.modelValue)?.label
})


const onRegionSelect = (region) => {
    toggleDropdown()
    localModelValue.value = region.value
}

</script>

<style scoped>
.filter-wrapper {
    text-align: right;
}

.filter-card {
    display: inline-flex;
    position: relative;
    padding: 4px;
    border-radius: 30px;
}

.filter-card .btn {
    border-radius: 30px;
    margin-left: 4px;
}

.filter-options {
    text-align: left;
    position: absolute;
    bottom: -10px;
    transform: translateY(100%);
    right: -1px;
    left: -1px;
    padding: 12px 16px;
    backdrop-filter: blur(10px);
    z-index: 2;
    gap: 4px;
}

.filter-options-item {
    color: var(--black);
    position: relative;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    padding: 8px 16px;
    cursor: pointer;
    border-left: solid 1px transparent;
    transition: all 200ms ease-in-out;
}

.filter-options-item:hover {
    border-color: #2670E9;
}

.filter-options-item.selected {
    background: linear-gradient(90deg, rgba(38, 112, 233, 0.30) 0%, rgba(38, 112, 233, 0) 100%);
}

.filter-options-item.selected:before {
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0;
    left: -1px;
    background: #2670E9;
    box-shadow: 0px 0px 4px 1px rgba(38, 112, 233, 0.45);
}
</style>

<style>
.filter-card>.j-card-header {
    padding: 0 12px;
    color: var(--black);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
}
</style>