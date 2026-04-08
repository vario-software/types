# Module: app_scripting_proxy

## AppScriptingProxyScriptingContext

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|jsonData|Die zu verarbeitenden Json-Daten|Yes|
|[ScriptingServiceList](services.md#ScriptingServiceList)|services|Services|Yes|
|_Map<string,object>_|parameters|Parameter zur Verwendung im Skript|No|



## AppScriptForExecutionProcess

Verarbeitet die Json-Daten

_Return type:_ _object_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[AppScriptingProxyScriptingContext](#AppScriptingProxyScriptingContext)|ctx|Skript-Kontext|Yes|
|_object_|jsonObj|JSON-Objekt|Yes|

## Instance: appScript
### Description
Manipulation eines JSONs oder Ausführung von Aktionen durch eine App

### Methods

_**setProcess**_

Setter für Callback "process"

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[AppScriptForExecutionProcess](#AppScriptForExecutionProcess)|callback|Callback "process"|Yes|

```
import appScript from "app_scripting_proxy";

appScript.setProcess( (ctx, jsonObj) => {
    // Perform actions and return the manipulated json, if applicable
    return jsonObj;
});

```
