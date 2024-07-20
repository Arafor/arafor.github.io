<script setup lang="ts">
import { CharacterSheet } from '../models/CharacterSheet';
import CharacterSheetInput from './CharacterSheetInput.vue';

defineProps<{
    characterSheet: CharacterSheet,
}>();
</script>

<template>
    <div class="passive-skills">
        <div class="skill">
            <div>
                <CharacterSheetInput :characterSheetInput="characterSheet.data.passiveSkills.perception" />
            </div>
            <span>Passive Wisdom (perception)</span>
        </div>
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
    .skill {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 0;
        margin-bottom: 16px;

        >div {
            border: 2px solid rgb(0 0 0);
            grid-column: 1/3;
            padding: 8px;
            border-radius: 24px;
        }

        >span {
            grid-column: 3/13;
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