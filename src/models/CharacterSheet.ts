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
    };
  }

  export interface InputType {
    text:string;
    locked: boolean;
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

  export enum CharacterSheetType {
    DND_5E = 'dnd-5e',
    SW_5E = 'sw-5e',
  }