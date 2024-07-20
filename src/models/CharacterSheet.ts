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
      skills: SkillsType;
      savingThrows: SavingThrowsType;
      inspiration: InputType;
      proficiencyBonus: InputType;
      passiveSkills: PassiveSkillsType;
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
