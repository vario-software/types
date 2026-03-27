import type { Request, Response } from 'express';
import type { VarioCloudApp } from './VarioCloudApp';

export interface AccessTokenPayload
{
  sub?: string;
  iss?: string;
  azp?: string;
  aud?: string;
  exp?: number;
  iat?: number;
  tenantSubdomain?: string;
  isSuperUser?: boolean;
  permissions?: string[];
  tokenType?: string;
  [key: string]: unknown;
}

export interface RequestContext
{
  req: Request;
  res: Response;
  app: VarioCloudApp;
  requestId: string;
  startTime: number;
  appToken?: string;
  accessToken?: AccessTokenPayload;
  runAsAppUser?: boolean;
  migration?: string;
  parameter?: Record<string, string>;
  permittedToken?: { context: Record<string, unknown>; [key: string]: unknown };
  licenses?: string[];
}

export declare function getApp(): VarioCloudApp;
export declare function getContext(): RequestContext;
export declare function getAppToken(): string | undefined;
export declare function getAccessToken(): AccessTokenPayload | undefined;
export declare function getTenant(): string | undefined;
export declare function getExternalUserId(): string | undefined;
export declare function getRequest(): Request;
export declare function getResponse(): Response;
export declare function getRequestId(): string | undefined;
export declare function runInContext(context: RequestContext, callback: () => void): void;
