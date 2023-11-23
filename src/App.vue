<script setup>
import JayContainer from '@/components/base/JayContainer.vue'
import JayRow from '@/components/base/JayRow.vue'
import JayButton from '@/components/base/JayButton.vue'
import JayCard from '@/components/base/JayCard.vue'
import JayIcon from '@/components/base/JayIcon.vue'
</script>

<template>
  <div class="wrapper">
    <JayContainer>
      <JayRow>
        <div>
          <JayButton>Learn More</JayButton>
        </div>
        <div>
          <JayCard>
            asf
            <JayIcon name="heart-empty" size="10" />
            <JayIcon name="heart-filled" size="10" />
            <template #header>header</template>
            <template #footer>footer</template>
          </JayCard>
        </div>
      </JayRow>
    </JayContainer>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 80px 0;
}
</style>
