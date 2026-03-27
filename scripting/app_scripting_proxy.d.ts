import {
    ScriptingServiceList
} from "./services"

export interface AppScriptingProxyScriptingContext {

    /**
     * Die zu verarbeitenden Json-Daten
     */
    jsonData: string;

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
 * @param {AppScriptingProxyScriptingContext} ctx - Skript-Kontext
 * @param {object} jsonObj - JSON-Objekt
 * @return {object} Das ggf. veränderte JSON-Objekt
 */
type AppScriptForExecutionProcess = (ctx: AppScriptingProxyScriptingContext, jsonObj: object) => object;

export interface AppScriptingProxyScriptingContext {

    /**
     * Die zu verarbeitenden Json-Daten
     */
    jsonData: string;

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
 * Manipulation eines JSONs oder Ausführung von Aktionen durch eine App
 * 
 * @filename app_scripting_proxy
 * @example
 * ```typescript
 * import appScript from "app_scripting_proxy";
 * 
 * appScript.setProcess( (ctx, jsonObj) => {
 *     // Perform actions and return the manipulated json, if applicable
 *     return jsonObj;
 * });
 * ```
 */
export interface appScript {

    /**
     * Setter für Callback "process"
     * 
     * @param {AppScriptForExecutionProcess} callback - Callback "process"
     */
    setProcess(callback: AppScriptForExecutionProcess): void;
}
