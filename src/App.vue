<template>
  <div class="wrapper">
    <JayContainer>
      <JayRow class="no-wrap align-center">
        <header class="title">
          <h1>Atlas: The Ultimate Guide to the World</h1>
          <p>Atlas is a website that lists every country with their flags and facts. You can explore the world map,
            search by name or region, and filter by criteria. Learn about the world and its diversity with Atlas!</p>
        </header>
        <div class="filters">
          <CountryFilters v-model="appliedRegionFilter" />
        </div>
      </JayRow>
      <JayRow v-show="visibleCountries.length" tag="ul" class="country-list">
        <li v-for="country in visibleCountries" :key="country.cca2" class="country">
          <CountryCard :country="country" />
        </li>
      </JayRow>
      <div class="no-result" v-show="!isLoading && !visibleCountries.length">
        <code style="opacity: 0.4;">// TODO: Add no result</code>
      </div>
      <div class="loading" v-if="isLoading">
        <code style="opacity: 0.4;">// TODO: Add loading</code>
      </div>
    </JayContainer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import JayContainer from '@/components/base/JayContainer.vue'
import JayRow from '@/components/base/JayRow.vue'
import CountryCard from '@/components/countries/CountryCard.vue'
import CountryFilters from '@/components/countries/CountryFilters.vue'

const appliedRegionFilter = ref(undefined)

const isLoading = ref(false)
const countries = ref([])
const visibleCountries = computed(() => {
  if (appliedRegionFilter.value) {
    return countries.value.filter(country => country.region === appliedRegionFilter.value)
  }
  return countries.value
})

const fetchCountries = async () => {
  isLoading.value = true
  const fields = ['name','population','flags','subregion','region','independent']
  const response = await fetch(`https://restcountries.com/v3.1/all?fields=${fields.join(',')}`)
  countries.value = await response.json()
  isLoading.value = false
}

fetchCountries()

</script>

<style scoped>
.wrapper {
  padding: 80px 0;
  min-height: 100vh;
}

.title {
  padding-top: 20px;
  padding-bottom: 20px;
  width: 841px;
  max-width: 100%;
  flex-grow: 0;
}

.title h1 {
  color: var(--black);
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -1.2px;
  margin-bottom: 10px;
}

.title {
  color: var(--black);
  opacity: 0.7;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}

.country-list,
.no-result,
.loading {
  padding-top: 30px;
}

.no-result,
.loading {
  height: 50vh;
}

.country {
  --columns: 1;
  margin-bottom: var(--row-gap);
  flex-basis: calc(100% / var(--columns));
  max-width: calc(100% / var(--columns));
}

@media screen and (max-width: 1200px) {
  .filters {
    display: none
  }

}

@media screen and (min-width: 720px) and (max-width: 1200px) {
  .country {
    --columns: 3;
  }
}

@media screen and (min-width: 1200px) {
  .country {
    --columns: 4;
  }
}
</style>
