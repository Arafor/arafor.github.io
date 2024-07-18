/** @see {isCharacterSheet} ts-auto-guard:type-guard */
export interface CharacterSheet {
    meta: {
      version: string;
      type: CharacterSheetType;
    };
    data: {
      characterName: string;
      classAndLevel: string;
      background: string;
      playerName: string;
      race: string;
      alignment: string;
      experiencePoints: string;
    };
  }

  export enum CharacterSheetType {
    DND_5E = 'dnd-5e',
    SW_5E = 'sw-5e',
  }