<script setup lang="ts">
import { InputType } from '../models/CharacterSheet';
import CharacterSheetInputArray from './CharacterSheetInputArray.vue';

defineProps<{
    features: InputType[],
}>();

</script>

<template>
    <div class="features">
        <CharacterSheetInputArray :character-sheet-input-array="features" :min-amount="0" />
        <span>Features</span>
    </div>
</template>

<style lang="scss">
.features .character-sheet-input-array .remove {
    text-align: right;
}
</style>

<style lang="scss" scoped>
.features {
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