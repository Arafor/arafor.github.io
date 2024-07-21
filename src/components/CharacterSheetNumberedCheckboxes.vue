<script setup lang="ts">
import { computed } from 'vue';
import { InputType, NumberCheckboxesType } from '../models/CharacterSheet'
import StatService from '../services/StatService';

const props = defineProps<{
    total: InputType,
    checked: NumberCheckboxesType,
}>();

const checkboxValues = ['one', 'two', 'three', 'four'];

const totalNumber = computed(() => {
    const totalText = props.total.text;
    if (!StatService.getStatNumberString(totalText)) {
        return 0;
    }

    return StatService.getStatNumber(totalText);
});
</script>

<template>
    <div class="character-sheet-numbered-checkboxes">
        <div>
            <div>
                <input type="text" :disabled="total.locked" :placeholder="total.placeholder" v-model="total.text">
            </div>
            <button @click="total.locked = !total.locked">
                {{ total.locked ? '🔒' : '🔓' }}
            </button>
        </div>
        <div class="numbered-checkboxes">
            <div v-if="totalNumber < 1" class="empty"></div>
            <template v-for="(value, index) in checkboxValues">
                <input v-if="index < totalNumber" :value="value" type="checkbox" v-model="checked.checked">
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.character-sheet-numbered-checkboxes {
    >div {
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
            top: 50%;
            transform: translateY(-50%);

            &:hover {
                opacity: 1;
            }
        }
    }

    .numbered-checkboxes {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0;

        .empty {
            min-height: 19px;
        }
    }
}
</style>