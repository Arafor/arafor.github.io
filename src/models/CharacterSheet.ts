/** @see {isCharacterSheet} ts-auto-guard:type-guard */
export interface CharacterSheet {
    meta: {
      version: string;
      type: string;
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