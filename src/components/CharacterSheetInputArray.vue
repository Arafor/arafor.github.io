<script setup lang="ts">
import { InputType } from '../models/CharacterSheet'
import CharacterSheetInput from './CharacterSheetInput.vue';

const props = defineProps<{
    characterSheetInputArray: InputType[],
}>();

function addClass() {
    const newClass: InputType = { text: '', locked: false };
    props.characterSheetInputArray.push(newClass);
}

function removeClass(input: InputType, index: number) {
    if (!input.text || confirm(`Are you sure you want to remove "${input.text}"?`)) {
        props.characterSheetInputArray.splice(index, 1);
    }
}
</script>

<template>
    <div class="character-sheet-input-array">
        <div v-for="(input, index) in characterSheetInputArray" :key="index" class="input-wrapper"
            :class="{ 'margin-bottom-8': index < characterSheetInputArray.length - 1 }">
            <CharacterSheetInput :character-sheet-input="input" />
            <button v-if="characterSheetInputArray.length > 1 && !input.locked" title="Remove" class="remove"
                @click="removeClass(input, index)">-</button>
        </div>
        <button class="add" title="Add" @click="addClass">+</button>
    </div>
</template>

<style lang="scss" scoped>
.margin-bottom-8 {
    margin-bottom: 8px;
}

.character-sheet-input-array {
    position: relative;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 0;

    .input-wrapper {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 0;
        grid-column: 1/13;

        .character-sheet-input {
            grid-column: 1/13;

            &:has(+.remove) {
                grid-column: 1/12;
            }
        }

        .remove {
            grid-column: 12;
        }
    }

    button {
        width: 24px;
        height: 24px;
        padding: 0;
        background-color: transparent;
        border: none;
        right: 0;
    }

    .add {
        position: absolute;
        grid-column: 12;
        bottom: -20px;
    }
}
</style>