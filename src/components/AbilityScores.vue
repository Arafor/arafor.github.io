<script setup lang="ts">
import { AbilityScoreType } from '../models/CharacterSheet'
import CharacterSheetInput from './CharacterSheetInput.vue';

defineProps<{
    abilityScores: AbilityScoreType,
}>();
</script>

<template>
    <div class="attributes">
        <div>
            <span>Strength</span>
            <CharacterSheetInput :character-sheet-input="abilityScores.strength.modifier" class="modifier" />
            <div class="score">
                <CharacterSheetInput :character-sheet-input="abilityScores.strength.score" />
            </div>
        </div>
        <div>
            <span>Dexterity</span>
            <CharacterSheetInput :character-sheet-input="abilityScores.dexterity.modifier" class="modifier" />
            <div class="score">
                <CharacterSheetInput :character-sheet-input="abilityScores.dexterity.score" />
            </div>
        </div>
        <div>
            <span>Constitution</span>
            <CharacterSheetInput :character-sheet-input="abilityScores.constitution.modifier" class="modifier" />
            <div class="score">
                <CharacterSheetInput :character-sheet-input="abilityScores.constitution.score" />
            </div>
        </div>
        <div>
            <span>Wisdom</span>
            <CharacterSheetInput :character-sheet-input="abilityScores.wisdom.modifier" class="modifier" />
            <div class="score">
                <CharacterSheetInput :character-sheet-input="abilityScores.wisdom.score" />
            </div>
        </div>
        <div>
            <span>Intelligence</span>
            <CharacterSheetInput :character-sheet-input="abilityScores.intelligence.modifier" class="modifier" />
            <div class="score">
                <CharacterSheetInput :character-sheet-input="abilityScores.intelligence.score" />
            </div>
        </div>
        <div>
            <span>Charisma</span>
            <CharacterSheetInput :character-sheet-input="abilityScores.charisma.modifier" class="modifier" />
            <div class="score">
                <CharacterSheetInput :character-sheet-input="abilityScores.charisma.score" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.modifier input {
    font-size: 24px;
    text-align: center;
}

.score .character-sheet-input {
    >input {
        text-align: center;
    }

    >button {
        right: -12px;
    }
}
</style>

<style lang="scss" scoped>
.attributes {
    >div {
        border: 2px solid rgb(0 0 0);
        padding: 2px 8px 0;
        margin-top: 32px;

        &:first-child {
            margin-top: 0;
        }

        .modifier {
            margin-top: 8px;
        }

        .score {
            border: 2px solid rgb(0 0 0);
            border-radius: 24px;
            transform: translateY(50%);
            padding: 4px 16px;
            background-color: rgb(255 255 255);
            margin-top: -12px;
        }
    }
}
</style>