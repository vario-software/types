# Module: picklist_script_pick_box_connect

## PicklistScriptingContext

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[PickTrolley](types.md#PickTrolley)|pickTrolley|Der verarbeitete Pickwagen/Konsolidierungsplatz|Yes|
|[Picklist](types.md#Picklist)|picklist|Die verarbeitete Pickliste|Yes|
|_Map<number,number>_|lineIdsWithBoxIds|Zuordnung von Boxen (ID) zu Positionen (ID)|No|
|[ScriptingServiceList](services.md#ScriptingServiceList)|services|Services|Yes|
|_Map<string,object>_|parameters|Parameter zur Verwendung im Skript|No|



## PicklistScriptForExecutionProcess

Verarbeitet die Json-Daten

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[PicklistScriptingContext](#PicklistScriptingContext)|ctx|Skript-Kontext|Yes|

## Instance: pickBoxConnector
### Description
Verteilung von Positionen einer Pickliste auf Pickboxen

### Methods

_**setProcess**_

Setter für Callback "process"

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[PicklistScriptForExecutionProcess](#PicklistScriptForExecutionProcess)|callback|Callback "process"|Yes|

```
import pickBoxConnector from "picklist_script_pick_box_connect";

pickBoxConnector.setProcess( (ctx) => {
    // Link picklist-lines to pick-trolley-boxes
});

```
