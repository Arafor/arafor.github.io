<script setup lang="ts">
import { CharacterSheet } from '../models/CharacterSheet';
import CharacterSheetNumberedCheckboxes from './CharacterSheetNumberedCheckboxes.vue';
import CharacterSheetInputArray from './CharacterSheetInputArray.vue';

defineProps<{
    characterSheet: CharacterSheet,
}>();
</script>

<template>
    <div class="spells grid">
        <div class="spell-slots">
            <div>
                <CharacterSheetNumberedCheckboxes :total="characterSheet.data.spells.first.spellSlots.total"
                    :checked="characterSheet.data.spells.first.spellSlots.used" />
                <span>1st Level</span>
            </div>
            <div>
                <CharacterSheetNumberedCheckboxes :total="characterSheet.data.spells.second.spellSlots.total"
                    :checked="characterSheet.data.spells.second.spellSlots.used" />
                <span>2nd Level</span>
            </div>
            <div>
                <CharacterSheetNumberedCheckboxes :total="characterSheet.data.spells.third.spellSlots.total"
                    :checked="characterSheet.data.spells.third.spellSlots.used" />
                <span>3rd Level</span>
            </div>
            <div>
                <CharacterSheetNumberedCheckboxes :total="characterSheet.data.spells.fourth.spellSlots.total"
                    :checked="characterSheet.data.spells.fourth.spellSlots.used" />
                <span>4th Level</span>
            </div>
            <div>
                <CharacterSheetNumberedCheckboxes :total="characterSheet.data.spells.fifth.spellSlots.total"
                    :checked="characterSheet.data.spells.fifth.spellSlots.used" />
                <span>5th Level</span>
            </div>
            <div>
                <CharacterSheetNumberedCheckboxes :total="characterSheet.data.spells.sixth.spellSlots.total"
                    :checked="characterSheet.data.spells.sixth.spellSlots.used" />
                <span>6th Level</span>
            </div>
            <div>
                <CharacterSheetNumberedCheckboxes :total="characterSheet.data.spells.seventh.spellSlots.total"
                    :checked="characterSheet.data.spells.seventh.spellSlots.used" />
                <span>7th Level</span>
            </div>
            <div>
                <CharacterSheetNumberedCheckboxes :total="characterSheet.data.spells.eighth.spellSlots.total"
                    :checked="characterSheet.data.spells.eighth.spellSlots.used" />
                <span>8th Level</span>
            </div>
            <div>
                <CharacterSheetNumberedCheckboxes :total="characterSheet.data.spells.ninth.spellSlots.total"
                    :checked="characterSheet.data.spells.ninth.spellSlots.used" />
                <span>9th Level</span>
            </div>
        </div>
        <div>
            <div class="spell-column">
                <CharacterSheetInputArray :characterSheetInputArray="characterSheet.data.spells.cantrips.list"
                    :minAmount="0" />
                <span>Cantrips</span>
            </div>
        </div>
        <div>
            <div class="spell-column">
                <CharacterSheetInputArray :characterSheetInputArray="characterSheet.data.spells.first.list"
                    :minAmount="0" :withProficiency="true" />
                <span>1st Level Spells</span>
            </div>
        </div>
        <div>
            <div class="spell-column">
                <CharacterSheetInputArray :characterSheetInputArray="characterSheet.data.spells.second.list"
                    :minAmount="0" :withProficiency="true" />
                <span>2nd Level Spells</span>
            </div>
        </div>
        <div>
            <div class="spell-column">
                <CharacterSheetInputArray :characterSheetInputArray="characterSheet.data.spells.third.list"
                    :minAmount="0" :withProficiency="true" />
                <span>3rd Level Spells</span>
            </div>
        </div>
        <div>
            <div class="spell-column">
                <CharacterSheetInputArray :characterSheetInputArray="characterSheet.data.spells.fourth.list"
                    :minAmount="0" :withProficiency="true" />
                <span>4th Level Spells</span>
            </div>
        </div>
        <div>
            <div class="spell-column">
                <CharacterSheetInputArray :characterSheetInputArray="characterSheet.data.spells.fifth.list"
                    :minAmount="0" :withProficiency="true" />
                <span>5th Level Spells</span>
            </div>
        </div>
        <div>
            <div class="spell-column">
                <CharacterSheetInputArray :characterSheetInputArray="characterSheet.data.spells.sixth.list"
                    :minAmount="0" :withProficiency="true" />
                <span>6th Level Spells</span>
            </div>
        </div>
        <div>
            <div class="spell-column">
                <CharacterSheetInputArray :characterSheetInputArray="characterSheet.data.spells.seventh.list"
                    :minAmount="0" :withProficiency="true" />
                <span>7th Level Spells</span>
            </div>
        </div>
        <div>
            <div class="spell-column">
                <CharacterSheetInputArray :characterSheetInputArray="characterSheet.data.spells.eighth.list"
                    :minAmount="0" :withProficiency="true" />
                <span>8th Level Spells</span>
            </div>
        </div>
        <div>
            <div class="spell-column">
                <CharacterSheetInputArray :characterSheetInputArray="characterSheet.data.spells.ninth.list"
                    :minAmount="0" :withProficiency="true" />
                <span>9th Level Spells</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.spells .character-sheet-input-array .remove {
    margin-left: auto;
}
</style>

<style lang="scss" scoped>
.spell-slots {
    grid-column: 1/4;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    gap: 8px;
    margin-bottom: 8px;

    >div {
        border: 2px solid rgb(0 0 0);
        padding: 8px 8px 2px;

        >span {
            font-size: 14px;
        }
    }
}

.spell-column {
    border: 2px solid rgb(0 0 0);
    padding: 8px;
    padding-bottom: 2px;

    >span {
        font-size: 14px;
    }
}
</style>