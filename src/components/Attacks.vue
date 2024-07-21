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
        <div v-for="(attack, index) in attacks" :key="index" class="attack-grid inputs"
            :class="{ 'with-gap': index < attacks.length - 1, 'first': index === 0 }">
            <CharacterSheetInput class="attack-name" :character-sheet-input="attack.name" />
            <CharacterSheetInput class="attack-bonus" :character-sheet-input="attack.attackBonus" />
            <span v-if="index === 0" class="attack-name">Name</span>
            <span v-if="index === 0" class="attack-bonus">Attack Bonus</span>
            <CharacterSheetInput class="attack-damage" :character-sheet-input="attack.damage" />
            <button v-if="!attack.name.locked && !attack.attackBonus.locked && !attack.damage.locked"
                class="attack-remove" @click="removeAttack(attack, index)">-</button>
            <span v-if="index === 0" class="attack-damage">Damage & Type</span>
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
        column-gap: 8px;
        row-gap: 8px;

        &.first {
            row-gap: 0;
        }

        &.with-gap {
            margin-bottom: 24px;
        }

        &.inputs {
            >div.attack-name {
                grid-column: 1/10;
            }

            >div.attack-bonus {
                grid-column: 10/13;
            }

            >div.attack-damage {
                grid-column: 1/12;
            }

            button.attack-remove {
                grid-column: 12;
            }

            >span.attack-name {
                grid-column: 1/5;
            }

            >span.attack-bonus {
                grid-column: 5/13;
                text-align: right;
            }

            >span.attack-damage {
                grid-column: 1/13;
            }

            >span {
                text-align: left;
                font-size: 14px;
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