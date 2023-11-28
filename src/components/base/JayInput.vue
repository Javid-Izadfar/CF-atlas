<template>
  <div>
    localModelValue: {{ localModelValue }}
    <hr>
    <label v-if="label" :for="id">
      {{ label }}
    </label>
    <input v-model="localModelValue" :placeholder="placeholder" :id="id" :name="name" :type="type" />
  </div>
</template>

<script setup>
import { func, string } from 'vue-types'
import { useLocalModelValue } from '@/composables/localModelValue.js'

const props = defineProps({
	modelValue: string(),
  label: string(),
  name: string(),
  id: string(),
  placeholder: string(),
  type: string().def('text'),
  formatter: func()
})

defineEmits(['update:modelValue', 'update:label'])

const { localModelValue } = useLocalModelValue({ props })

</script>
