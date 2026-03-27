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
 * Definiert, ob die Skript-Methode "trigger" ausgeführt werden soll
 * 
 * @param {WorkflowScriptingContext} ctx - Workflow-Skript-Kontext
 * @return {boolean} Skript-Methode "trigger" ausführen?
 */
type WorkItemIntermediateEventGuard = (ctx: WorkflowScriptingContext) => boolean;

/**
 * Variablen für die C-Unit-Queries füllen. Wird vor "guard" ausgeführt
 * 
 * @param {WorkflowScriptingContext} ctx - Workflow-Skript-Kontext
 */
type WorkItemIntermediateEventPrepare = (ctx: WorkflowScriptingContext) => void;

/**
 * Wird nach Empfang des konfigurierten Events ausgelöst
 * 
 * @param {WorkflowScriptingContext} ctx - Workflow-Skript-Kontext
 */
type WorkItemIntermediateEventTrigger = (ctx: WorkflowScriptingContext) => void;

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
 * Ausführung von Aktionen nach einem Event oder abgelaufener Wartezeit
 * 
 * @filename work_item_intermediate_event
 * @example
 * ```typescript
 * import workItem from "work_item_intermediate_event";
 * 
 * workItem.prepare: (ctx) => {
 *     // Fill variables for c-unit queries. Executed before method “guard”
 * };
 * 
 * workItem.setGuard( (ctx) => {
 *     // Should "trigger" be executed?
 *     return true;
 * };
 * 
 * workItem.trigger: (ctx) => {
 *     // Action to be performed
 * };
 * ```
 */
export interface workItem {

    /**
     * Setter für Callback "prepare"
     * 
     * @param {WorkItemIntermediateEventPrepare} callback - Callback "prepare"
     */
    setPrepare(callback: WorkItemIntermediateEventPrepare): void;

    /**
     * Setter für Callback "guard"
     * 
     * @param {WorkItemIntermediateEventGuard} callback - Callback "guard"
     */
    setGuard(callback: WorkItemIntermediateEventGuard): void;

    /**
     * Setter für Callback "trigger"
     * 
     * @param {WorkItemIntermediateEventTrigger} callback - Callback "trigger"
     */
    setTrigger(callback: WorkItemIntermediateEventTrigger): void;
}
