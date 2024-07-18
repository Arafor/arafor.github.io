<script setup lang="ts">
import { ref } from 'vue'
import { CharacterSheet } from '../models/CharacterSheet';
import { isCharacterSheet } from '../models/CharacterSheet.guard';
import Modal from './Modal.vue'

//TODO
// input json validation
// leave check

const inputString = ref('')
const outputString = ref('')
const importModalVisible = ref(false);
const exportModalVisible = ref(false);
const showImportError = ref(false);

// const characterName = ref('')
// const classAndLevel = ref('')
// const background = ref('')
// const playerName = ref('')
// const race = ref('')
// const alignment = ref('')
// const experiencePoints = ref('')


const emptyCharacterSheet: CharacterSheet = {
  meta: {
    version: '0.0.1',
    type: 'dnd-5e'
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

function openImporter() {
  importModalVisible.value = true;
}

function importCharacterSheet() {
  showImportError.value = false;

  let importedData;
  try {
    importedData = JSON.parse(inputString.value);
  } catch {
    showImportError.value = true;
    return;
  }

  if (!isCharacterSheet(importedData)) {
    showImportError.value = true;
    return;
  }

  characterSheet.value = importedData;

  importModalVisible.value = false;
}

function exportCharacterSheet() {
  outputString.value = JSON.stringify(characterSheet.value);

  exportModalVisible.value = true;
}
</script>

<template>
  <div class="page">
    <div class="actions">
      <button @click="openImporter">Import</button>
      <Modal v-if="importModalVisible" @close="importModalVisible = false">
        <template #header>
          Import your character sheet
        </template>
        <template #content>
          <div class="import-block">
            <textarea v-model="inputString"></textarea>
            <span v-if="showImportError" class="error-message">Failed to import json</span>
            <button @click="importCharacterSheet">Import</button>
          </div>
        </template>
      </Modal>

      <button @click="exportCharacterSheet">Export</button>
      <Modal v-if="exportModalVisible" @close="exportModalVisible = false">
        <template #header>
          Your character sheet as json
        </template>
        <template #content>
          <div class="json-output">
            {{ outputString }}
          </div>
        </template>
      </Modal>
    </div>

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

    <div class="content grid">
      <div class="grid">
        <div class="attributes">Test</div>
        <div class="skills">Test</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
body {
  place-items: baseline;
}
</style>

<style lang="scss" scoped>
input {
  background-color: rgb(222 229 255);
  border: none;
  border-bottom: 1px solid rgb(0 0 0);
  font-size: 16px;
  padding: 4px;

  &:focus,
  &:focus-visible {
    outline-color: rgb(0 120 215);
  }
}

.actions {
  margin-bottom: 32px;
  text-align: right;

  button {
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
}

.heading {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.character-name {
  width: 33%;
  border: 2px solid rgb(0 0 0);
  padding: 8px;
  height: fit-content;
  margin-right: 24px;
}

.character-header-info {
  border: 2px solid rgb(0 0 0);
  padding: 8px;
  width: 66%;
  // display: flex;
  // justify-content: space-between;
  // flex-wrap: wrap;
}

.grid {

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  // grid-auto-rows: minmax(100px, auto);
}

.header-info-block {
  display: flex;
  flex-direction: column;

  &--full {
    width: 100%;
  }

  >span {
    text-align: left;
    font-size: 14px;
  }

  input {
    width: 95%;
  }
}

.content {
  margin-top: 32px;
}

.skills {
  grid-column: 2/4;
}

.json-output {
  background-color: rgb(0, 0, 0);
  // border: 3px solid rgb(0 0 0);
  padding: 16px;
  color: rgb(255 255 255);
  word-break: break-all;
}

.import-block {
  >textarea {
    width: 100%;
  }

  button {
    margin-top: 16px;
  }
}

.error-message {
  color: rgb(175, 0, 0);
  display: block;
}
</style>
