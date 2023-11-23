<template>
    <button class="j-button">
        <slot />
    </button>
</template>
  
<style scoped>
.j-button {
    display: inline-flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    cursor: pointer;
    color: var(--black);
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    border: 1px solid rgba(255, 255, 255, 0);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%),
        linear-gradient(180deg,
            rgba(255, 255, 255, 0.05) 0%,
            rgba(255, 255, 255, 0.25) 57.29%,
            rgba(255, 255, 255, 0.5) 100%);

    background-blend-mode: overlay, normal;
    box-shadow:
        0px 1px 0px 0px rgba(0, 0, 0, 0.05),
        0px 4px 4px 0px rgba(0, 0, 0, 0.05),
        0px 10px 10px 0px rgba(0, 0, 0, 0.1);
}
</style>
  