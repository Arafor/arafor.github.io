<script setup lang="ts">
import { CharacterSheet } from '../models/CharacterSheet'
import CharacterSheetInput from './CharacterSheetInput.vue';
import AbilityScores from './AbilityScores.vue';
import SavingThrows from './SavingThrows.vue';
import Skills from './Skills.vue';
import PassiveSkills from './PassiveSkills.vue';

defineProps<{
    characterSheet: CharacterSheet,
}>();
</script>

<template>
    <div class="grid">
        <AbilityScores :ability-scores="characterSheet.data.abilityScores" />
        <div class="skills">
            <div class="inspiration">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.inspiration" />
                </div>
                <span>Inspiration</span>
            </div>
            <div class="proficiency-bonus">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.proficiencyBonus" />
                </div>
                <span>Proficiency Bonus</span>
            </div>
            <SavingThrows :characterSheet="characterSheet" />
            <Skills :characterSheet="characterSheet" />
        </div>
        <PassiveSkills :characterSheet="characterSheet" />
    </div>
</template>

<style lang="scss">
.inspiration,
.proficiency-bonus>div {
    input {
        font-size: 24px;
        text-align: center;
    }

    button {
        right: -24px !important;
    }
}
</style>

<style lang="scss" scoped>
.skills {
    grid-column: 2/4;

    .inspiration,
    .proficiency-bonus {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 0;
        margin-bottom: 16px;

        >div {
            border: 2px solid rgb(0 0 0);
            grid-column: 1/4;
            padding: 8px;
        }

        >span {
            grid-column: 4/13;
            border: 2px solid rgb(0 0 0);
            border-left: none;
            text-align: center;
            height: fit-content;
            margin: auto 0;
            padding: 4px 0;
        }
    }

    .proficiency-bonus>div {
        border-radius: 24px;
    }
}

.passive-skills {
    grid-column: 1/4;
}
</style>