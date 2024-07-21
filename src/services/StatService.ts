import { CharacterSheetAbility, characterSheetAbilityName, characterSheetAbilityNameShort } from '../models/CharacterSheet';

export default class StatService {
    static getStatNumberString (stat: string): string {
        return stat.replace(/\D/g, '');
    }

    static getStatNumber (stat: string): number {
        return Number(StatService.getStatNumberString(stat));
    }

    static getModifierNumber (modifier: string): number {
        const subtraction = modifier.indexOf('-') > -1;
        const number = StatService.getStatNumber(modifier);

        return subtraction ? number * -1 : number;
    }

    static getModifierString (modifier: number): string {
        return modifier > -1 ? `+${modifier}` : String(modifier);
    }

    static getMatchingAbility (abilityName: string): CharacterSheetAbility | null {
        let found = null;

        Object.entries(characterSheetAbilityName).forEach(([type, name]) => {
            const result = StatService.stringMatchesTypeName(abilityName, type as CharacterSheetAbility, name);
            if (result) {
                found = result;
            }
        });

        Object.entries(characterSheetAbilityNameShort).forEach(([type, name]) => {
            const result = StatService.stringMatchesTypeName(abilityName, type as CharacterSheetAbility, name);
            if (result) {
                found = result;
            }
        });

        return found;
    }

    static stringMatchesTypeName(string: string, type: CharacterSheetAbility, name: string): CharacterSheetAbility | null {
        string = string.toLowerCase();
        string = string.charAt(0).toUpperCase() + string.slice(1);

        return name === string ? type : null;
    }
}