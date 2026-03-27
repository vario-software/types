import type { TypedApiStatic } from '../Api';
import type { components } from '../../schema/erp';

export type EavGroup = components["schemas"]["common-eav-EavGroup"];

export declare class Eav
{
  constructor(ApiAdapter: TypedApiStatic);

  getGroup(groupKey: string): Promise<EavGroup>;
  setGroup(eavGroup: EavGroup): Promise<EavGroup>;
  changeGroup(groupKey: string, callback: (group: EavGroup) => EavGroup): Promise<EavGroup>;
  deleteGroup(groupKey: string): Promise<boolean>;
  removeDataFromGroup(groupKey: string, attributeKeys?: string[]): Promise<boolean>;
  getGroupIdByKey(groupKey: string): Promise<string | null>;
}
