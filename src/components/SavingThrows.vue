<script setup lang="ts">
import { CharacterSheet } from '../models/CharacterSheet';
import StatService from '../services/StatService';
import CharacterSheetInput from './CharacterSheetInput.vue';

const props = defineProps<{
    characterSheet: CharacterSheet,
}>();

function getPassiveSkillPlaceholder(modifier: string, proficient: boolean) {
    const modifierNumber = StatService.getModifierNumber(modifier);
    const proficiencyNumber = StatService.getModifierNumber(props.characterSheet.data.proficiencyBonus.text);
    const result = 0 + modifierNumber + (proficient ? proficiencyNumber : 0);

    return result > -1 ? `+${String(result)}` : String(result);
}
</script>

<template>
    <div class="saving-throws">
        <div class="ability-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.savingThrows.strength"
                :placeholder="getPassiveSkillPlaceholder(characterSheet.data.abilityScores.strength.modifier.text, characterSheet.data.savingThrows.strength.proficient)" />
            <span>Strength</span>
        </div>
        <div class="ability-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.savingThrows.dexterity"
                :placeholder="getPassiveSkillPlaceholder(characterSheet.data.abilityScores.dexterity.modifier.text, characterSheet.data.savingThrows.dexterity.proficient)" />
            <span>Dexterity</span>
        </div>
        <div class="ability-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.savingThrows.constitution"
                :placeholder="getPassiveSkillPlaceholder(characterSheet.data.abilityScores.constitution.modifier.text, characterSheet.data.savingThrows.constitution.proficient)" />
            <span>Constitution</span>
        </div>
        <div class="ability-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.savingThrows.wisdom"
                :placeholder="getPassiveSkillPlaceholder(characterSheet.data.abilityScores.wisdom.modifier.text, characterSheet.data.savingThrows.wisdom.proficient)" />
            <span>Wisdom</span>
        </div>
        <div class="ability-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.savingThrows.intelligence"
                :placeholder="getPassiveSkillPlaceholder(characterSheet.data.abilityScores.intelligence.modifier.text, characterSheet.data.savingThrows.intelligence.proficient)" />
            <span>Intelligence</span>
        </div>
        <div class="ability-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.savingThrows.charisma"
                :placeholder="getPassiveSkillPlaceholder(characterSheet.data.abilityScores.charisma.modifier.text, characterSheet.data.savingThrows.charisma.proficient)" />
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