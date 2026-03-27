declare module 'app_scripting_proxy'
{
  const appScript: import('./scripting/app_scripting_proxy').appScript;
  export default appScript;
}

declare module 'batch_script'
{
  const batchAction: import('./scripting/batch_script').batchAction;
  export default batchAction;
}

declare module 'output_filter_script'
{
  const outputFilter: import('./scripting/output_filter_script').outputFilter;
  export default outputFilter;
}

declare module 'picklist_script_pick_box_connect'
{
  const pickBoxConnector: import('./scripting/picklist_script_pick_box_connect').pickBoxConnector;
  export default pickBoxConnector;
}

declare module 'work_item_script'
{
  const workItem: import('./scripting/work_item_script').workItem;
  export default workItem;
}

declare module 'work_item_intermediate_event'
{
  const workItem: import('./scripting/work_item_intermediate_event').workItem;
  export default workItem;
}

declare module 'work_item_split_gateway'
{
  const workItem: import('./scripting/work_item_split_gateway').workItem;
  export default workItem;
}
