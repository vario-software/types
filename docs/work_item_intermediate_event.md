# Module: work_item_intermediate_event

## WorkflowScriptingContext

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[WorkflowInstanceDetails](types.md#workflowinstancedetails)|instanceDetails|Details zur aktuellen Workflow-Instanz|Yes|
|_Map<string,object>_|availableInput|Verfügbare Eingabedaten|No|
|[ScriptingServiceList](services.md#scriptingservicelist)|services|Services|Yes|
|_Map<string,object>_|parameters|Parameter zur Verwendung im Skript|No|



## WorkItemIntermediateEventGuard

Definiert, ob die Skript-Methode "trigger" ausgeführt werden soll

_Return type:_ _boolean_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[WorkflowScriptingContext](#workflowscriptingcontext)|ctx|Workflow-Skript-Kontext|Yes|


## WorkItemIntermediateEventPrepare

Variablen für die C-Unit-Queries füllen. Wird vor "guard" ausgeführt

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[WorkflowScriptingContext](#workflowscriptingcontext)|ctx|Workflow-Skript-Kontext|Yes|


## WorkItemIntermediateEventTrigger

Wird nach Empfang des konfigurierten Events ausgelöst

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[WorkflowScriptingContext](#workflowscriptingcontext)|ctx|Workflow-Skript-Kontext|Yes|

## Instance: workItem
### Description
Ausführung von Aktionen nach einem Event oder abgelaufener Wartezeit

### Methods

_**setPrepare**_

Setter für Callback "prepare"

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[WorkItemIntermediateEventPrepare](#workitemintermediateeventprepare)|callback|Callback "prepare"|Yes|


_**setGuard**_

Setter für Callback "guard"

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[WorkItemIntermediateEventGuard](#workitemintermediateeventguard)|callback|Callback "guard"|Yes|


_**setTrigger**_

Setter für Callback "trigger"

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[WorkItemIntermediateEventTrigger](#workitemintermediateeventtrigger)|callback|Callback "trigger"|Yes|

```
import workItem from "work_item_intermediate_event";

workItem.setPrepare( (ctx) => {
    // Fill variables for c-unit queries. Executed before method “guard”
});

workItem.setGuard( (ctx) => {
    // Should "trigger" be executed?
    return true;
});

workItem.setTrigger( (ctx) => {
    // Action to be performed
});

```
