<script setup lang="ts">
import { CharacterSheet } from '../models/CharacterSheet';
import { CharacterSheetTabs } from '../models/CharacterSheetTabs';
import CharacterSheetInput from './CharacterSheetInput.vue';
import CharacterSheetInputArray from './CharacterSheetInputArray.vue';

defineProps<{
    characterSheet: CharacterSheet,
    activeTab: CharacterSheetTabs,
}>();
</script>

<template>
    <div class="heading grid">
        <div class="character-info">
            <div class="character-name">
                <div class="header-info-block">
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.characterName" />
                    <span>Character Name</span>
                </div>
            </div>
            <span>Version: {{ characterSheet.meta.version }}</span>
        </div>

        <div class="character-header-info">
            <div v-if="activeTab === CharacterSheetTabs.STATS" class="grid">
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

            <div v-if="activeTab === CharacterSheetTabs.SPELLS" class="grid">
                <div class="header-info-block">
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.spellCastingAbility" />
                    <span>Spell Casting Ability</span>
                </div>
                <div class="header-info-block">
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.spellSaveDc"
                        title="Spell save DC = 8 + spellcasting ability modifier + proficiency bonus" />
                    <span>Spell Save DC</span>
                </div>
                <div class="header-info-block">
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.spellAttackBonus"
                        title="Spell Attack bonus = Spellcasting ability modifier + Proficiency bonus" />
                    <span>Spell Attack Bonus</span>
                </div>
            </div>

            <div v-if="activeTab === CharacterSheetTabs.EQUIPMENT" class="grid">
                <div class="header-info-block">
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.money.copper" />
                    <span>Copper Pieces</span>
                </div>
                <div class="header-info-block">
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.money.silver" />
                    <span>Silver Pieces</span>
                </div>
                <div class="header-info-block">
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.money.electrum" />
                    <span>Electrum Pieces</span>
                </div>
                <div class="header-info-block">
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.money.gold" />
                    <span>Gold Pieces</span>
                </div>
                <div class="header-info-block">
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.money.platinum" />
                    <span>Platinum</span>
                </div>
            </div>

            <div v-if="activeTab === CharacterSheetTabs.CHARACTER" class="grid">
                <div class="header-info-block">
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.age" />
                    <span>Age</span>
                </div>
                <div class="header-info-block">
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.height" />
                    <span>Height</span>
                </div>
                <div class="header-info-block">
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.weight" />
                    <span>Weight</span>
                </div>
                <div class="header-info-block">
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.eyes" />
                    <span>Eyes</span>
                </div>
                <div class="header-info-block">
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.skin" />
                    <span>Skin</span>
                </div>
                <div class="header-info-block">
                    <CharacterSheetInput :character-sheet-input="characterSheet.data.hair" />
                    <span>Hair</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.heading {
    width: 100%;
}

.character-info {
    grid-column: 1;
    text-align: left;

    .character-name {
        border: 2px solid rgb(0 0 0);
        height: fit-content;
        padding: 8px;
    }

    >span {
        font-size: 12px;
    }
}

.character-header-info {
    border: 2px solid rgb(0 0 0);
    padding: 8px;
    grid-column: 2/4;
}

.header-info-block {
    display: flex;
    flex-direction: column;

    >span {
        font-size: 14px;
        text-align: left;
    }
}
</style>