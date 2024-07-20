<script setup lang="ts">
import { CharacterSheet } from '../models/CharacterSheet';
import LanguageProficiencies from './LanguageProficiencies.vue';
import WeaponProficiencies from './WeaponProficiencies.vue';
import ArmorProficiencies from './ArmorProficiencies.vue';
import ToolProficiencies from './ToolProficiencies.vue';
import OtherProficiencies from './OtherProficiencies.vue';
import Features from './Features.vue';
import Traits from './Traits.vue';

defineProps<{
    characterSheet: CharacterSheet,
}>();

</script>

<template>
    <div>
        <LanguageProficiencies :languages="characterSheet.data.otherProficiencies.languages" />
        <WeaponProficiencies :weapons="characterSheet.data.otherProficiencies.weapons" />
        <ArmorProficiencies :armor="characterSheet.data.otherProficiencies.armor" />
        <ToolProficiencies :tools="characterSheet.data.otherProficiencies.tools" />
        <OtherProficiencies :other="characterSheet.data.otherProficiencies.other" />
        <Features :features="characterSheet.data.features" />
        <Traits :traits="characterSheet.data.traits" />
    </div>
</template>