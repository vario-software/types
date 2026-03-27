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
 * Führt die gewünschten Aktionen des Workflow-Elements aus
 * 
 * @param {WorkflowScriptingContext} ctx - Workflow-Skript-Kontext
 */
type WorkItemScriptAction = (ctx: WorkflowScriptingContext) => void;

/**
 * Definiert, ob die Skript-Methode "action" ausgeführt werden soll
 * 
 * @param {WorkflowScriptingContext} ctx - Workflow-Skript-Kontext
 * @return {boolean} Skript-Methode "action" ausführen?
 */
type WorkItemScriptGuard = (ctx: WorkflowScriptingContext) => boolean;

/**
 * Variablen für die C-Unit-Queries füllen. Wird vor "guard" und "action" ausgeführt
 * 
 * @param {WorkflowScriptingContext} ctx - Workflow-Skript-Kontext
 */
type WorkItemScriptPrepare = (ctx: WorkflowScriptingContext) => void;

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
 * Ausführung von Aktionen innerhalb eines Workflows
 * 
 * @filename work_item_script
 * @example
 * ```typescript
 * import workItem from "work_item_script";
 * 
 * workItem.setPrepare( (ctx) => {
 *     // Fill variables for c-unit queries. Executed before method “guard”
 * });
 * 
 * workItem.setGuard( (ctx) => {
 *     // Should "trigger" be executed?
 *     return true;
 * };
 * 
 * workItem.setAction( (ctx) => {
 *     // Action to be performed
 * };
 * ```
 */
export interface workItem {

    /**
     * Setter für Callback "prepare"
     * 
     * @param {WorkItemScriptPrepare} callback - Callback "prepare"
     */
    setPrepare(callback: WorkItemScriptPrepare): void;

    /**
     * Setter für Callback "guard"
     * 
     * @param {WorkItemScriptGuard} callback - Callback "guard"
     */
    setGuard(callback: WorkItemScriptGuard): void;

    /**
     * Setter für Callback "action"
     * 
     * @param {WorkItemScriptAction} callback - Callback "action"
     */
    setAction(callback: WorkItemScriptAction): void;
}
