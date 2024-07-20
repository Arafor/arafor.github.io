<script setup lang="ts">
import { CharacterSheet } from '../models/CharacterSheet';
import CharacterSheetInputArray from './CharacterSheetInputArray.vue';

defineProps<{
    characterSheet: CharacterSheet,
}>();
</script>

<template>
    <div class="spells grid">
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
    text-align: right;
}
</style>

<style lang="scss" scoped>
.spell-column {
    border: 2px solid rgb(0 0 0);
    padding: 8px;
    padding-bottom: 2px;

    >span {
        font-size: 14px;
    }
}
</style>