<script setup lang="ts">
import { ref } from 'vue'
import { isCharacterSheet } from '../models/CharacterSheet.guard';
import Modal from './Modal.vue'

const emit = defineEmits(['imported'])

const importModalVisible = ref(false);
const inputString = ref('')
const showImportError = ref(false);

function handleImport() {
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

    emit('imported', importedData)

    importModalVisible.value = false;
}
</script>

<template>
    <div class="import-button">
        <button @click="importModalVisible = true">Import</button>
        <Modal v-if="importModalVisible" @close="importModalVisible = false">
            <template #header>
                Import your character sheet
            </template>
            <template #content>
                <div class="import-block">
                    <textarea v-model="inputString"></textarea>
                    <span v-if="showImportError" class="error-message">Failed to import json</span>
                    <button @click="handleImport">Import</button>
                </div>
            </template>
        </Modal>
    </div>
</template>

<style lang="scss" scoped>
.import-button {
    display: inline;

    >button {
        margin-right: 16px;
    }
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