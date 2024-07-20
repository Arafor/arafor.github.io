/** @see {isCharacterSheet} ts-auto-guard:type-guard */
export interface CharacterSheet {
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