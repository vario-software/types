import {
    NotificationDataprovider
} from "./types"

import {
    ScriptingServiceList
} from "./services"

export interface TaskOutputFilterContext {

    data: NotificationDataprovider;

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
 * @param {TaskOutputFilterContext} ctx - Skript-Kontext
 * @return {object} Das ggf. veränderte JSON-Objekt
 */
type OutputFilterScriptShouldprocess = (ctx: TaskOutputFilterContext) => object;

export interface TaskOutputFilterContext {

    data: NotificationDataprovider;

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
 * Entscheidung, ob eine Ausgabe ausgeführt werden soll
 * 
 * @filename output_filter_script
 * @example
 * ```typescript
 * import outputFilter from "output_filter_script";
 * 
 * outputFilter.setShouldProcess( (ctx) => {
 *     // Should the filter be processed?
 *     return true;
 * });
 * ```
 */
export interface outputFilter {

    /**
     * Setter für Callback "shouldProcess"
     * 
     * @param {OutputFilterScriptShouldprocess} callback - Callback "shouldProcess"
     */
    setShouldProcess(callback: OutputFilterScriptShouldprocess): void;
}
