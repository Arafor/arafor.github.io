/*
 * Generated type guards for "CharacterSheet.ts".
 * WARNING: Do not manually change this file.
 */
import { CharacterSheet } from "./CharacterSheet";

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
        typeof typedObj["meta"]["type"] === "string" &&
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
