import type { TypedApiStatic } from '../Api';
import type { components } from '../../schema/erp';

export type MigrationRecord = components["schemas"]["common-api-AppMigration"];

export declare class Migration
{
  constructor(ApiAdapter: TypedApiStatic);

  get(identifier: string): Promise<MigrationRecord | undefined>;
  getAll(options: { offset?: number; limit?: number; identifier?: string }): Promise<{
    data: MigrationRecord[];
    moreElements?: string;
    nextOffset?: string;
  }>;
  getNote(key: string): Promise<unknown>;
  set(identifier: string, note?: string | null): Promise<MigrationRecord>;
  delete(id: string): Promise<unknown>;
}
