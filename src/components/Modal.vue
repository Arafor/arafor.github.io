<script setup lang="ts">
const emit = defineEmits(['close']);

function closeModal() {
    emit('close');
}
</script>

<template>
    <div class="modal">
        <div class="window">
            <div class="header">
                <h3>
                    <slot name="header"></slot>
                </h3>
                <button class="close" @click="closeModal">✕</button>
            </div>

            <slot name="content"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modal {
    background-color: rgba(0, 0, 0, .6);
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
}

.window {
    max-width: 800px;
    width: 100vw;
    background-color: rgb(255, 255, 255);
    margin: 64px auto;
    padding: 16px;
    text-align: left;
    border-radius: 6px;
    overflow-y: scroll;
    max-height: 80vh;
}

.header {
    display: flex;
    justify-content: space-between;
}

.close {
    background-color: transparent;
    border: none;
    font-size: 24px;
    font-weight: 900;
    padding: 0 16px;

    &:focus,
    &:focus-visible {
        outline: none;
    }

    &:hover {
        color: rgb(0 120 215);
    }
}
</style>