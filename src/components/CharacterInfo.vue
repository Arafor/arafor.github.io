<script setup lang="ts">
import { CharacterSheet } from '../models/CharacterSheet';
import CharacterSheetTextArea from './CharacterSheetTextArea.vue';

defineProps<{
    characterSheet: CharacterSheet,
}>();
</script>

<template>
    <div>
        <div class="quirks">
            <div>
                <CharacterSheetTextArea :characterSheetTextArea="characterSheet.data.personalityTraits" />
                <span>Personality Traits</span>
            </div>
            <div>
                <CharacterSheetTextArea :characterSheetTextArea="characterSheet.data.ideals" />
                <span>Ideals</span>
            </div>
            <div>
                <CharacterSheetTextArea :characterSheetTextArea="characterSheet.data.bonds" />
                <span>Bonds</span>
            </div>
            <div>
                <CharacterSheetTextArea :characterSheetTextArea="characterSheet.data.flaws" />
                <span>Flaws</span>
            </div>
        </div>

        <div class="grid">
            <div class="character-column">
                <CharacterSheetTextArea :characterSheetTextArea="characterSheet.data.background" />
                <span>Background</span>
            </div>
            <div class="character-column">
                <CharacterSheetTextArea :characterSheetTextArea="characterSheet.data.appearance" />
                <span>Appearance</span>
            </div>
            <div class="character-column">
                <CharacterSheetTextArea :characterSheetTextArea="characterSheet.data.allies" />
                <span>Allies</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.quirks {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 8px;
    margin-bottom: 32px;

    >div {
        border: 2px solid rgb(0 0 0);
        padding: 8px;
        padding-bottom: 2px;

        &:nth-child(1) {
            grid-column: 1/4;
        }

        &:nth-child(2) {
            grid-column: 4/7;
        }

        &:nth-child(3) {
            grid-column: 7/10;
        }

        &:nth-child(4) {
            grid-column: 10/13;
        }

        >span {
            font-size: 14px;
        }
    }
}

.character-column {
    border: 2px solid rgb(0 0 0);
    padding: 8px;
    padding-bottom: 2px;

    >span {
        font-size: 14px;
    }
}
</style>