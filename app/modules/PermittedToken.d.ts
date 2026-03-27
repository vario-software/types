import type { TypedApiStatic } from '../Api';

export declare class PermittedToken
{
  constructor(ApiAdapter: TypedApiStatic);

  create(expiresAt: string, permissions: string[]): Promise<{ bearerToken: string; [key: string]: unknown }>;
}
