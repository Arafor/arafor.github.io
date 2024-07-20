/*
 * Generated type guards for "CharacterSheet.ts".
 * WARNING: Do not manually change this file.
 */
import { CharacterSheet, InputType, InputTypeWithProficiency, AbilityScoreType, AbilityScoreValueType, SkillsType, SavingThrowsType, PassiveSkillsType, CharacterSheetType } from "./CharacterSheet";

export function isCharacterSheet(obj: unknown): obj is CharacterSheet {
    const typedObj = obj as CharacterSheet
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typedObj["meta"] !== null &&
            typeof typedObj["meta"] === "object" ||
            typeof typedObj["meta"] === "function") &&
        typeof typedObj["meta"]["version"] === "string" &&
        isCharacterSheetType(typedObj["meta"]["type"]) as boolean &&
        (typedObj["data"] !== null &&
            typeof typedObj["data"] === "object" ||
            typeof typedObj["data"] === "function") &&
        isInputType(typedObj["data"]["characterName"]) as boolean &&
        isInputType(typedObj["data"]["species"]) as boolean &&
        isInputType(typedObj["data"]["background"]) as boolean &&
        isInputType(typedObj["data"]["playerName"]) as boolean &&
        Array.isArray(typedObj["data"]["classAndLevel"]) &&
        typedObj["data"]["classAndLevel"].every((e: any) =>
            isInputType(e) as boolean
        ) &&
        isInputType(typedObj["data"]["alignment"]) as boolean &&
        isInputType(typedObj["data"]["experiencePoints"]) as boolean &&
        isAbilityScoreType(typedObj["data"]["abilityScores"]) as boolean &&
        isSkillsType(typedObj["data"]["skills"]) as boolean &&
        isSavingThrowsType(typedObj["data"]["savingThrows"]) as boolean &&
        isInputType(typedObj["data"]["inspiration"]) as boolean &&
        isInputType(typedObj["data"]["proficiencyBonus"]) as boolean &&
        isPassiveSkillsType(typedObj["data"]["passiveSkills"]) as boolean
    )
}

export function isInputType(obj: unknown): obj is InputType {
    const typedObj = obj as InputType
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["text"] === "string" &&
        typeof typedObj["locked"] === "boolean"
    )
}

export function isInputTypeWithProficiency(obj: unknown): obj is InputTypeWithProficiency {
    const typedObj = obj as InputTypeWithProficiency
    return (
        isInputType(typedObj) as boolean &&
        typeof typedObj["proficient"] === "boolean"
    )
}

export function isAbilityScoreType(obj: unknown): obj is AbilityScoreType {
    const typedObj = obj as AbilityScoreType
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        isAbilityScoreValueType(typedObj["strength"]) as boolean &&
        isAbilityScoreValueType(typedObj["dexterity"]) as boolean &&
        isAbilityScoreValueType(typedObj["constitution"]) as boolean &&
        isAbilityScoreValueType(typedObj["intelligence"]) as boolean &&
        isAbilityScoreValueType(typedObj["wisdom"]) as boolean &&
        isAbilityScoreValueType(typedObj["charisma"]) as boolean
    )
}

export function isAbilityScoreValueType(obj: unknown): obj is AbilityScoreValueType {
    const typedObj = obj as AbilityScoreValueType
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        isInputType(typedObj["score"]) as boolean &&
        isInputType(typedObj["modifier"]) as boolean
    )
}

export function isSkillsType(obj: unknown): obj is SkillsType {
    const typedObj = obj as SkillsType
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        isInputTypeWithProficiency(typedObj["acrobatics"]) as boolean &&
        isInputTypeWithProficiency(typedObj["animalHandling"]) as boolean &&
        isInputTypeWithProficiency(typedObj["arcana"]) as boolean &&
        isInputTypeWithProficiency(typedObj["athletics"]) as boolean &&
        isInputTypeWithProficiency(typedObj["deception"]) as boolean &&
        isInputTypeWithProficiency(typedObj["history"]) as boolean &&
        isInputTypeWithProficiency(typedObj["insight"]) as boolean &&
        isInputTypeWithProficiency(typedObj["intimidation"]) as boolean &&
        isInputTypeWithProficiency(typedObj["investigation"]) as boolean &&
        isInputTypeWithProficiency(typedObj["medicine"]) as boolean &&
        isInputTypeWithProficiency(typedObj["nature"]) as boolean &&
        isInputTypeWithProficiency(typedObj["perception"]) as boolean &&
        isInputTypeWithProficiency(typedObj["performance"]) as boolean &&
        isInputTypeWithProficiency(typedObj["persuasion"]) as boolean &&
        isInputTypeWithProficiency(typedObj["religion"]) as boolean &&
        isInputTypeWithProficiency(typedObj["sleightOfHand"]) as boolean &&
        isInputTypeWithProficiency(typedObj["stealth"]) as boolean &&
        isInputTypeWithProficiency(typedObj["survival"]) as boolean
    )
}

export function isSavingThrowsType(obj: unknown): obj is SavingThrowsType {
    const typedObj = obj as SavingThrowsType
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        isInputTypeWithProficiency(typedObj["strength"]) as boolean &&
        isInputTypeWithProficiency(typedObj["dexterity"]) as boolean &&
        isInputTypeWithProficiency(typedObj["constitution"]) as boolean &&
        isInputTypeWithProficiency(typedObj["intelligence"]) as boolean &&
        isInputTypeWithProficiency(typedObj["wisdom"]) as boolean &&
        isInputTypeWithProficiency(typedObj["charisma"]) as boolean
    )
}

export function isPassiveSkillsType(obj: unknown): obj is PassiveSkillsType {
    const typedObj = obj as PassiveSkillsType
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        isInputType(typedObj["acrobatics"]) as boolean &&
        isInputType(typedObj["animalHandling"]) as boolean &&
        isInputType(typedObj["arcana"]) as boolean &&
        isInputType(typedObj["athletics"]) as boolean &&
        isInputType(typedObj["deception"]) as boolean &&
        isInputType(typedObj["history"]) as boolean &&
        isInputType(typedObj["insight"]) as boolean &&
        isInputType(typedObj["intimidation"]) as boolean &&
        isInputType(typedObj["investigation"]) as boolean &&
        isInputType(typedObj["medicine"]) as boolean &&
        isInputType(typedObj["nature"]) as boolean &&
        isInputType(typedObj["perception"]) as boolean &&
        isInputType(typedObj["performance"]) as boolean &&
        isInputType(typedObj["persuasion"]) as boolean &&
        isInputType(typedObj["religion"]) as boolean &&
        isInputType(typedObj["sleightOfHand"]) as boolean &&
        isInputType(typedObj["stealth"]) as boolean &&
        isInputType(typedObj["survival"]) as boolean
    )
}

export function isCharacterSheetType(obj: unknown): obj is CharacterSheetType {
    const typedObj = obj as CharacterSheetType
    return (
        (typedObj === CharacterSheetType.DND_5E ||
            typedObj === CharacterSheetType.SW_5E)
    )
}
