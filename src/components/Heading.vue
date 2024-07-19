<script setup lang="ts">
import { CharacterSheet } from '../models/CharacterSheet';

defineProps<{
    characterSheet: CharacterSheet,
}>();
</script>

<template>
    <div class="heading">
        <div class="character-name">
            <div class="header-info-block header-info-block--full">
                <input type="text" v-model="characterSheet.data.characterName">
                <span>Character Name</span>
            </div>
        </div>

        <div class="character-header-info">
            <div class="grid">
                <div class="header-info-block">
                    <input type="text" v-model="characterSheet.data.classAndLevel" />
                    <span>Class & Level</span>
                </div>
                <div class="header-info-block">
                    <input type="text" v-model="characterSheet.data.background" />
                    <span>Background</span>
                </div>
                <div class="header-info-block">
                    <input type="text" v-model="characterSheet.data.playerName" />
                    <span>Player Name</span>
                </div>
                <div class="header-info-block">
                    <input type="text" v-model="characterSheet.data.race" />
                    <span>Race</span>
                </div>
                <div class="header-info-block">
                    <input type="text" v-model="characterSheet.data.alignment" />
                    <span>Alignment</span>
                </div>
                <div class="header-info-block">
                    <input type="text" v-model="characterSheet.data.experiencePoints" />
                    <span>Experience Points</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.heading {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.character-name {
    border: 2px solid rgb(0 0 0);
    height: fit-content;
    margin-right: 24px;
    padding: 8px;
    width: 33%;
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

    input {
        width: 95%;
    }
}

.character-header-info {
    border: 2px solid rgb(0 0 0);
    padding: 8px;
    width: 66%;
}
</style>