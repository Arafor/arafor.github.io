<script setup lang="ts">
import { CharacterSheet } from '../models/CharacterSheet';
import CharacterSheetInput from './CharacterSheetInput.vue';
import CharacterSheetCheckbox from './CharacterSheetCheckbox.vue';
import Attacks from './Attacks.vue';

defineProps<{
    characterSheet: CharacterSheet,
}>();

</script>

<template>
    <div class="health-and-attack">
        <div class="ac-strip grid">
            <div>
                <CharacterSheetInput :character-sheet-input="characterSheet.data.armorClass"
                    title="Without armor or a shield, your character's AC equals 10 + their Dexterity modifier, unless specified otherwise" />
                <span>Armor Class</span>
            </div>
            <div>
                <CharacterSheetInput :character-sheet-input="characterSheet.data.initiative"
                    title="Your dexterity modifier" />
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
                <div class="success">
                    <span>Successes</span>
                    <CharacterSheetCheckbox class="first"
                        :character-sheet-checkbox="characterSheet.data.deathSaves.success.first" />
                    <CharacterSheetCheckbox class="second"
                        :character-sheet-checkbox="characterSheet.data.deathSaves.success.second" />
                    <CharacterSheetCheckbox class="third"
                        :character-sheet-checkbox="characterSheet.data.deathSaves.success.third" />
                </div>
                <div class="fail">
                    <span>Failures</span>
                    <CharacterSheetCheckbox class="first"
                        :character-sheet-checkbox="characterSheet.data.deathSaves.fail.first" />
                    <CharacterSheetCheckbox class="second"
                        :character-sheet-checkbox="characterSheet.data.deathSaves.fail.second" />
                    <CharacterSheetCheckbox class="third"
                        :character-sheet-checkbox="characterSheet.data.deathSaves.fail.third" />
                </div>
                <span>Death Saves</span>
            </div>
        </div>

        <Attacks :attacks="characterSheet.data.attacks" />
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

        >span {
            font-size: 14px;
        }
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

    >span {
        font-size: 14px;
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

        >span {
            font-size: 14px;
        }
    }

    .hit-dice {
        grid-column: 1/7;

        .total {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 0;
            margin-bottom: 8px;

            span {
                grid-column: 1/5;
                text-align: left;
            }

            .character-sheet-input {
                grid-column: 5/13;
            }
        }
    }

    .death-saves {
        grid-column: 7/13;

        >span {
            display: block;
            margin-top: 14px;
        }

        .success,
        .fail {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 0;
            margin-bottom: 0;

            span {
                grid-column: 1/7;
                text-align: right;
            }

            .first {
                grid-column: 7/9;
            }

            .second {
                grid-column: 9/11;
            }

            .third {
                grid-column: 11/13;
            }
        }
    }
}
</style>