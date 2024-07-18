/*
 * Generated type guards for "CharacterSheet.ts".
 * WARNING: Do not manually change this file.
 */
import { CharacterSheet, CharacterSheetType } from "./CharacterSheet";

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
        typeof typedObj["data"]["characterName"] === "string" &&
        typeof typedObj["data"]["classAndLevel"] === "string" &&
        typeof typedObj["data"]["background"] === "string" &&
        typeof typedObj["data"]["playerName"] === "string" &&
        typeof typedObj["data"]["race"] === "string" &&
        typeof typedObj["data"]["alignment"] === "string" &&
        typeof typedObj["data"]["experiencePoints"] === "string"
    )
}

export function isCharacterSheetType(obj: unknown): obj is CharacterSheetType {
    const typedObj = obj as CharacterSheetType
    return (
        (typedObj === CharacterSheetType.DND_5E ||
            typedObj === CharacterSheetType.SW_5E)
    )
}
