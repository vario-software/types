import {
    WorkflowInstanceDetails
} from "./types"

import {
    ScriptingServiceList
} from "./services"

export interface WorkflowScriptingContext {

    /**
     * Details zur aktuellen Workflow-Instanz
     */
    instanceDetails: WorkflowInstanceDetails;

    /**
     * Verfügbare Eingabedaten
     */
    availableInput: Map<string,object>;

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
 * Variablen für die C-Unit-Queries füllen. Wird vor "split" ausgeführt
 * 
 * @param {WorkflowScriptingContext} ctx - Workflow-Skript-Kontext
 */
type WorkItemSplitGatewayPrepare = (ctx: WorkflowScriptingContext) => void;

/**
 * Ermittelt den Identifier zur Auswahl des nächsten Workflow-Elements
 * 
 * @param {WorkflowScriptingContext} ctx - Workflow-Skript-Kontext
 * @return {string} Split-Gateway-Identifier
 */
type WorkItemSplitGatewaySplit = (ctx: WorkflowScriptingContext) => string;

export interface WorkflowScriptingContext {

    /**
     * Details zur aktuellen Workflow-Instanz
     */
    instanceDetails: WorkflowInstanceDetails;

    /**
     * Verfügbare Eingabedaten
     */
    availableInput: Map<string,object>;

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
 * Durchführung einer Entscheidung zum Fortsetzen eines Workflows
 * 
 * @filename work_item_split_gateway
 * @example
 * ```typescript
 * import workItem from "work_item_split_gateway";
 * 
 * workItem.prepare: (ctx) => {
 *     // Fill variables for c-unit queries. Executed before method “split”
 * };
 * 
 * workItem.split: (ctx) => {
 *     // Determines the identifier for selecting the next workflow element
 *     return <Gateway-Identifier>;
 * };
 * ```
 */
export interface workItem {

    /**
     * Setter für Callback "prepare"
     * 
     * @param {WorkItemSplitGatewayPrepare} callback - Callback "prepare"
     */
    setPrepare(callback: WorkItemSplitGatewayPrepare): void;

    /**
     * Setter für Callback "split"
     * 
     * @param {WorkItemSplitGatewaySplit} callback - Callback "split"
     */
    setSplit(callback: WorkItemSplitGatewaySplit): void;
}
