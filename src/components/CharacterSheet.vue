<script setup lang="ts">
import { ref, onMounted, onBeforeMount, computed } from 'vue';
import { CharacterSheet, CharacterSheetAbility, CharacterSheetSkill, skillAbilityMap } from '../models/CharacterSheet';
import { CharacterSheetTabs } from '../models/CharacterSheetTabs';
import EmptyCharacterSheetFactory from '../services/EmptyCharacterSheetFactory';
import StatService from '../services/StatService';
import HeadingActions from './HeadingActions.vue';
import Heading from './Heading.vue';
import CharacterSheetTabBar from './CharacterSheetTabBar.vue';
import AbilityScores from './AbilityScores.vue';
import Stats from './Stats.vue';
import HealthAndAttack from './HealthAndAttack.vue';
import FeaturesAndProficiencies from './FeaturesAndProficiencies.vue';
import Spells from './Spells.vue';
import Equipment from './Equipment.vue';
import CharacterInfo from './CharacterInfo.vue';

//TODO
// Edit character sheet type
// Automate spell stats
// Store sheet data in cookies/session

const emptyCharacterSheetTemplate: CharacterSheet = EmptyCharacterSheetFactory.emptyCharacterSheetTemplate;

const emptyCharacterSheet = ref();
const characterSheet = ref();
const importedCharacterSheet = ref();
const activeTab = ref(CharacterSheetTabs.STATS);

onBeforeMount(() => {
  characterSheet.value = JSON.parse(JSON.stringify(emptyCharacterSheetTemplate));
  setComputedProperties();
  emptyCharacterSheet.value = JSON.parse(JSON.stringify(characterSheet.value));
});

onMounted(() => {
  window.addEventListener('beforeunload', (event) => {
    const sheetString = JSON.stringify(characterSheet.value);
    const emptySheetString = JSON.stringify(emptyCharacterSheet.value);
    const importedSheetString = JSON.stringify(importedCharacterSheet.value);
    if (sheetString === emptySheetString || sheetString === importedSheetString) {
      return;
    }

    const answer = window.confirm('You have unsaved changes, are you sure you want to leave?')
    if (!answer) {
      event.preventDefault();
    }
  });
});

function setImportedCharacterSheet(data: CharacterSheet) {
  characterSheet.value = data;
  importedCharacterSheet.value = JSON.parse(JSON.stringify(data));
  setComputedProperties();
}

/**
 * Creates computed properties that automatically calculate modifiers and provides them as placeholders for inputs
 * Creates computed properties for values, providing input text or as a fallback using placeholder value
 */
function setComputedProperties() {
  // Proficiency bonus
  characterSheet.value.data.proficiencyBonus.placeholder = '+2';
  characterSheet.value.data.proficiencyBonus.value = computed(() => {
    return characterSheet.value.data.proficiencyBonus.text || characterSheet.value.data.proficiencyBonus.placeholder;
  });

  // Initiative
  characterSheet.value.data.initiative.placeholder = computed(() => {
    return characterSheet.value.data.abilityScores.dexterity.modifier.value;
  });
  characterSheet.value.data.initiative.value = computed(() => {
    return characterSheet.value.data.initiative.text || characterSheet.value.data.initiative.placeholder;
  });

  // Armor Class
  characterSheet.value.data.armorClass.placeholder = computed(() => {
    const modifierText = characterSheet.value.data.abilityScores.dexterity.modifier.value;
    if (!StatService.getStatNumberString(modifierText)) {
      return '';
    }

    const modifier = StatService.getModifierNumber(modifierText);
    return String(10 + modifier);
  });
  characterSheet.value.data.armorClass.value = computed(() => {
    return characterSheet.value.data.armorClass.text || characterSheet.value.data.armorClass.placeholder;
  });

  // Spell Save DC
  characterSheet.value.data.spellSaveDc.placeholder = computed(() => {
    const ability = StatService.getMatchingAbility(characterSheet.value.data.spellCastingAbility.text);
    if (!ability) {
      return '';
    }

    const modifierText = characterSheet.value.data.abilityScores[ability].modifier.value;
    if (!StatService.getStatNumberString(modifierText)) {
      return '';
    }

    const modifier = StatService.getModifierNumber(modifierText);
    const proficiencyBonus = StatService.getModifierNumber(characterSheet.value.data.proficiencyBonus.value);

    return String(8 + modifier + proficiencyBonus);
  });
  characterSheet.value.data.spellSaveDc.value = computed(() => {
    return characterSheet.value.data.spellSaveDc.text || characterSheet.value.data.spellSaveDc.placeholder;
  });

  // Spell Attack Bonus
  characterSheet.value.data.spellAttackBonus.placeholder = computed(() => {
    const ability = StatService.getMatchingAbility(characterSheet.value.data.spellCastingAbility.text);
    if (!ability) {
      return '';
    }

    const modifierText = characterSheet.value.data.abilityScores[ability].modifier.value;
    if (!StatService.getStatNumberString(modifierText)) {
      return '';
    }

    const modifier = StatService.getModifierNumber(modifierText);
    const proficiencyBonus = StatService.getModifierNumber(characterSheet.value.data.proficiencyBonus.value);

    return StatService.getModifierString(modifier + proficiencyBonus);
  });
  characterSheet.value.data.spellSaveDc.value = computed(() => {
    return characterSheet.value.data.spellSaveDc.text || characterSheet.value.data.spellSaveDc.placeholder;
  });

  // All Abilities
  Object.values(CharacterSheetAbility).forEach((ability) => {
    // Ability Modifiers
    characterSheet.value.data.abilityScores[ability].modifier.placeholder = computed(() => {
      const statText = characterSheet.value.data.abilityScores[ability].score.text;
      if (!StatService.getStatNumberString(statText)) {
        return '';
      }

      const stat = StatService.getStatNumber(statText);
      const result = Math.floor((stat - 10) / 2);

      return StatService.getModifierString(result);
    });

    characterSheet.value.data.abilityScores[ability].modifier.value = computed(() => {
      return characterSheet.value.data.abilityScores[ability].modifier.text || characterSheet.value.data.abilityScores[ability].modifier.placeholder;
    });

    // Saving Throws
    characterSheet.value.data.savingThrows[ability].placeholder = computed(() => {
      const modifierText = characterSheet.value.data.abilityScores[ability].modifier.value;
      if (!StatService.getStatNumberString(modifierText)) {
        return '';
      }

      const modifier = StatService.getModifierNumber(modifierText);
      const proficiencyBonus = StatService.getModifierNumber(characterSheet.value.data.proficiencyBonus.value);
      const result = modifier + (characterSheet.value.data.savingThrows[ability].proficient ? proficiencyBonus : 0);

      return StatService.getModifierString(result);
    });

    characterSheet.value.data.savingThrows[ability].value = computed(() => {
      return characterSheet.value.data.savingThrows[ability].text || characterSheet.value.data.savingThrows[ability].placeholder;
    });
  });

  // All Skills
  Object.values(CharacterSheetSkill).forEach((skill) => {
    // Skill Modifiers
    characterSheet.value.data.skills[skill].placeholder = computed(() => {
      const ability = skillAbilityMap[skill]
      const modifierText = characterSheet.value.data.abilityScores[ability].modifier.value;
      if (!StatService.getStatNumberString(modifierText)) {
        return '';
      }

      const modifier = StatService.getModifierNumber(modifierText);
      const proficiencyBonus = StatService.getModifierNumber(characterSheet.value.data.proficiencyBonus.value);
      const result = modifier + (characterSheet.value.data.skills[skill].proficient ? proficiencyBonus : 0);

      return StatService.getModifierString(result);
    });

    characterSheet.value.data.skills[skill].value = computed(() => {
      return characterSheet.value.data.skills[skill].text || characterSheet.value.data.skills[skill].placeholder;
    });

    // Passive Skills
    characterSheet.value.data.passiveSkills[skill].placeholder = computed(() => {
      const modifierText = characterSheet.value.data.skills[skill].value;
      if (!StatService.getStatNumberString(modifierText)) {
        return '';
      }

      const modifier = StatService.getModifierNumber(modifierText);
      const result = 10 + modifier;

      return StatService.getModifierString(result);
    });
  });
}

function changeTab(tab: CharacterSheetTabs) {
  activeTab.value = tab;
}
</script>

<template>
  <div class="page">
    <HeadingActions :characterSheet="characterSheet" @imported="setImportedCharacterSheet" />

    <Heading :characterSheet="characterSheet" :activeTab="activeTab" />

    <CharacterSheetTabBar :activeTab="activeTab" @changeTab="changeTab" />

    <div v-if="activeTab === CharacterSheetTabs.STATS" class="content">
      <AbilityScores :ability-scores="characterSheet.data.abilityScores" />

      <div class="grid">
        <Stats :character-sheet="characterSheet" />
        <HealthAndAttack :character-sheet="characterSheet" />
        <FeaturesAndProficiencies :character-sheet="characterSheet" />
      </div>
    </div>

    <div v-if="activeTab === CharacterSheetTabs.SPELLS" class="content">
      <Spells :character-sheet="characterSheet" />
    </div>

    <div v-if="activeTab === CharacterSheetTabs.EQUIPMENT" class="content">
      <Equipment :character-sheet="characterSheet" />
    </div>

    <div v-if="activeTab === CharacterSheetTabs.CHARACTER" class="content">
      <CharacterInfo :character-sheet="characterSheet" />
    </div>
  </div>
</template>

<style lang="scss">
body {
  place-items: baseline;
  display: block;
}

:root {
  background-color: #ffffff;
  color: #213547;
}

textarea,
button,
input {
  background-color: rgb(222 229 255);
  color: #213547;
}

input,
textarea {
  border: none;
  border-bottom: 1px solid rgb(0 0 0);
  font-size: 16px;
  padding: 4px !important;
  padding-block: 0;
  padding-inline: 0;
  width: calc(100% - 8px);

  &:focus,
  &:focus-visible {
    outline-color: rgb(0 120 215);
  }

  &:disabled {
    background-color: rgb(252, 244, 230);
  }
}

button {
  &:hover {
    border-color: rgb(0 120 215);
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
</style>

<style lang="scss" scoped>
.page {
  max-width: 1280px;
  width: 90vw;

  .content {
    margin-top: 32px;
  }
}
</style>
