<script setup lang="ts">
import { InputType } from '../models/CharacterSheet';
import CharacterSheetInputArray from './CharacterSheetInputArray.vue';

defineProps<{
    traits: InputType[],
}>();

</script>

<template>
    <div class="traits">
        <CharacterSheetInputArray :character-sheet-input-array="traits" :min-amount="0" />
        <span>Traits</span>
    </div>
</template>

<style lang="scss">
.traits .character-sheet-input-array .remove {
    text-align: right;
}
</style>

<style lang="scss" scoped>
.traits {
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