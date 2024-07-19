<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue'
import { CharacterSheet, CharacterSheetType } from '../models/CharacterSheet';
import HeadingActions from './HeadingActions.vue';
import Heading from './Heading.vue';
import AttributesAndSkills from './AttributesAndSkills.vue';

//TODO
// Edit character sheet type

const emptyCharacterSheet: CharacterSheet = {
  meta: {
    version: '0.0.1',
    type: CharacterSheetType.DND_5E
  },
  data: {
    characterName: { text: '', locked: false },
    species: { text: '', locked: false },
    background: { text: '', locked: false },
    playerName: { text: '', locked: false },
    classAndLevel: [{ text: '', locked: false }],
    alignment: { text: '', locked: false },
    experiencePoints: { text: '', locked: false },
  },
}

const characterSheet = ref();
const importedCharacterSheet = ref();

onBeforeMount(() => {
  characterSheet.value = JSON.parse(JSON.stringify(emptyCharacterSheet));
});

onMounted(() => {
  window.addEventListener('beforeunload', (event) => {
    const sheetString = JSON.stringify(characterSheet.value);
    const emptySheetString = JSON.stringify(emptyCharacterSheet);
    const importedSheetString = JSON.stringify(importedCharacterSheet.value);
    if (sheetString === emptySheetString || sheetString === importedSheetString) {
      return;
    }

    const answer = window.confirm('You have unsaved changes, are you sure you want to leave?')
    if (!answer) {
      event.preventDefault();
    }
  });
});

function setImportedCharacterSheet(data: CharacterSheet) {
  characterSheet.value = data;
  importedCharacterSheet.value = JSON.parse(JSON.stringify(data));
}
</script>

<template>
  <div class="page">
    <HeadingActions :characterSheet="characterSheet" @imported="setImportedCharacterSheet" />

    <Heading :characterSheet="characterSheet" />

    <div class="content grid">
      <AttributesAndSkills />
    </div>
  </div>
</template>

<style lang="scss">
body {
  place-items: baseline;
  display: block;
}

:root {
  background-color: #ffffff;
  color: #213547;
}

textarea,
button,
input {
  background-color: rgb(222 229 255);
  color: #213547;
}

input,
textarea {
  border: none;
  border-bottom: 1px solid rgb(0 0 0);
  font-size: 16px;
  padding: 4px !important;
  padding-block: 0;
  padding-inline: 0;
  width: calc(100% - 8px);

  &:focus,
  &:focus-visible {
    outline-color: rgb(0 120 215);
  }

  &:disabled {
    background-color: rgb(252, 244, 230);
  }
}

button {
  &:hover {
    border-color: rgb(0 120 215);
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
</style>

<style lang="scss" scoped>
.page {
  max-width: 1280px;
  width: 90vw;
}

.content {
  margin-top: 32px;
}
</style>
