<script setup lang="ts">
import { CharacterSheet } from '../models/CharacterSheet';
import CharacterSheetInputArray from './CharacterSheetInputArray.vue';

defineProps<{
    characterSheet: CharacterSheet,
}>();
</script>

<template>
    <div class="equipment grid">
        <div>
            <div class="equipment-column">
                <CharacterSheetInputArray :characterSheetInputArray="characterSheet.data.equipment" :minAmount="0" />
                <span>Equipment</span>
            </div>
        </div>
        <div>
            <div class="equipment-column">
                <CharacterSheetInputArray :characterSheetInputArray="characterSheet.data.consumables" :minAmount="0" />
                <span>Consumables</span>
            </div>
        </div>
        <div>
            <div class="equipment-column">
                <CharacterSheetInputArray :characterSheetInputArray="characterSheet.data.treasure" :minAmount="0" />
                <span>Treasure</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.equipment .character-sheet-input-array .remove {
    text-align: right;
}
</style>

<style lang="scss" scoped>
.equipment-column {
    border: 2px solid rgb(0 0 0);
    padding: 8px;
    padding-bottom: 2px;

    >span {
        font-size: 14px;
    }
}
</style>