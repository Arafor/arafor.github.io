/*
 * Generated type guards for "CharacterSheet.ts".
 * WARNING: Do not manually change this file.
 */
import { CharacterSheet, InputType, CharacterSheetType } from "./CharacterSheet";

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
        isInputType(typedObj["data"]["experiencePoints"]) as boolean
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

export function isCharacterSheetType(obj: unknown): obj is CharacterSheetType {
    const typedObj = obj as CharacterSheetType
    return (
        (typedObj === CharacterSheetType.DND_5E ||
            typedObj === CharacterSheetType.SW_5E)
    )
}
