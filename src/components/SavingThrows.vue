<script setup lang="ts">
import { CharacterSheet } from '../models/CharacterSheet';
import CharacterSheetInput from './CharacterSheetInput.vue';

defineProps<{
    characterSheet: CharacterSheet,
}>();
</script>

<template>
    <div class="saving-throws">
        <div class="ability-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.savingThrows.strength" />
            <span>Strength</span>
        </div>
        <div class="ability-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.savingThrows.dexterity" />
            <span>Dexterity</span>
        </div>
        <div class="ability-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.savingThrows.constitution" />
            <span>Constitution</span>
        </div>
        <div class="ability-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.savingThrows.wisdom" />
            <span>Wisdom</span>
        </div>
        <div class="ability-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.savingThrows.intelligence" />
            <span>Intelligence</span>
        </div>
        <div class="ability-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.savingThrows.charisma" />
            <span>Charisma</span>
        </div>
        <span>Saving Throws</span>
    </div>
</template>

<style lang="scss">
.saving-throws>div button {
    right: -24px !important;
}
</style>

<style lang="scss" scoped>
.saving-throws {
    border: 2px solid rgb(0 0 0);
    padding: 8px;
    padding-bottom: 2px;
    margin-bottom: 16px;

    .ability-score {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 0;
        margin-bottom: 8px;

        .character-sheet-input {
            grid-column: 1/4;
        }

        span {
            grid-column: 5/13;
            text-align: left;
        }
    }

    >span {
        margin-top: 8px;
        display: inline-block;
    }
}
</style>