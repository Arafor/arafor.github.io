/*
 * Generated type guards for "CharacterSheet.ts".
 * WARNING: Do not manually change this file.
 */
import { CharacterSheet, InputType, InputTypeWithProficiency, TextAreaType, CheckboxType, AbilityScoreType, AbilityScoreValueType, SkillsType, SavingThrowsType, PassiveSkillsType, CharacterSheetType, CharacterSheetAbility, CharacterSheetSkill, WeaponAttackType, CantripList, SpellList } from "./CharacterSheet";

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
        isSavingThrowsType(typedObj["data"]["savingThrows"]) as boolean &&
        isSkillsType(typedObj["data"]["skills"]) as boolean &&
        isPassiveSkillsType(typedObj["data"]["passiveSkills"]) as boolean &&
        isInputType(typedObj["data"]["inspiration"]) as boolean &&
        isInputType(typedObj["data"]["proficiencyBonus"]) as boolean &&
        isInputType(typedObj["data"]["armorClass"]) as boolean &&
        isInputType(typedObj["data"]["initiative"]) as boolean &&
        isInputType(typedObj["data"]["speed"]) as boolean &&
        (typedObj["data"]["hitPoints"] !== null &&
            typeof typedObj["data"]["hitPoints"] === "object" ||
            typeof typedObj["data"]["hitPoints"] === "function") &&
        isInputType(typedObj["data"]["hitPoints"]["maximum"]) as boolean &&
        isInputType(typedObj["data"]["hitPoints"]["current"]) as boolean &&
        isInputType(typedObj["data"]["hitPoints"]["temporary"]) as boolean &&
        (typedObj["data"]["hitDice"] !== null &&
            typeof typedObj["data"]["hitDice"] === "object" ||
            typeof typedObj["data"]["hitDice"] === "function") &&
        isInputType(typedObj["data"]["hitDice"]["total"]) as boolean &&
        isInputType(typedObj["data"]["hitDice"]["current"]) as boolean &&
        (typedObj["data"]["deathSaves"] !== null &&
            typeof typedObj["data"]["deathSaves"] === "object" ||
            typeof typedObj["data"]["deathSaves"] === "function") &&
        (typedObj["data"]["deathSaves"]["success"] !== null &&
            typeof typedObj["data"]["deathSaves"]["success"] === "object" ||
            typeof typedObj["data"]["deathSaves"]["success"] === "function") &&
        isCheckboxType(typedObj["data"]["deathSaves"]["success"]["first"]) as boolean &&
        isCheckboxType(typedObj["data"]["deathSaves"]["success"]["second"]) as boolean &&
        isCheckboxType(typedObj["data"]["deathSaves"]["success"]["third"]) as boolean &&
        (typedObj["data"]["deathSaves"]["fail"] !== null &&
            typeof typedObj["data"]["deathSaves"]["fail"] === "object" ||
            typeof typedObj["data"]["deathSaves"]["fail"] === "function") &&
        isCheckboxType(typedObj["data"]["deathSaves"]["fail"]["first"]) as boolean &&
        isCheckboxType(typedObj["data"]["deathSaves"]["fail"]["second"]) as boolean &&
        isCheckboxType(typedObj["data"]["deathSaves"]["fail"]["third"]) as boolean &&
        Array.isArray(typedObj["data"]["attacks"]) &&
        typedObj["data"]["attacks"].every((e: any) =>
            isWeaponAttackType(e) as boolean
        ) &&
        (typedObj["data"]["otherProficiencies"] !== null &&
            typeof typedObj["data"]["otherProficiencies"] === "object" ||
            typeof typedObj["data"]["otherProficiencies"] === "function") &&
        Array.isArray(typedObj["data"]["otherProficiencies"]["languages"]) &&
        typedObj["data"]["otherProficiencies"]["languages"].every((e: any) =>
            isInputType(e) as boolean
        ) &&
        Array.isArray(typedObj["data"]["otherProficiencies"]["weapons"]) &&
        typedObj["data"]["otherProficiencies"]["weapons"].every((e: any) =>
            isInputType(e) as boolean
        ) &&
        Array.isArray(typedObj["data"]["otherProficiencies"]["armor"]) &&
        typedObj["data"]["otherProficiencies"]["armor"].every((e: any) =>
            isInputType(e) as boolean
        ) &&
        Array.isArray(typedObj["data"]["otherProficiencies"]["tools"]) &&
        typedObj["data"]["otherProficiencies"]["tools"].every((e: any) =>
            isInputType(e) as boolean
        ) &&
        Array.isArray(typedObj["data"]["otherProficiencies"]["other"]) &&
        typedObj["data"]["otherProficiencies"]["other"].every((e: any) =>
            isInputType(e) as boolean
        ) &&
        Array.isArray(typedObj["data"]["features"]) &&
        typedObj["data"]["features"].every((e: any) =>
            isInputType(e) as boolean
        ) &&
        Array.isArray(typedObj["data"]["traits"]) &&
        typedObj["data"]["traits"].every((e: any) =>
            isInputType(e) as boolean
        ) &&
        isInputType(typedObj["data"]["spellCastingAbility"]) as boolean &&
        isInputType(typedObj["data"]["spellSaveDc"]) as boolean &&
        isInputType(typedObj["data"]["spellAttackBonus"]) as boolean &&
        (typedObj["data"]["spells"] !== null &&
            typeof typedObj["data"]["spells"] === "object" ||
            typeof typedObj["data"]["spells"] === "function") &&
        isCantripList(typedObj["data"]["spells"]["cantrips"]) as boolean &&
        isSpellList(typedObj["data"]["spells"]["first"]) as boolean &&
        isSpellList(typedObj["data"]["spells"]["second"]) as boolean &&
        isSpellList(typedObj["data"]["spells"]["third"]) as boolean &&
        isSpellList(typedObj["data"]["spells"]["fourth"]) as boolean &&
        isSpellList(typedObj["data"]["spells"]["fifth"]) as boolean &&
        isSpellList(typedObj["data"]["spells"]["sixth"]) as boolean &&
        isSpellList(typedObj["data"]["spells"]["seventh"]) as boolean &&
        isSpellList(typedObj["data"]["spells"]["eighth"]) as boolean &&
        isSpellList(typedObj["data"]["spells"]["ninth"]) as boolean &&
        (typedObj["data"]["money"] !== null &&
            typeof typedObj["data"]["money"] === "object" ||
            typeof typedObj["data"]["money"] === "function") &&
        isInputType(typedObj["data"]["money"]["copper"]) as boolean &&
        isInputType(typedObj["data"]["money"]["silver"]) as boolean &&
        isInputType(typedObj["data"]["money"]["electrum"]) as boolean &&
        isInputType(typedObj["data"]["money"]["gold"]) as boolean &&
        isInputType(typedObj["data"]["money"]["platinum"]) as boolean &&
        Array.isArray(typedObj["data"]["equipment"]) &&
        typedObj["data"]["equipment"].every((e: any) =>
            isInputType(e) as boolean
        ) &&
        Array.isArray(typedObj["data"]["consumables"]) &&
        typedObj["data"]["consumables"].every((e: any) =>
            isInputType(e) as boolean
        ) &&
        Array.isArray(typedObj["data"]["treasure"]) &&
        typedObj["data"]["treasure"].every((e: any) =>
            isInputType(e) as boolean
        ) &&
        isInputType(typedObj["data"]["age"]) as boolean &&
        isInputType(typedObj["data"]["height"]) as boolean &&
        isInputType(typedObj["data"]["weight"]) as boolean &&
        isInputType(typedObj["data"]["eyes"]) as boolean &&
        isInputType(typedObj["data"]["skin"]) as boolean &&
        isInputType(typedObj["data"]["hair"]) as boolean &&
        isTextAreaType(typedObj["data"]["personalityTraits"]) as boolean &&
        isTextAreaType(typedObj["data"]["ideals"]) as boolean &&
        isTextAreaType(typedObj["data"]["bonds"]) as boolean &&
        isTextAreaType(typedObj["data"]["flaws"]) as boolean &&
        isTextAreaType(typedObj["data"]["backstory"]) as boolean &&
        isTextAreaType(typedObj["data"]["appearance"]) as boolean &&
        isTextAreaType(typedObj["data"]["allies"]) as boolean
    )
}

export function isInputType(obj: unknown): obj is InputType {
    const typedObj = obj as InputType
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["text"] === "string" &&
        typeof typedObj["locked"] === "boolean" &&
        (typeof typedObj["proficient"] === "undefined" ||
            typedObj["proficient"] === false ||
            typedObj["proficient"] === true) &&
        (typeof typedObj["placeholder"] === "undefined" ||
            typeof typedObj["placeholder"] === "string") &&
        (typeof typedObj["value"] === "undefined" ||
            typeof typedObj["value"] === "string")
    )
}

export function isInputTypeWithProficiency(obj: unknown): obj is InputTypeWithProficiency {
    const typedObj = obj as InputTypeWithProficiency
    return (
        isInputType(typedObj) as boolean &&
        typeof typedObj["proficient"] === "boolean"
    )
}

export function isTextAreaType(obj: unknown): obj is TextAreaType {
    const typedObj = obj as TextAreaType
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["text"] === "string" &&
        (typeof typedObj["locked"] === "undefined" ||
            typedObj["locked"] === false ||
            typedObj["locked"] === true)
    )
}

export function isCheckboxType(obj: unknown): obj is CheckboxType {
    const typedObj = obj as CheckboxType
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["checked"] === "boolean"
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

export function isCharacterSheetAbility(obj: unknown): obj is CharacterSheetAbility {
    const typedObj = obj as CharacterSheetAbility
    return (
        (typedObj === CharacterSheetAbility.STRENGTH ||
            typedObj === CharacterSheetAbility.DEXTERITY ||
            typedObj === CharacterSheetAbility.CONSTITUTION ||
            typedObj === CharacterSheetAbility.WISDOM ||
            typedObj === CharacterSheetAbility.INTELLIGENCE ||
            typedObj === CharacterSheetAbility.CHARISMA)
    )
}

export function isCharacterSheetSkill(obj: unknown): obj is CharacterSheetSkill {
    const typedObj = obj as CharacterSheetSkill
    return (
        (typedObj === CharacterSheetSkill.ACROBATICS ||
            typedObj === CharacterSheetSkill.ANIMAL_HANDLING ||
            typedObj === CharacterSheetSkill.ARCANA ||
            typedObj === CharacterSheetSkill.ATHLETICS ||
            typedObj === CharacterSheetSkill.DECEPTION ||
            typedObj === CharacterSheetSkill.HISTORY ||
            typedObj === CharacterSheetSkill.INSIGHT ||
            typedObj === CharacterSheetSkill.INTIMIDATION ||
            typedObj === CharacterSheetSkill.INVESTIGATION ||
            typedObj === CharacterSheetSkill.MEDICINE ||
            typedObj === CharacterSheetSkill.NATURE ||
            typedObj === CharacterSheetSkill.PERCEPTION ||
            typedObj === CharacterSheetSkill.PERFORMANCE ||
            typedObj === CharacterSheetSkill.PERSUASION ||
            typedObj === CharacterSheetSkill.RELIGION ||
            typedObj === CharacterSheetSkill.SLEIGHT_OF_HAND ||
            typedObj === CharacterSheetSkill.STEALTH ||
            typedObj === CharacterSheetSkill.SURVIVAL)
    )
}

export function isWeaponAttackType(obj: unknown): obj is WeaponAttackType {
    const typedObj = obj as WeaponAttackType
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        isInputType(typedObj["name"]) as boolean &&
        isInputType(typedObj["attackBonus"]) as boolean &&
        isInputType(typedObj["damage"]) as boolean
    )
}

export function isCantripList(obj: unknown): obj is CantripList {
    const typedObj = obj as CantripList
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        Array.isArray(typedObj["list"]) &&
        typedObj["list"].every((e: any) =>
            isInputType(e) as boolean
        )
    )
}

export function isSpellList(obj: unknown): obj is SpellList {
    const typedObj = obj as SpellList
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        Array.isArray(typedObj["list"]) &&
        typedObj["list"].every((e: any) =>
            isInputTypeWithProficiency(e) as boolean
        ) &&
        (typedObj["spellSlots"] !== null &&
            typeof typedObj["spellSlots"] === "object" ||
            typeof typedObj["spellSlots"] === "function") &&
        isInputType(typedObj["spellSlots"]["total"]) as boolean &&
        isInputType(typedObj["spellSlots"]["used"]) as boolean
    )
}
