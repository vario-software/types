# Module: output_filter_script

## TaskOutputFilterContext

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[NotificationDataprovider](types.md#notificationdataprovider)|data||No|
|[ScriptingServiceList](services.md#scriptingservicelist)|services|Services|Yes|
|_Map<string,object>_|parameters|Parameter zur Verwendung im Skript|No|



## OutputFilterScriptShouldprocess

Verarbeitet die Json-Daten

_Return type:_ _object_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[TaskOutputFilterContext](#taskoutputfiltercontext)|ctx|Skript-Kontext|Yes|

## Instance: outputFilter
### Description
Entscheidung, ob eine Ausgabe ausgeführt werden soll

### Methods

_**setShouldProcess**_

Setter für Callback "shouldProcess"

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[OutputFilterScriptShouldprocess](#outputfilterscriptshouldprocess)|callback|Callback "shouldProcess"|Yes|

```
import outputFilter from "output_filter_script";

outputFilter.setShouldProcess( (ctx) => {
    // Should the filter be processed?
    return true;
});

```
