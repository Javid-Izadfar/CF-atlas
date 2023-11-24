<template>
    <div class="j-card">
        <div class="j-card-header">
            <slot name="header" />
        </div>
        <div class="j-card-content">
            <slot />
        </div>
        <div class="j-card-footer">
            <slot name="footer" />
        </div>
    </div>
</template>

<style scoped>
.j-card {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px;
    color: rgba(0, 0, 0, 0.70);
    border: 1px solid var(--border-color);
    background: rgba(255, 255, 255, 0.60);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), 0px 10px 10px 0px rgba(0, 0, 0, 0.10);
}

.j-card-header {
    z-index: 1;
}

.j-card-content,
.j-card-footer {
    z-index: 2;
}
</style>