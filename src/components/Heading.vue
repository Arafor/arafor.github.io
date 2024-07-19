<script setup lang="ts">
import { CharacterSheet } from '../models/CharacterSheet';
import CharacterSheetInput from './CharacterSheetInput.vue';
import CharacterSheetInputArray from './CharacterSheetInputArray.vue';

defineProps<{
    characterSheet: CharacterSheet,
}>();
</script>

<template>
    <div class="heading grid">
        <div class="character-name">
            <div class="header-info-block header-info-block--full">
                <CharacterSheetInput :character-sheet-input="characterSheet.data.characterName" />
                <span>Character Name</span>
            </div>
        </div>

        <div class="character-header-info">
            <div class="grid">
                <div class="header-info-block">
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.species" />
                    <span>Species</span>
                </div>
                <div class="header-info-block">
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.background" />
                    <span>Background</span>
                </div>
                <div class="header-info-block">
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.playerName" />
                    <span>Player Name</span>
                </div>
                <div class="header-info-block">
                    <CharacterSheetInputArray :character-sheet-input-array="characterSheet.data.classAndLevel" />
                    <span>Class & Level</span>
                </div>
                <div class="header-info-block">
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.alignment" />
                    <span>Alignment</span>
                </div>
                <div class="header-info-block">
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.experiencePoints" />
                    <span>Experience Points</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.heading {
    width: 100%;
}

.character-name {
    border: 2px solid rgb(0 0 0);
    height: fit-content;
    padding: 8px;
    grid-column: 1;
}

.character-header-info {
    border: 2px solid rgb(0 0 0);
    padding: 8px;
    grid-column: 2/4;
}

.header-info-block {
    display: flex;
    flex-direction: column;

    &--full {
        width: 100%;
    }

    >span {
        font-size: 14px;
        text-align: left;
    }
}
</style>