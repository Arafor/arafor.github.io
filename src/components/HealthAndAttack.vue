<script setup lang="ts">
import { CharacterSheet } from '../models/CharacterSheet';
import CharacterSheetInput from './CharacterSheetInput.vue';

defineProps<{
    characterSheet: CharacterSheet,
}>();

</script>

<template>
    <div class="health-and-attack">
        <div class="ac-strip grid">
            <div>
                <CharacterSheetInput :character-sheet-input="characterSheet.data.armorClass" />
                <span>Armor Class</span>
            </div>
            <div>
                <CharacterSheetInput :character-sheet-input="characterSheet.data.initiative" />
                <span>Initiative</span>
            </div>
            <div>
                <CharacterSheetInput :character-sheet-input="characterSheet.data.speed" />
                <span>Speed</span>
            </div>
        </div>

        <div class="current-hit-points">
            <div class="maximum-hit-points">
                <span>Hit Point Maximum</span>
                <CharacterSheetInput :character-sheet-input="characterSheet.data.hitPoints.maximum" />
            </div>
            <CharacterSheetInput :character-sheet-input="characterSheet.data.hitPoints.current" />
            <span>Current Hit Points</span>
        </div>

        <div class="temporary-hit-points">
            <CharacterSheetInput :character-sheet-input="characterSheet.data.hitPoints.temporary" />
            <span>Temporary Hit Points</span>
        </div>

        <div class="hit-dice-and-death-saves">
            <div class="hit-dice">
                <div class="total">
                    <span>Total</span>
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.hitDice.total" />
                </div>
                <CharacterSheetInput :character-sheet-input="characterSheet.data.hitDice.current" />
                <span>Hit Dice</span>
            </div>
            <div class="death-saves">
                <div>
                    <span>Successes</span>
                </div>
                <div>
                    <span>Failures</span>
                </div>
                <span>Hit Dice</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.ac-strip input {
    font-size: 24px;
    text-align: center;
}
</style>

<style lang="scss" scoped>
.ac-strip {
    margin-bottom: 16px;

    >div {
        border: 2px solid rgb(0 0 0);
        padding: 8px;
        padding-bottom: 2px;
    }
}

.current-hit-points,
.temporary-hit-points {
    border: 2px solid rgb(0 0 0);
    padding: 8px;
    padding-bottom: 2px;
    margin-bottom: 16px;

    .maximum-hit-points {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 0;
        margin-bottom: 8px;

        span {
            grid-column: 1/6;
            text-align: left;
        }

        .character-sheet-input {
            grid-column: 6/13;
        }
    }
}

.hit-dice-and-death-saves {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 8px;
    margin-bottom: 16px;

    .hit-dice,
    .death-saves {
        border: 2px solid rgb(0 0 0);
        padding: 8px;
        padding-bottom: 2px;
    }

    .hit-dice {
        grid-column: 1/7;

        .total {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 0;
            margin-bottom: 8px;

            span {
                grid-column: 1/4;
                text-align: left;
            }

            .character-sheet-input {
                grid-column: 4/13;
            }
        }
    }

    .death-saves {
        grid-column: 7/13;
    }


}
</style>