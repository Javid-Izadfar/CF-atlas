<template>
    <div class="j-row">
        <slot />
    </div>
</template>
  
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