<script setup lang="ts">
import { CharacterSheet, CharacterSheetType } from '../models/CharacterSheet';
import ImportButton from './ImportButton.vue';
import ExportButton from './ExportButton.vue';

defineProps<{
    characterSheet: CharacterSheet,
}>();

const emit = defineEmits(['imported'])

function setCharacterSheet(data: CharacterSheet) {
    emit('imported', data)
}
</script>

<template>
    <div class="actions">
        <div class="logo">
            <img v-if="characterSheet.meta.type === CharacterSheetType.DND_5E" src="./../assets/dnd-5e-logo.png"
                alt="Dungeons & Dragons 5th Edition" />
            <img v-if="characterSheet.meta.type === CharacterSheetType.SW_5E" src="./../assets/sw-5e-logo.png"
                alt="Star Wars 5th Edition" />
        </div>
        <div>
            <ImportButton @imported="setCharacterSheet" />

            <ExportButton :characterSheet="characterSheet" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.actions {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    text-align: right;

    button {
        margin-right: 16px;

        &:last-child {
            margin-right: 0;
        }
    }
}

.logo {
    height: 50px;

    >img {
        height: 100%;
    }
}
</style>