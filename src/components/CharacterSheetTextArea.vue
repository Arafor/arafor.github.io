<script setup lang="ts">
import { TextAreaType } from '../models/CharacterSheet'

defineProps<{
    characterSheetTextArea: TextAreaType,
}>();
</script>

<template>
    <div class="character-sheet-textarea">
        <div>
            <textarea :disabled="characterSheetTextArea.locked"
                oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
                v-model="characterSheetTextArea.text"></textarea>
        </div>
        <button v-if="characterSheetTextArea.hasOwnProperty('locked')"
            @click="characterSheetTextArea.locked = !characterSheetTextArea.locked">
            {{ characterSheetTextArea.locked ? '🔒' : '🔓' }}
        </button>
    </div>
</template>

<style lang="scss" scoped>
.character-sheet-textarea {
    position: relative;

    >button {
        position: absolute;
        right: 0;
        width: 24px;
        height: 24px;
        padding: 0;
        background-color: transparent;
        opacity: 0;
        border: none;
        top: 0;

        &:hover {
            opacity: 1;
        }
    }
}
</style>