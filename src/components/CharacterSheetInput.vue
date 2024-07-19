<script setup lang="ts">
import { InputType } from '../models/CharacterSheet'

defineProps<{
    characterSheetInput: InputType,
}>();
</script>

<template>
    <div class="character-sheet-input">
        <input type="text" :disabled="characterSheetInput.locked" v-model="characterSheetInput.text">
        <button @click="characterSheetInput.locked = !characterSheetInput.locked">
            {{ characterSheetInput.locked ? '🔒' : '🔓' }}
        </button>
    </div>
</template>

<style lang="scss" scoped>
.character-sheet-input {
    position: relative;

    >input {
        width: calc(100% - 8px);
    }

    >button {
        position: absolute;
        right: 0;
        width: 24px;
        height: 24px;
        padding: 0;
        background-color: transparent;
        opacity: 0;
        border: none;
        top: 0;

        &:hover {
            opacity: 1;
        }
    }
}
</style>