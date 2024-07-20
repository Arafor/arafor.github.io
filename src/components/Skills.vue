<script setup lang="ts">
import { CharacterSheet } from '../models/CharacterSheet';
import CharacterSheetInput from './CharacterSheetInput.vue';

defineProps<{
    characterSheet: CharacterSheet,
}>();
</script>


<template>
    <div class="skills">
        <div class="skill-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.skills.acrobatics" />
            <span>Acrobatics <span class="associated-ability">(Dex)</span></span>
        </div>
        <div class="skill-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.skills.animalHandling" />
            <span>Animal Handling <span class="associated-ability">(Wis)</span></span>
        </div>
        <div class="skill-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.skills.arcana" />
            <span>Arcana <span class="associated-ability">(Int)</span></span>
        </div>
        <div class="skill-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.skills.athletics" />
            <span>Athletics <span class="associated-ability">(Str)</span></span>
        </div>
        <div class="skill-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.skills.deception" />
            <span>Deception <span class="associated-ability">(Cha)</span></span>
        </div>
        <div class="skill-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.skills.history" />
            <span>History <span class="associated-ability">(Int)</span></span>
        </div>
        <div class="skill-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.skills.insight" />
            <span>Insight <span class="associated-ability">(Wis)</span></span>
        </div>
        <div class="skill-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.skills.intimidation" />
            <span>Intimidation <span class="associated-ability">(Cha)</span></span>
        </div>
        <div class="skill-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.skills.investigation" />
            <span>Investigation <span class="associated-ability">(Int)</span></span>
        </div>
        <div class="skill-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.skills.medicine" />
            <span>Medicine <span class="associated-ability">(Wis)</span></span>
        </div>
        <div class="skill-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.skills.nature" />
            <span>Nature <span class="associated-ability">(Int)</span></span>
        </div>
        <div class="skill-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.skills.perception" />
            <span>Perception <span class="associated-ability">(Wis)</span></span>
        </div>
        <div class="skill-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.skills.performance" />
            <span>Performance <span class="associated-ability">(Cha)</span></span>
        </div>
        <div class="skill-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.skills.persuasion" />
            <span>Persuasion <span class="associated-ability">(Cha)</span></span>
        </div>
        <div class="skill-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.skills.religion" />
            <span>Religion <span class="associated-ability">(Int)</span></span>
        </div>
        <div class="skill-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.skills.sleightOfHand" />
            <span>Sleight of Hand <span class="associated-ability">(Dex)</span></span>
        </div>
        <div class="skill-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.skills.stealth" />
            <span>Stealth <span class="associated-ability">(Dex)</span></span>
        </div>
        <div class="skill-score">
            <CharacterSheetInput :characterSheetInput="characterSheet.data.skills.survival" />
            <span>Survival <span class="associated-ability">(Wis)</span></span>
        </div>
        <span>Skills</span>
    </div>
</template>

<style lang="scss">
.skills>div button {
    right: -24px !important;
}
</style>

<style lang="scss" scoped>
.skills {
    border: 2px solid rgb(0 0 0);
    padding: 8px;
    padding-bottom: 2px;
    margin-bottom: 16px;

    .skill-score {
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

            .associated-ability {
                color: rgba(33, 53, 71, 0.5);
            }
        }
    }

    >span {
        margin-top: 8px;
        display: inline-block;
    }
}
</style>