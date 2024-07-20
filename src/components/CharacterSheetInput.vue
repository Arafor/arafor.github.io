<script setup lang="ts">
import { InputType } from '../models/CharacterSheet'

defineProps<{
    characterSheetInput: InputType,
}>();
</script>

<template>
    <div class="character-sheet-input">
        <div>
            <input v-if="characterSheetInput.hasOwnProperty('proficient')" type="checkbox"
                :disabled="characterSheetInput.locked" v-model="characterSheetInput.proficient">
            <input type="text" :disabled="characterSheetInput.locked" :placeholder="characterSheetInput.placeholder"
                v-model="characterSheetInput.text">
        </div>
        <button @click="characterSheetInput.locked = !characterSheetInput.locked">
            {{ characterSheetInput.locked ? '🔒' : '🔓' }}
        </button>
    </div>
</template>

<style lang="scss" scoped>
.character-sheet-input {
    position: relative;

    >div {
        display: flex;

        input[type="checkbox"] {
            height: fit-content;
            margin: auto 0;
        }

        input[type="text"] {
            width: calc(100% - 8px);
        }
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
        top: 50%;
        transform: translateY(-50%);

        &:hover {
            opacity: 1;
        }
    }
}
</style>