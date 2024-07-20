<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue'
import { CharacterSheet, CharacterSheetType } from '../models/CharacterSheet';
import HeadingActions from './HeadingActions.vue';
import Heading from './Heading.vue';
import AbilityScoresAndSkills from './AbilityScoresAndSkills.vue';

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
    abilityScores: {
      strength: { score: { text: '', locked: false }, modifier: { text: '', locked: false } },
      dexterity: { score: { text: '', locked: false }, modifier: { text: '', locked: false } },
      constitution: { score: { text: '', locked: false }, modifier: { text: '', locked: false } },
      intelligence: { score: { text: '', locked: false }, modifier: { text: '', locked: false } },
      wisdom: { score: { text: '', locked: false }, modifier: { text: '', locked: false } },
      charisma: { score: { text: '', locked: false }, modifier: { text: '', locked: false } },
    },
    skills: {
      acrobatics: { proficient: false, text: '', locked: false },
      animalHandling: { proficient: false, text: '', locked: false },
      arcana: { proficient: false, text: '', locked: false },
      athletics: { proficient: false, text: '', locked: false },
      deception: { proficient: false, text: '', locked: false },
      history: { proficient: false, text: '', locked: false },
      insight: { proficient: false, text: '', locked: false },
      intimidation: { proficient: false, text: '', locked: false },
      investigation: { proficient: false, text: '', locked: false },
      medicine: { proficient: false, text: '', locked: false },
      nature: { proficient: false, text: '', locked: false },
      perception: { proficient: false, text: '', locked: false },
      performance: { proficient: false, text: '', locked: false },
      persuasion: { proficient: false, text: '', locked: false },
      religion: { proficient: false, text: '', locked: false },
      sleightOfHand: { proficient: false, text: '', locked: false },
      stealth: { proficient: false, text: '', locked: false },
      survival: { proficient: false, text: '', locked: false },
    },
    savingThrows: {
      strength: { proficient: false, text: '', locked: false },
      dexterity: { proficient: false, text: '', locked: false },
      constitution: { proficient: false, text: '', locked: false },
      intelligence: { proficient: false, text: '', locked: false },
      wisdom: { proficient: false, text: '', locked: false },
      charisma: { proficient: false, text: '', locked: false },
    },
    inspiration: { text: '', locked: false },
    proficiencyBonus: { text: '', locked: false },
    passiveSkills: {
      acrobatics: { text: '', locked: false },
      animalHandling: { text: '', locked: false },
      arcana: { text: '', locked: false },
      athletics: { text: '', locked: false },
      deception: { text: '', locked: false },
      history: { text: '', locked: false },
      insight: { text: '', locked: false },
      intimidation: { text: '', locked: false },
      investigation: { text: '', locked: false },
      medicine: { text: '', locked: false },
      nature: { text: '', locked: false },
      perception: { text: '', locked: false },
      performance: { text: '', locked: false },
      persuasion: { text: '', locked: false },
      religion: { text: '', locked: false },
      sleightOfHand: { text: '', locked: false },
      stealth: { text: '', locked: false },
      survival: { text: '', locked: false },
    },
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
      <AbilityScoresAndSkills :character-sheet="characterSheet" />
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
