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
    };
  }

  export interface InputType {
    text:string;
    locked: boolean;
  }

  export enum CharacterSheetType {
    DND_5E = 'dnd-5e',
    SW_5E = 'sw-5e',
  }