<script setup lang="ts">
import { ref } from 'vue'
import { CharacterSheet, CharacterSheetType } from '../models/CharacterSheet';
import HeadingActions from './HeadingActions.vue';
import Heading from './Heading.vue';
import AttributesAndSkills from './AttributesAndSkills.vue';

//TODO
// leave check
// Edit character sheet type

const emptyCharacterSheet: CharacterSheet = {
  meta: {
    version: '0.0.1',
    type: CharacterSheetType.DND_5E
  },
  data: {
    characterName: '',
    classAndLevel: '',
    background: '',
    playerName: '',
    race: '',
    alignment: '',
    experiencePoints: '',
  },
}

const characterSheet = ref(emptyCharacterSheet)

function setCharacterSheet(data: CharacterSheet) {
  characterSheet.value = data;
}
</script>

<template>
  <div class="page">
    <HeadingActions :characterSheet="characterSheet" @imported="setCharacterSheet" />

    <Heading :characterSheet="characterSheet" />

    <div class="content grid">
      <AttributesAndSkills />
    </div>
  </div>
</template>

<style lang="scss">
body {
  place-items: baseline;
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
  padding: 4px;

  &:focus,
  &:focus-visible {
    outline-color: rgb(0 120 215);
  }
}

button:hover {
  border-color: rgb(0 120 215);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
</style>

<style lang="scss" scoped>
.content {
  margin-top: 32px;
}
</style>
