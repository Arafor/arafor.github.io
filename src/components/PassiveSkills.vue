<script setup lang="ts">
import { ref } from 'vue';
import { CharacterSheet, CharacterSheetSkill, characterSheetSkillName, skillAbilityMap, characterSheetAbilityName } from '../models/CharacterSheet';
import CharacterSheetInput from './CharacterSheetInput.vue';

defineProps<{
    characterSheet: CharacterSheet,
}>();

const expanded = ref(false);

function displayName(skill: CharacterSheetSkill) {

    return `Passive ${characterSheetSkillName[skill]} (${characterSheetAbilityName[skillAbilityMap[skill]]})`;
}
</script>

<template>
    <div class="passive-skills">
        <button class="expand" @click="expanded = !expanded">
            {{ expanded ? 'Collapse' : 'Expand' }}
        </button>

        <template v-if="!expanded">
            <div class="skill">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.passiveSkills.perception" />
                </div>
                <span>{{ displayName(CharacterSheetSkill.PERCEPTION) }}</span>
            </div>
        </template>

        <template v-else>
            <div class="skill">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.passiveSkills.acrobatics" />
                </div>
                <span>{{ displayName(CharacterSheetSkill.ACROBATICS) }}</span>
            </div>
            <div class="skill">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.passiveSkills.animalHandling" />
                </div>
                <span>{{ displayName(CharacterSheetSkill.ANIMAL_HANDLING) }}</span>
            </div>
            <div class="skill">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.passiveSkills.arcana" />
                </div>
                <span>{{ displayName(CharacterSheetSkill.ARCANA) }}</span>
            </div>
            <div class="skill">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.passiveSkills.athletics" />
                </div>
                <span>{{ displayName(CharacterSheetSkill.ATHLETICS) }}</span>
            </div>
            <div class="skill">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.passiveSkills.deception" />
                </div>
                <span>{{ displayName(CharacterSheetSkill.DECEPTION) }}</span>
            </div>
            <div class="skill">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.passiveSkills.history" />
                </div>
                <span>{{ displayName(CharacterSheetSkill.HISTORY) }}</span>
            </div>
            <div class="skill">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.passiveSkills.insight" />
                </div>
                <span>{{ displayName(CharacterSheetSkill.INSIGHT) }}</span>
            </div>
            <div class="skill">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.passiveSkills.intimidation" />
                </div>
                <span>{{ displayName(CharacterSheetSkill.INTIMIDATION) }}</span>
            </div>
            <div class="skill">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.passiveSkills.investigation" />
                </div>
                <span>{{ displayName(CharacterSheetSkill.INVESTIGATION) }}</span>
            </div>
            <div class="skill">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.passiveSkills.medicine" />
                </div>
                <span>{{ displayName(CharacterSheetSkill.MEDICINE) }}</span>
            </div>
            <div class="skill">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.passiveSkills.nature" />
                </div>
                <span>{{ displayName(CharacterSheetSkill.NATURE) }}</span>
            </div>
            <div class="skill">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.passiveSkills.perception" />
                </div>
                <span>{{ displayName(CharacterSheetSkill.PERCEPTION) }}</span>
            </div>
            <div class="skill">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.passiveSkills.performance" />
                </div>
                <span>{{ displayName(CharacterSheetSkill.PERFORMANCE) }}</span>
            </div>
            <div class="skill">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.passiveSkills.persuasion" />
                </div>
                <span>{{ displayName(CharacterSheetSkill.PERSUASION) }}</span>
            </div>
            <div class="skill">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.passiveSkills.religion" />
                </div>
                <span>{{ displayName(CharacterSheetSkill.RELIGION) }}</span>
            </div>
            <div class="skill">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.passiveSkills.sleightOfHand" />
                </div>
                <span>{{ displayName(CharacterSheetSkill.SLEIGHT_OF_HAND) }}</span>
            </div>
            <div class="skill">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.passiveSkills.stealth" />
                </div>
                <span>{{ displayName(CharacterSheetSkill.STEALTH) }}</span>
            </div>
            <div class="skill">
                <div>
                    <CharacterSheetInput :characterSheetInput="characterSheet.data.passiveSkills.survival" />
                </div>
                <span>{{ displayName(CharacterSheetSkill.SURVIVAL) }}</span>
            </div>
        </template>
    </div>
</template>

<style lang="scss">
.passive-skills>div {
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
.passive-skills {
    position: relative;

    .expand {
        padding: 4px;
        position: absolute;
        right: 0;
        top: -18px;
        font-size: 12px;
    }

    .skill {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 0;
        margin-bottom: 4px;

        >div {
            border: 2px solid rgb(0 0 0);
            grid-column: 1/4;
            padding: 8px;
            border-radius: 24px;
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
}
</style>