<script setup lang="ts">
import { ref } from 'vue'
import { isCharacterSheet } from '../models/CharacterSheet.guard';
import Modal from './Modal.vue'

const emit = defineEmits(['imported'])

const importModalVisible = ref(false);
const inputString = ref('')
const fileString = ref('')
const importErrors = ref({
    string: [] as string[],
    file: [] as string[],
});

function handleImport(data: string, type: string) {
    if (type !== 'string' && type !== 'file') return;
    importErrors.value[type] = [];

    let importedData;
    try {
        console.log(data);
        importedData = JSON.parse(data);
    } catch {
        console.log('invalid json');
        importErrors.value[type].push('Failed to parse json');
        return;
    }

    if (!isCharacterSheet(importedData)) {
        console.log('invalid character sheet');
        importErrors.value[type].push('Json does not match character sheet structure');
        return;
    }

    emit('imported', importedData)

    importModalVisible.value = false;
}

async function handleFileUpload($event: Event) {
    importErrors.value.file = [];

    const target = $event.target as HTMLInputElement;
    if (!target || !target.files) {
        importErrors.value.file.push('Failed to read file');
        return;
    }

    const blob = target.files[0];
    if (blob.type !== 'application/json') {
        importErrors.value.file.push('File is not json');
        return;
    }

    const text = await blob.text();
    fileString.value = text;
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
                    <h4>From json string</h4>
                    <textarea v-model="inputString"></textarea>
                    <span v-if="importErrors.string.length" class="error-message">{{ `${importErrors.string.join('\n')}`
                        }}</span>
                    <button @click="handleImport(inputString, 'string')">Import</button>

                    <h4>From json file</h4>
                    <input type="file" accept="application/json" @change="handleFileUpload">
                    <span v-if="importErrors.file.length" class="error-message">{{ `${importErrors.file.join('\n')}`
                        }}</span>
                    <button @click="handleImport(fileString, 'file')">Import</button>
                </div>
            </template>
        </Modal>
    </div>
</template>

<style lang="scss" scoped>
input[type="file"] {
    width: 100%;
}

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

    h4 {
        margin-top: 48px;

        &:first-child {
            margin-top: 0;
        }
    }
}

.error-message {
    color: rgb(175, 0, 0);
    display: block;
}
</style>