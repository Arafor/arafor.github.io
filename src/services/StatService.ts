export default class StatService {
    static getModifierNumber (modifier: string): number {
        const subtraction = modifier.indexOf('-') > -1;
        const number = Number(modifier.replace(/\D/g, ''));

        return subtraction ? number * -1 : number;
    }
}