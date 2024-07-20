<script setup lang="ts">
import { CheckboxType } from '../models/CharacterSheet'

defineProps<{
    characterSheetCheckbox: CheckboxType,
}>();
</script>

<template>
    <div class="character-sheet-checkbox">
        <input type="checkbox" v-model="characterSheetCheckbox.checked">
    </div>
</template>

<style lang="scss" scoped></style>