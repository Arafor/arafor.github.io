<script setup lang="ts">
import { WeaponAttackType } from '../models/CharacterSheet';
import CharacterSheetInput from './CharacterSheetInput.vue';

const props = defineProps<{
    attacks: WeaponAttackType[],
}>();

function addNewAttack() {
    props.attacks.push({
        name: { text: '', locked: false },
        attackBonus: { text: '', locked: false },
        damage: { text: '', locked: false },
    });
}

function removeAttack(attack: WeaponAttackType, index: number) {
    const hasContent = attack.name.text || attack.attackBonus.text || attack.damage.text;
    if (!hasContent || confirm(`Are you sure you want to remove "${attack.name.text}"?`)) {
        props.attacks.splice(index, 1);
    }
}
</script>

<template>
    <div class="attacks">
        <div class="attack-grid names">
            <span>Name</span>
            <span>Attack Bonus</span>
            <span>Damage & Type</span>
        </div>
        <div v-for="(attack, index) in attacks" :key="index" class="attack-grid inputs">
            <CharacterSheetInput :character-sheet-input="attack.name" />
            <CharacterSheetInput :character-sheet-input="attack.attackBonus" />
            <CharacterSheetInput :character-sheet-input="attack.damage" />
            <button v-if="!attack.name.locked && !attack.attackBonus.locked && !attack.damage.locked"
                @click="removeAttack(attack, index)">-</button>
        </div>
        <div class="attack-grid under-text">
            <span>Attacks</span>
            <button @click="addNewAttack">+</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.attacks {
    border: 2px solid rgb(0 0 0);
    padding: 8px;
    padding-bottom: 2px;

    button {
        width: 24px;
        height: 24px;
        padding: 0;
        background-color: transparent;
        border: none;
        right: 0;
    }

    .attack-grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 8px;

        &.names {
            text-align: left;

            span:nth-child(1) {
                grid-column: 1/5;
            }

            span:nth-child(2) {
                grid-column: 5/8;
            }

            span:nth-child(3) {
                grid-column: 8/13;
            }
        }

        &.inputs {
            >div:nth-child(1) {
                grid-column: 1/5;
            }

            >div:nth-child(2) {
                grid-column: 5/8;
            }

            >div:nth-child(3) {
                grid-column: 8/12;
            }

            button {
                grid-column: 12/13;
            }
        }

        &.under-text {
            span {
                grid-column: 2/12;
                font-size: 14px;
            }

            button {
                grid-column: 12/13;
            }
        }
    }
}
</style>