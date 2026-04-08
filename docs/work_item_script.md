# Module: work_item_script

## WorkflowScriptingContext

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[WorkflowInstanceDetails](types.md#WorkflowInstanceDetails)|instanceDetails|Details zur aktuellen Workflow-Instanz|Yes|
|_Map<string,object>_|availableInput|Verfügbare Eingabedaten|No|
|[ScriptingServiceList](services.md#ScriptingServiceList)|services|Services|Yes|
|_Map<string,object>_|parameters|Parameter zur Verwendung im Skript|No|



## WorkItemScriptAction

Führt die gewünschten Aktionen des Workflow-Elements aus

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[WorkflowScriptingContext](#WorkflowScriptingContext)|ctx|Workflow-Skript-Kontext|Yes|


## WorkItemScriptGuard

Definiert, ob die Skript-Methode "action" ausgeführt werden soll

_Return type:_ _boolean_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[WorkflowScriptingContext](#WorkflowScriptingContext)|ctx|Workflow-Skript-Kontext|Yes|


## WorkItemScriptPrepare

Variablen für die C-Unit-Queries füllen. Wird vor "guard" und "action" ausgeführt

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[WorkflowScriptingContext](#WorkflowScriptingContext)|ctx|Workflow-Skript-Kontext|Yes|

## Instance: workItem
### Description
Ausführung von Aktionen innerhalb eines Workflows

### Methods

_**setPrepare**_

Setter für Callback "prepare"

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[WorkItemScriptPrepare](#WorkItemScriptPrepare)|callback|Callback "prepare"|Yes|


_**setGuard**_

Setter für Callback "guard"

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[WorkItemScriptGuard](#WorkItemScriptGuard)|callback|Callback "guard"|Yes|


_**setAction**_

Setter für Callback "action"

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[WorkItemScriptAction](#WorkItemScriptAction)|callback|Callback "action"|Yes|

```
import workItem from "work_item_script";

workItem.setPrepare( (ctx) => {
    // Fill variables for c-unit queries. Executed before method “guard”
});

workItem.setGuard( (ctx) => {
    // Should "trigger" be executed?
    return true;
};

workItem.setAction( (ctx) => {
    // Action to be performed
};

```
