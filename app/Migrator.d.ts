import type { Request } from 'express';
import type { components } from '../schema/erp';
import type { TypedApiStatic } from './Api';
import type { VarioCloudApp } from './VarioCloudApp';
import type { EavGroup } from './modules/Eav';
import type { TextEnumGroupCreate } from './modules/TextEnum';

export type SalesChannelBackend = components["schemas"]["erp-sales_channel-SalesChannelBackend"];
export type SalesChannel = components["schemas"]["erp-sales_channel-SalesChannel"];
type FinanceBookingBackend = components["schemas"]["erp-finance-FinanceBookingBackend"];
type AppScriptingProxy = components["schemas"]["common-api-AppScriptingProxy"];
type ImportMappingRuleSet = components["schemas"]["common-data_import-ImportMappingRuleSet"];

export interface MigratorMethods
{
  log(message: string, level?: string): Promise<void>;
  getEavGroup(groupKey: string): Promise<EavGroup>;
  createEavGroup(eavGroup: EavGroup): Promise<EavGroup>;
  changeEavGroup(groupKey: string, callback: (group: EavGroup) => EavGroup): Promise<EavGroup>;
  deleteEavGroup(groupKey: string): Promise<EavGroup>;
  removeDataFromEavGroup(groupKey: string, attributeKeys?: string[]): Promise<EavGroup>;
  createTextEnumGroup(textEnumGroup: TextEnumGroupCreate): Promise<TextEnumGroupCreate>;
  registerWebhook(destinationQueue: string, url: string, destinationOwner?: string): Promise<void>;
  deregisterWebhook(destinationQueue: string, url: string, destinationOwner?: string): Promise<void>;
  createSalesChannelBackend(label: string, validChannelTypes?: string[]): Promise<SalesChannelBackend>;
  changeSalesChannelBackend(body: SalesChannelBackend): Promise<SalesChannelBackend>;
  createSalesChannel(salesChannelBackend: { id: string }, label: string, description: string, channelType?: string): Promise<SalesChannel>;
  getSalesChannels(): Promise<SalesChannel[]>;
  findSalesChannelBackend(): Promise<SalesChannelBackend | undefined>;
  getSalesChannelBackend(salesChannelBackendId: string): Promise<SalesChannelBackend>;
  activateSalesChannelBackend(salesChannelBackend: { id: string }): Promise<void>;
  createMultipartImportPreset(importMultipartPresetTemplate: Record<string, unknown>): Promise<{ id: string; [key: string]: unknown }>;
  createFinanceBackend(label: string): Promise<FinanceBookingBackend>;
  changeFinanceBackend(label: string, description: string): Promise<FinanceBookingBackend>;
  updateMultipartImportPreset(id: string, importMultipartPresetTemplate: Record<string, unknown>): Promise<{ id: string; [key: string]: unknown }>;
  addAppScriptingTrigger(triggerId: string, script: string | object): Promise<void>;
  updateAppScriptingTrigger(triggerId: string, script: string | object, id?: string): Promise<void>;
  getAppScriptingTriggerId(triggerId: string): Promise<string | undefined>;
  getMultipartImportPreset(id: string): Promise<{ id: string; [key: string]: unknown }>;
  getImportMappingRuleSet(id: string): Promise<ImportMappingRuleSet>;
  getOrCreateScriptModuleGroup(): Promise<{ id: string; name: string }>;
  getOrCreateImportScriptPresetting(name: string, script: string | object, existingInlineScript?: string | object): Promise<{ id: string }>;
}

export type MigratorCallback = (methods: MigratorMethods, results: Record<string, unknown>) => Promise<unknown>;

export declare class Migrator
{
  constructor(key: string);

  key: string;
  req: Request;
  app: VarioCloudApp;
  migrationResults: Record<string, unknown>;
  ApiAdapter: TypedApiStatic;
  methods: MigratorMethods;

  setMigration(key: string, callback: MigratorCallback): Promise<void>;
  always(key: string, callback: MigratorCallback): Promise<void>;
}
