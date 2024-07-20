<script setup lang="ts">
import { InputType } from '../models/CharacterSheet';
import CharacterSheetInputArray from './CharacterSheetInputArray.vue';

defineProps<{
    weapons: InputType[],
}>();

</script>

<template>
    <div class="weapons">
        <CharacterSheetInputArray :character-sheet-input-array="weapons" :min-amount="0" />
        <span>Weapon Proficiencies</span>
    </div>
</template>

<style lang="scss">
.weapons .character-sheet-input-array .remove {
    text-align: right;
}
</style>

<style lang="scss" scoped>
.weapons {
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