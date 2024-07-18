<script setup lang="ts">
import { ref } from 'vue'
import { CharacterSheet, CharacterSheetType } from '../models/CharacterSheet';
import { isCharacterSheet } from '../models/CharacterSheet.guard';
import Modal from './Modal.vue'

//TODO
// leave check
// Edit character sheet type

const inputString = ref('')
const outputString = ref('')
const importModalVisible = ref(false);
const exportModalVisible = ref(false);
const showImportError = ref(false);

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
      <div class="logo">
        <img v-if="characterSheet.meta.type === CharacterSheetType.DND_5E" src="./../assets/dnd-5e-logo.png"
          alt="Dungeons & Dragons 5th Edition" />
        <img v-if="characterSheet.meta.type === CharacterSheetType.SW_5E" src="./../assets/sw-5e-logo.png"
          alt="Star Wars 5th Edition" />
      </div>
      <div>
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
</style>

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

.character-header-info {
  border: 2px solid rgb(0 0 0);
  padding: 8px;
  width: 66%;
}

.grid {

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
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

.content {
  margin-top: 32px;
}

.skills {
  grid-column: 2/4;
}

.json-output {
  background-color: rgb(222 229 255);
  color: #213547;
  padding: 16px;
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

.logo {
  height: 50px;

  >img {
    height: 100%;
  }
}
</style>
