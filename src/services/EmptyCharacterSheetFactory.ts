import { CharacterSheet, CharacterSheetType, InputType, InputTypeWithProficiency, CheckboxType, CantripList, SpellList } from '../models/CharacterSheet';

export default class EmptyCharacterSheetFactory {
  static currentVersion = '0.0.1';

  static inputType: InputType = { text: '', locked: false };
  static inputTypeWithProficiency: InputTypeWithProficiency = { proficient: false, ...EmptyCharacterSheetFactory.inputType };
  static checkboxType: CheckboxType = { checked: false };
  static cantripList: CantripList = { list: [] };
  static spellList: SpellList = { spellSlots: {total: EmptyCharacterSheetFactory.inputType, used: EmptyCharacterSheetFactory.inputType}, list: [] };

  static emptyCharacterSheetTemplate: CharacterSheet = {
    meta: {
      version: EmptyCharacterSheetFactory.currentVersion,
      type: CharacterSheetType.DND_5E
    },
    data: {
      characterName: EmptyCharacterSheetFactory.inputType,
      species: EmptyCharacterSheetFactory.inputType,
      background: EmptyCharacterSheetFactory.inputType,
      playerName: EmptyCharacterSheetFactory.inputType,
      classAndLevel: [EmptyCharacterSheetFactory.inputType],
      alignment: EmptyCharacterSheetFactory.inputType,
      experiencePoints: EmptyCharacterSheetFactory.inputType,
      abilityScores: {
        strength: { score: EmptyCharacterSheetFactory.inputType, modifier: EmptyCharacterSheetFactory.inputType,},
        dexterity: { score: EmptyCharacterSheetFactory.inputType, modifier: EmptyCharacterSheetFactory.inputType,},
        constitution: { score: EmptyCharacterSheetFactory.inputType, modifier: EmptyCharacterSheetFactory.inputType,},
        intelligence: { score: EmptyCharacterSheetFactory.inputType, modifier: EmptyCharacterSheetFactory.inputType,},
        wisdom: { score: EmptyCharacterSheetFactory.inputType, modifier: EmptyCharacterSheetFactory.inputType,},
        charisma: { score: EmptyCharacterSheetFactory.inputType, modifier: EmptyCharacterSheetFactory.inputType,},
      },
      savingThrows: {
        strength: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        dexterity: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        constitution: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        intelligence: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        wisdom: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        charisma: EmptyCharacterSheetFactory.inputTypeWithProficiency,
      },
      skills: {
        acrobatics: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        animalHandling: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        arcana: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        athletics: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        deception: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        history: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        insight: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        intimidation: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        investigation: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        medicine: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        nature: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        perception: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        performance: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        persuasion: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        religion: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        sleightOfHand: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        stealth: EmptyCharacterSheetFactory.inputTypeWithProficiency,
        survival: EmptyCharacterSheetFactory.inputTypeWithProficiency,
      },
      passiveSkills: {
        acrobatics: EmptyCharacterSheetFactory.inputType,
        animalHandling: EmptyCharacterSheetFactory.inputType,
        arcana: EmptyCharacterSheetFactory.inputType,
        athletics: EmptyCharacterSheetFactory.inputType,
        deception: EmptyCharacterSheetFactory.inputType,
        history: EmptyCharacterSheetFactory.inputType,
        insight: EmptyCharacterSheetFactory.inputType,
        intimidation: EmptyCharacterSheetFactory.inputType,
        investigation: EmptyCharacterSheetFactory.inputType,
        medicine: EmptyCharacterSheetFactory.inputType,
        nature: EmptyCharacterSheetFactory.inputType,
        perception: EmptyCharacterSheetFactory.inputType,
        performance: EmptyCharacterSheetFactory.inputType,
        persuasion: EmptyCharacterSheetFactory.inputType,
        religion: EmptyCharacterSheetFactory.inputType,
        sleightOfHand: EmptyCharacterSheetFactory.inputType,
        stealth: EmptyCharacterSheetFactory.inputType,
        survival: EmptyCharacterSheetFactory.inputType,
      },
      inspiration: EmptyCharacterSheetFactory.inputType,
      proficiencyBonus: EmptyCharacterSheetFactory.inputType,
      armorClass: EmptyCharacterSheetFactory.inputType,
      initiative: EmptyCharacterSheetFactory.inputType,
      speed: EmptyCharacterSheetFactory.inputType,
      hitPoints: {
        maximum: EmptyCharacterSheetFactory.inputType,
        current: EmptyCharacterSheetFactory.inputType,
        temporary: EmptyCharacterSheetFactory.inputType,
      },
      hitDice: {
        total: EmptyCharacterSheetFactory.inputType,
        current: EmptyCharacterSheetFactory.inputType,
      },
      deathSaves: {
        success: {
          first: EmptyCharacterSheetFactory.checkboxType,
          second: EmptyCharacterSheetFactory.checkboxType,
          third: EmptyCharacterSheetFactory.checkboxType,
        },
        fail: {
          first: EmptyCharacterSheetFactory.checkboxType,
          second: EmptyCharacterSheetFactory.checkboxType,
          third: EmptyCharacterSheetFactory.checkboxType,
        },
      },
      attacks: [],
      otherProficiencies: {
        languages: [],
        weapons: [],
        armor: [],
        tools: [],
        other: [],
      },
      features: [],
      traits: [],
      spellCastingAbility: EmptyCharacterSheetFactory.inputType,
      spellSaveDc: EmptyCharacterSheetFactory.inputType,
      spellAttackBonus: EmptyCharacterSheetFactory.inputType,
      spells: {
        cantrips: EmptyCharacterSheetFactory.cantripList,
        first: EmptyCharacterSheetFactory.spellList,
        second: EmptyCharacterSheetFactory.spellList,
        third: EmptyCharacterSheetFactory.spellList,
        fourth: EmptyCharacterSheetFactory.spellList,
        fifth: EmptyCharacterSheetFactory.spellList,
        sixth: EmptyCharacterSheetFactory.spellList,
        seventh: EmptyCharacterSheetFactory.spellList,
        eighth: EmptyCharacterSheetFactory.spellList,
        ninth: EmptyCharacterSheetFactory.spellList,
      },
      money: {
        copper: EmptyCharacterSheetFactory.inputType,
        silver: EmptyCharacterSheetFactory.inputType,
        electrum: EmptyCharacterSheetFactory.inputType,
        gold: EmptyCharacterSheetFactory.inputType,
        platinum: EmptyCharacterSheetFactory.inputType,
      },
      equipment: [],
      consumables: [],
      treasure: [],
      age: EmptyCharacterSheetFactory.inputType,
      height: EmptyCharacterSheetFactory.inputType,
      weight: EmptyCharacterSheetFactory.inputType,
      eyes: EmptyCharacterSheetFactory.inputType,
      skin: EmptyCharacterSheetFactory.inputType,
      hair: EmptyCharacterSheetFactory.inputType,
      personalityTraits: EmptyCharacterSheetFactory.inputType,
      ideals: EmptyCharacterSheetFactory.inputType,
      bonds: EmptyCharacterSheetFactory.inputType,
      flaws: EmptyCharacterSheetFactory.inputType,
      backstory: EmptyCharacterSheetFactory.inputType,
      appearance: EmptyCharacterSheetFactory.inputType,
      allies: EmptyCharacterSheetFactory.inputType,
    },
  }

  static getInputType() {
    return JSON.parse(JSON.stringify(EmptyCharacterSheetFactory.inputType));
  }

  static getInputTypeWithProficiency() {
    return JSON.parse(JSON.stringify(EmptyCharacterSheetFactory.inputTypeWithProficiency));
  }
}