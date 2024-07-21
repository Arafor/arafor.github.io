<script setup lang="ts">
import { InputType } from '../models/CharacterSheet';
import CharacterSheetInputArray from './CharacterSheetInputArray.vue';

defineProps<{
    languages: InputType[],
}>();

</script>

<template>
    <div class="languages">
        <CharacterSheetInputArray :character-sheet-input-array="languages" :min-amount="0" />
        <span>Language Proficiencies</span>
    </div>
</template>

<style lang="scss">
.languages .character-sheet-input-array .remove {
    margin-left: auto;
}
</style>

<style lang="scss" scoped>
.languages {
    border: 2px solid rgb(0 0 0);
    grid-column: 1/3;
    padding: 8px;
    padding-bottom: 2px;
    margin-bottom: 16px;

    >span {
        font-size: 14px;
    }
}
</style>