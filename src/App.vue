<template>
  <div class="wrapper">
    <JayContainer>
      <RouterView/>
    </JayContainer>
  </div>
</template>

<script setup>
  import JayContainer from '@/components/base/JayContainer.vue'
</script>
  
<style scoped>
.wrapper {
  padding: 80px 0;
  min-height: 100vh;
}
</style>