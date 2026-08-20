# Module: batch_script

## BatchScriptingContext

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_Array<string>_|errorMessages|Fehlermeldungen, die im Laufe der Skriptverarbeitung aufgetreten sind|No|
|[BatchScriptingContext$BatchScriptImportSession](types.md#batchscriptingcontextbatchscriptimportsession)|importSession|Enthält Informationen, welche innerhalb von Skripten eines Import-Laufs verwendet werden können|No|
|[ImportDataMap](types.md#importdatamap)|importData|eingelesene Import-Daten|Yes|
|[ScriptingServiceList](services.md#scriptingservicelist)|services|Services|Yes|
|_Map<string,object>_|parameters|Parameter zur Verwendung im Skript|No|



## BatchScriptAction

Die in der Stapelverarbeitung auszuführende Aktion

_Return type:_ _boolean_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[BatchScriptingContext](#batchscriptingcontext)|ctx|Import-Kontext|Yes|


## BatchScriptAfterbatch

Wird nach dem Import ausgeführt

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[BatchScriptingContext](#batchscriptingcontext)|ctx|Import-Kontext|Yes|


## BatchScriptGuard

Definiert, ob die Aktion ausgeführt werden soll

_Return type:_ _boolean_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[BatchScriptingContext](#batchscriptingcontext)|ctx|Import-Kontext|Yes|

## Instance: batchAction
### Description
Aktionen innerhalb einer Stapelverarbeitung

### Methods

_**setAction**_

Setter für Callback "action"

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[BatchScriptAction](#batchscriptaction)|callback|Callback "action"|Yes|


_**setGuard**_

Setter für Callback "guard"

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[BatchScriptGuard](#batchscriptguard)|callback|Callback "guard"|Yes|


_**setAfterBatch**_

Setter für Callback "afterBatch"

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[BatchScriptAfterbatch](#batchscriptafterbatch)|callback|Callback "afterBatch"|Yes|

```
import batchAction from "batch_script";

batchAction.setGuard( (ctx) => {
    // Should the action be performed for the current import record?
    return true;
});

batchAction.setAction( (ctx) => {
    // Execute action for the current import record. true/false for success/failure.
    return true
});

batchAction.setAfterBatch( (ctx) => {
    // Action to be performed after an import block
});

```
