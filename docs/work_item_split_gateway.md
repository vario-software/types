# Module: work_item_split_gateway

## WorkflowScriptingContext

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[WorkflowInstanceDetails](types.md#WorkflowInstanceDetails)|instanceDetails|Details zur aktuellen Workflow-Instanz|Yes|
|_Map<string,object>_|availableInput|Verfügbare Eingabedaten|No|
|[ScriptingServiceList](services.md#ScriptingServiceList)|services|Services|Yes|
|_Map<string,object>_|parameters|Parameter zur Verwendung im Skript|No|



## WorkItemSplitGatewayPrepare

Variablen für die C-Unit-Queries füllen. Wird vor "split" ausgeführt

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[WorkflowScriptingContext](#WorkflowScriptingContext)|ctx|Workflow-Skript-Kontext|Yes|


## WorkItemSplitGatewaySplit

Ermittelt den Identifier zur Auswahl des nächsten Workflow-Elements

_Return type:_ _string_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[WorkflowScriptingContext](#WorkflowScriptingContext)|ctx|Workflow-Skript-Kontext|Yes|

## Instance: workItem
### Description
Durchführung einer Entscheidung zum Fortsetzen eines Workflows

### Methods

_**setPrepare**_

Setter für Callback "prepare"

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[WorkItemSplitGatewayPrepare](#WorkItemSplitGatewayPrepare)|callback|Callback "prepare"|Yes|


_**setSplit**_

Setter für Callback "split"

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[WorkItemSplitGatewaySplit](#WorkItemSplitGatewaySplit)|callback|Callback "split"|Yes|

```
import workItem from "work_item_split_gateway";

workItem.prepare: (ctx) => {
    // Fill variables for c-unit queries. Executed before method “split”
};

workItem.split: (ctx) => {
    // Determines the identifier for selecting the next workflow element
    return <Gateway-Identifier>;
};

```
