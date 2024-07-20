/** @see {isCharacterSheet} ts-auto-guard:type-guard */
export interface CharacterSheet {
  test?: any,
    meta: {
      version: string;
      type: CharacterSheetType;
    };
    data: {
      characterName: InputType;
      species: InputType;
      background: InputType;
      playerName: InputType;
      classAndLevel: InputType[];
      alignment: InputType;
      experiencePoints: InputType;
      abilityScores: AbilityScoreType;
      savingThrows: SavingThrowsType;
      skills: SkillsType;
      passiveSkills: PassiveSkillsType;
      inspiration: InputType;
      proficiencyBonus: InputType;
      armorClass: InputType;
      initiative: InputType;
      speed: InputType;
      hitPoints: {
        maximum: InputType;
        current: InputType;
        temporary: InputType;
      };
      hitDice: {
        total: InputType;
        current: InputType;
      };
      deathSaves: {
        success: {
          first: InputType;
          second: InputType;
          third: InputType;
        };
        fail: {
          first: InputType;
          second: InputType;
          third: InputType;
        };
      };
      attacks: WeaponAttackType[];
      otherProficiencies: {
        languages: InputType[];
        weapons: InputType[];
        armor: InputType[];
        tools: InputType[];
        other: InputType[];
      };
      features: InputType[];
      traits: InputType[];
    };
  }

  export interface InputType {
    text:string;
    locked: boolean;
    proficient?: boolean;
    placeholder?: string;//TODO
    value?: string;//TODO
  }

  export interface InputTypeWithProficiency extends InputType {
    proficient: boolean;
  }

  export interface AbilityScoreType {
    strength: AbilityScoreValueType;
    dexterity: AbilityScoreValueType;
    constitution: AbilityScoreValueType;
    intelligence: AbilityScoreValueType;
    wisdom: AbilityScoreValueType;
    charisma: AbilityScoreValueType;
  }

  export interface AbilityScoreValueType {
    score: InputType;
    modifier: InputType;
  }

  export interface SkillsType {
    acrobatics: InputTypeWithProficiency;
    animalHandling: InputTypeWithProficiency;
    arcana: InputTypeWithProficiency;
    athletics: InputTypeWithProficiency;
    deception: InputTypeWithProficiency;
    history: InputTypeWithProficiency;
    insight: InputTypeWithProficiency;
    intimidation: InputTypeWithProficiency;
    investigation: InputTypeWithProficiency;
    medicine: InputTypeWithProficiency;
    nature: InputTypeWithProficiency;
    perception: InputTypeWithProficiency;
    performance: InputTypeWithProficiency;
    persuasion: InputTypeWithProficiency;
    religion: InputTypeWithProficiency;
    sleightOfHand: InputTypeWithProficiency;
    stealth: InputTypeWithProficiency;
    survival: InputTypeWithProficiency;
  }

  export interface SavingThrowsType {
    strength: InputTypeWithProficiency;
    dexterity: InputTypeWithProficiency;
    constitution: InputTypeWithProficiency;
    intelligence: InputTypeWithProficiency;
    wisdom: InputTypeWithProficiency;
    charisma: InputTypeWithProficiency;
  }

  export interface PassiveSkillsType {
    acrobatics: InputType;
    animalHandling: InputType;
    arcana: InputType;
    athletics: InputType;
    deception: InputType;
    history: InputType;
    insight: InputType;
    intimidation: InputType;
    investigation: InputType;
    medicine: InputType;
    nature: InputType;
    perception: InputType;
    performance: InputType;
    persuasion: InputType;
    religion: InputType;
    sleightOfHand: InputType;
    stealth: InputType;
    survival: InputType;
  }

  export enum CharacterSheetType {
    DND_5E = 'dnd-5e',
    SW_5E = 'sw-5e',
  }

  export enum CharacterSheetAbility {
    STRENGTH = 'strength',
    DEXTERITY = 'dexterity',
    CONSTITUTION = 'constitution',
    WISDOM = 'wisdom',
    INTELLIGENCE = 'intelligence',
    CHARISMA = 'charisma',
  }

  export const characterSheetAbilityName = {
    [CharacterSheetAbility.STRENGTH]: 'Strength',
    [CharacterSheetAbility.DEXTERITY]: 'Dexterity',
    [CharacterSheetAbility.CONSTITUTION]: 'Constitution',
    [CharacterSheetAbility.WISDOM]: 'Wisdom',
    [CharacterSheetAbility.INTELLIGENCE]: 'Intelligence',
    [CharacterSheetAbility.CHARISMA]: 'Charisma',
  }

  export enum CharacterSheetSkill {
    ACROBATICS = 'acrobatics',
    ANIMAL_HANDLING = 'animalHandling',
    ARCANA = 'arcana',
    ATHLETICS = 'athletics',
    DECEPTION = 'deception',
    HISTORY = 'history',
    INSIGHT = 'insight',
    INTIMIDATION = 'intimidation',
    INVESTIGATION = 'investigation',
    MEDICINE = 'medicine',
    NATURE = 'nature',
    PERCEPTION = 'perception',
    PERFORMANCE = 'performance',
    PERSUASION = 'persuasion',
    RELIGION = 'religion',
    SLEIGHT_OF_HAND = 'sleightOfHand',
    STEALTH = 'stealth',
    SURVIVAL = 'survival',
  }

  export const characterSheetSkillName = {
    [CharacterSheetSkill.ACROBATICS]: 'Acrobatics',
    [CharacterSheetSkill.ANIMAL_HANDLING]: 'Animal Handling',
    [CharacterSheetSkill.ARCANA]: 'Arcana',
    [CharacterSheetSkill.ATHLETICS]: 'Athletics',
    [CharacterSheetSkill.DECEPTION]: 'Deception',
    [CharacterSheetSkill.HISTORY]: 'History',
    [CharacterSheetSkill.INSIGHT]: 'Insight',
    [CharacterSheetSkill.INTIMIDATION]: 'Intimidation',
    [CharacterSheetSkill.INVESTIGATION]: 'Investigation',
    [CharacterSheetSkill.MEDICINE]: 'Medicine',
    [CharacterSheetSkill.NATURE]: 'Nature',
    [CharacterSheetSkill.PERCEPTION]: 'Perception',
    [CharacterSheetSkill.PERFORMANCE]: 'Performance',
    [CharacterSheetSkill.PERSUASION]: 'Persuasion',
    [CharacterSheetSkill.RELIGION]: 'Religion',
    [CharacterSheetSkill.SLEIGHT_OF_HAND]: 'Sleight of Hand',
    [CharacterSheetSkill.STEALTH]: 'Stealth',
    [CharacterSheetSkill.SURVIVAL]: 'Survival',
  }

  export const skillAbilityMap = {
    [CharacterSheetSkill.ACROBATICS]: CharacterSheetAbility.DEXTERITY,
    [CharacterSheetSkill.ANIMAL_HANDLING]: CharacterSheetAbility.WISDOM,
    [CharacterSheetSkill.ARCANA]: CharacterSheetAbility.INTELLIGENCE,
    [CharacterSheetSkill.ATHLETICS]: CharacterSheetAbility.STRENGTH,
    [CharacterSheetSkill.DECEPTION]: CharacterSheetAbility.CHARISMA,
    [CharacterSheetSkill.HISTORY]: CharacterSheetAbility.INTELLIGENCE,
    [CharacterSheetSkill.INSIGHT]: CharacterSheetAbility.WISDOM,
    [CharacterSheetSkill.INTIMIDATION]: CharacterSheetAbility.CHARISMA,
    [CharacterSheetSkill.INVESTIGATION]: CharacterSheetAbility.INTELLIGENCE,
    [CharacterSheetSkill.MEDICINE]: CharacterSheetAbility.WISDOM,
    [CharacterSheetSkill.NATURE]: CharacterSheetAbility.INTELLIGENCE,
    [CharacterSheetSkill.PERCEPTION]: CharacterSheetAbility.WISDOM,
    [CharacterSheetSkill.PERFORMANCE]: CharacterSheetAbility.CHARISMA,
    [CharacterSheetSkill.PERSUASION]: CharacterSheetAbility.CHARISMA,
    [CharacterSheetSkill.RELIGION]: CharacterSheetAbility.INTELLIGENCE,
    [CharacterSheetSkill.SLEIGHT_OF_HAND]: CharacterSheetAbility.DEXTERITY,
    [CharacterSheetSkill.STEALTH]: CharacterSheetAbility.DEXTERITY,
    [CharacterSheetSkill.SURVIVAL]: CharacterSheetAbility.WISDOM,
  }

  export interface WeaponAttackType
  {
    name: InputType;
    attackBonus: InputType;
    damage: InputType;
  }
