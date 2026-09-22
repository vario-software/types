import {
    EOutputType, OutputModuleScriptingResponse
} from "./types"

import {
    ScriptingServiceList
} from "./services"

export interface OutputModuleScriptingContext {

    /**
     * Response used by the script to override the resolved output behaviour
     */
    response: OutputModuleScriptingResponse;

    /**
     * Requested output type for this session
     */
    outputType: EOutputType;

    /**
     * Services
     */
    services: ScriptingServiceList;

    /**
     * Parameter zur Verwendung im Skript
     */
    parameters: Map<string,object>;

    /**
     * Dataprovider values keyed by name
     */
    dataprovider: Map<string,string>;
}

/**
 * Executed before printing
 * 
 * @param {OutputModuleScriptingContext} ctx - Script context
 * @return {boolean} true = create output, false = abort output
 */
type OutputModuleScriptBeforeprint = (ctx: OutputModuleScriptingContext) => boolean;

export interface OutputModuleScriptingContext {

    /**
     * Response used by the script to override the resolved output behaviour
     */
    response: OutputModuleScriptingResponse;

    /**
     * Requested output type for this session
     */
    outputType: EOutputType;

    /**
     * Services
     */
    services: ScriptingServiceList;

    /**
     * Parameter zur Verwendung im Skript
     */
    parameters: Map<string,object>;

    /**
     * Dataprovider values keyed by name
     */
    dataprovider: Map<string,string>;
}


/**
 * Script executed before printing
 * 
 * @filename output_module_script
 * @example
 * ```typescript
 * import outputModuleScript from "output_module_script";
 * 
 * outputModuleScript.setBeforePrint( (ctx) => {
 *     // ctx.dataprovider dataprovider values keyed by name, e.g. ctx.dataprovider.documentId
 *     // ctx.response contains fields for overriding the session
 *     // return false to abort the output
 *     return true;
 * });
 * ```
 */
export interface outputModuleScript {

    /**
     * Setter for callback "beforePrint"
     * 
     * @param {OutputModuleScriptBeforeprint} callback - Callback "beforePrint"
     */
    setBeforePrint(callback: OutputModuleScriptBeforeprint): void;
}
