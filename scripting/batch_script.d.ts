import {
    BatchScriptingContext$BatchScriptImportSession, ImportDataMap
} from "./types"

import {
    ScriptingServiceList
} from "./services"

export interface BatchScriptingContext {

    /**
     * Fehlermeldungen, die im Laufe der Skriptverarbeitung aufgetreten sind
     */
    errorMessages: Array<string>;

    /**
     * Enthält Informationen, welche innerhalb von Skripten eines Import-Laufs verwendet werden können
     */
    importSession: BatchScriptingContext$BatchScriptImportSession;

    /**
     * eingelesene Import-Daten
     */
    importData: ImportDataMap;

    /**
     * Services
     */
    services: ScriptingServiceList;

    /**
     * Parameter zur Verwendung im Skript
     */
    parameters: Map<string,object>;
}

/**
 * Die in der Stapelverarbeitung auszuführende Aktion
 * 
 * @param {BatchScriptingContext} ctx - Import-Kontext
 * @return {boolean} true, falls erfolgreich durchgeführt. Sonst false.
 */
type BatchScriptAction = (ctx: BatchScriptingContext) => boolean;

/**
 * Wird nach dem Import ausgeführt
 * 
 * @param {BatchScriptingContext} ctx - Import-Kontext
 */
type BatchScriptAfterbatch = (ctx: BatchScriptingContext) => void;

/**
 * Definiert, ob die Aktion ausgeführt werden soll
 * 
 * @param {BatchScriptingContext} ctx - Import-Kontext
 * @return {boolean} true => Aktion ausführen, false => Eintrag ignorieren
 */
type BatchScriptGuard = (ctx: BatchScriptingContext) => boolean;

export interface BatchScriptingContext {

    /**
     * Fehlermeldungen, die im Laufe der Skriptverarbeitung aufgetreten sind
     */
    errorMessages: Array<string>;

    /**
     * Enthält Informationen, welche innerhalb von Skripten eines Import-Laufs verwendet werden können
     */
    importSession: BatchScriptingContext$BatchScriptImportSession;

    /**
     * eingelesene Import-Daten
     */
    importData: ImportDataMap;

    /**
     * Services
     */
    services: ScriptingServiceList;

    /**
     * Parameter zur Verwendung im Skript
     */
    parameters: Map<string,object>;
}


/**
 * Aktionen innerhalb einer Stapelverarbeitung
 * 
 * @filename batch_script
 * @example
 * ```typescript
 * import batchAction from "batch_script";
 * 
 * batchAction.setGuard( (ctx) => {
 *     // Should the action be performed for the current import record?
 *     return true;
 * });
 * 
 * batchAction.setAction( (ctx) => {
 *     // Execute action for the current import record. true/false for success/failure.
 *     return true
 * });
 * 
 * batchAction.setAfterBatch( (ctx) => {
 *     // Action to be performed after an import block
 * });
 * ```
 */
export interface batchAction {

    /**
     * Setter für Callback "action"
     * 
     * @param {BatchScriptAction} callback - Callback "action"
     */
    setAction(callback: BatchScriptAction): void;

    /**
     * Setter für Callback "guard"
     * 
     * @param {BatchScriptGuard} callback - Callback "guard"
     */
    setGuard(callback: BatchScriptGuard): void;

    /**
     * Setter für Callback "afterBatch"
     * 
     * @param {BatchScriptAfterbatch} callback - Callback "afterBatch"
     */
    setAfterBatch(callback: BatchScriptAfterbatch): void;
}
