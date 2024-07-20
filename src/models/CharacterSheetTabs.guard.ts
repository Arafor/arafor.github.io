/*
 * Generated type guards for "CharacterSheetTabs.ts".
 * WARNING: Do not manually change this file.
 */
import { CharacterSheetTabs } from "./CharacterSheetTabs";

export function isCharacterSheetTabs(obj: unknown): obj is CharacterSheetTabs {
    const typedObj = obj as CharacterSheetTabs
    return (
        (typedObj === CharacterSheetTabs.STATS ||
            typedObj === CharacterSheetTabs.SPELLS ||
            typedObj === CharacterSheetTabs.EQUIPMENT ||
            typedObj === CharacterSheetTabs.CHARACTER)
    )
}
