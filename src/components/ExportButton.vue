<script setup lang="ts">
import { ref } from 'vue'
import Modal from './Modal.vue';
import { CharacterSheet } from '../models/CharacterSheet';

const props = defineProps<{
    characterSheet: CharacterSheet,
}>();

const outputString = ref('')
const exportModalVisible = ref(false);

function exportCharacterSheet() {
    outputString.value = JSON.stringify(props.characterSheet);

    exportModalVisible.value = true;
}
</script>

<template>
    <div class="export-button">
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
</template>

<style lang="scss" scoped>
.export-button {
    display: inline;
}

.json-output {
    background-color: rgb(222 229 255);
    color: #213547;
    padding: 16px;
    word-break: break-all;
}
</style>