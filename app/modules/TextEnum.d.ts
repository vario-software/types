import type { TypedApiStatic } from '../Api';
import type { components } from '../../schema/erp';

export type TextEnumGroup = components["schemas"]["common-api-TextEnumGroupGet"];
export type TextEnumGroupCreate = components["schemas"]["common-api-TextEnumGroupCreate"];
export type TextEnumEntry = components["schemas"]["common-api-TextEnumGet"];
export type TextEnumEntryCreate = components["schemas"]["common-api-TextEnumCreate"];

export declare class TextEnum
{
  constructor(ApiAdapter: TypedApiStatic);

  get(key: string): Promise<TextEnumGroup | undefined>;
  getAll(options: { offset?: number; limit?: number; key?: string }): Promise<{
    data: TextEnumGroup[];
    moreElements?: string;
    nextOffset?: string;
  }>;
  setGroup(textEnumGroupTemplate: TextEnumGroupCreate): Promise<TextEnumGroup>;
  setEnums(textEnumGroupKey: string, textEnums: TextEnumEntryCreate[]): Promise<void>;
  createGroup(textEnumGroup: TextEnumGroupCreate): Promise<TextEnumGroup>;
  getAllEnums(options: { offset?: number; limit?: number; groupId?: string }): Promise<{
    data: TextEnumEntry[];
    moreElements?: string;
    nextOffset?: string;
  }>;
  removeEnums(textEnumGroup: TextEnumGroup): Promise<boolean>;
  removeEnum(textEnum: { id: string }): Promise<void>;
  createEnums(customGroupKey: string, textEnums: TextEnumEntryCreate[]): Promise<boolean>;
  createEnum(textEnum: TextEnumEntryCreate): Promise<void>;
}
