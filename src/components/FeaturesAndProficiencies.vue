<script setup lang="ts">
import { CharacterSheet } from '../models/CharacterSheet';
import CharacterSheetInputArray from './CharacterSheetInputArray.vue';

defineProps<{
    characterSheet: CharacterSheet,
}>();

</script>

<template>
    <div>
        <CharacterSheetInputArray :character-sheet-input-array="characterSheet.data.features" />
    </div>
</template>