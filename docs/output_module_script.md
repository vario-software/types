# Module: output_module_script

## OutputModuleScriptingContext

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[OutputModuleScriptingResponse](types.md#outputmodulescriptingresponse)|response|Response used by the script to override the resolved output behaviour|No|
|[EOutputType](types.md#eoutputtype)|outputType|Requested output type for this session|Yes|
|[ScriptingServiceList](services.md#scriptingservicelist)|services|Services|Yes|
|_Map<string,object>_|parameters|Parameter zur Verwendung im Skript|No|
|_Map<string,string>_|dataprovider|Dataprovider values keyed by name|Yes|



## OutputModuleScriptBeforeprint

Executed before printing

_Return type:_ _boolean_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[OutputModuleScriptingContext](#outputmodulescriptingcontext)|ctx|Script context|Yes|

## Instance: outputModuleScript
### Description
Script executed before printing

### Methods

_**setBeforePrint**_

Setter for callback "beforePrint"

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[OutputModuleScriptBeforeprint](#outputmodulescriptbeforeprint)|callback|Callback "beforePrint"|Yes|

```
import outputModuleScript from "output_module_script";

outputModuleScript.setBeforePrint( (ctx) => {
    // ctx.dataprovider dataprovider values keyed by name, e.g. ctx.dataprovider.documentId
    // ctx.response contains fields for overriding the session
    // return false to abort the output
    return true;
});

```
