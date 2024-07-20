<script setup lang="ts">
import { CharacterSheetTabs } from '../models/CharacterSheetTabs';

const emit = defineEmits(['changeTab'])

defineProps<{
    activeTab: CharacterSheetTabs,
}>();

function changeTab(tab: CharacterSheetTabs) {
    emit('changeTab', tab);
}
</script>

<template>
    <div class="tab-bar">
        <button v-for="tab in Object.values(CharacterSheetTabs)" :key="tab" :class="{ 'active': activeTab === tab }"
            @click="changeTab(tab)">
            {{ tab }}
        </button>
    </div>
</template>

<style lang="scss" scoped>
.tab-bar {
    margin-top: 32px;
    text-align: left;
    border-bottom: 2px solid rgb(0, 0, 0);

    button {
        margin-right: 8px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

        &.active {
            background-color: rgb(157, 178, 255);
        }
    }
}
</style>