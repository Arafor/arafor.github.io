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
}