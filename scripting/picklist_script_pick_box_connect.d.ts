import {
    PickTrolley, Picklist
} from "./types"

import {
    ScriptingServiceList
} from "./services"

export interface PicklistScriptingContext {

    /**
     * Der verarbeitete Pickwagen/Konsolidierungsplatz
     */
    pickTrolley: PickTrolley;

    /**
     * Die verarbeitete Pickliste
     */
    picklist: Picklist;

    /**
     * Zuordnung von Boxen (ID) zu Positionen (ID)
     */
    lineIdsWithBoxIds: Map<number,number>;

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
 * Verarbeitet die Json-Daten
 * 
 * @param {PicklistScriptingContext} ctx - Skript-Kontext
 */
type PicklistScriptForExecutionProcess = (ctx: PicklistScriptingContext) => void;

export interface PicklistScriptingContext {

    /**
     * Der verarbeitete Pickwagen/Konsolidierungsplatz
     */
    pickTrolley: PickTrolley;

    /**
     * Die verarbeitete Pickliste
     */
    picklist: Picklist;

    /**
     * Zuordnung von Boxen (ID) zu Positionen (ID)
     */
    lineIdsWithBoxIds: Map<number,number>;

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
 * Verteilung von Positionen einer Pickliste auf Pickboxen
 * 
 * @filename picklist_script_pick_box_connect
 * @example
 * ```typescript
 * import pickBoxConnector from "picklist_script_pick_box_connect";
 * 
 * pickBoxConnector.setProcess( (ctx) => {
 *     // Link picklist-lines to pick-trolley-boxes
 * });
 * ```
 */
export interface pickBoxConnector {

    /**
     * Setter für Callback "process"
     * 
     * @param {PicklistScriptForExecutionProcess} callback - Callback "process"
     */
    setProcess(callback: PicklistScriptForExecutionProcess): void;
}
