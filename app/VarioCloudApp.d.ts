import type { Express, Router } from 'express';
import type { paths as erpPaths } from '../schema/erp';
import type { TypedApiStatic } from './Api';

// -- Token & Cache Modules --

export declare class OfflineToken
{
  constructor(app: VarioCloudApp, filename?: string);

  app: VarioCloudApp;
  filename: string;
  database: { data: Record<string, string>; update(fn: (data: Record<string, string>) => void): Promise<void> };

  init(): Promise<void>;
  get(tenant: string): Promise<string | undefined>;
  set(tenant: string, offlineToken: string): Promise<void>;
  delete(tenant: string): Promise<void>;
}

export declare class AccessToken
{
  init(): Promise<void>;
  get(tenant: string): Promise<string | null>;
  set(tenant: string, accessToken: string, expiresAt: number): Promise<void>;
  delete(tenant: string): Promise<void>;
}

export declare class BaseUrlCache
{
  constructor(app: VarioCloudApp);

  app: VarioCloudApp;

  init(): Promise<void>;
  get(): Promise<string>;
  set(value: string): Promise<void>;
  delete(): Promise<void>;
}

// -- App Configuration --

export interface ClientConfig
{
  clientId: string;
  clientSecret: string;
  appIdentifier: string;
  appJWK: object | string;
  [key: string]: any;
}

export interface AppOptions
{
  onUnhandledError?: (error: any) => void;
  onMigrationError?: (error: any) => void;
  onKeycloakError?: (error: any) => void;
  log?: (message: string | object, loggerName?: string, level?: string) => void | Promise<void>;
  offlineToken?: OfflineToken;
  accessToken?: AccessToken;
  baseUrlCache?: BaseUrlCache;
  bodyParser?: import('body-parser').OptionsJson;
  apiPrefix?: string;
  [key: string]: any;
}

// -- VarioCloudApp --

export declare class VarioCloudApp
{
  constructor(client: ClientConfig, options?: AppOptions);

  onUnhandledError: (error: any) => void;
  onMigrationError: (error: any) => void;
  onKeycloakError?: (error: any) => void;

  express: Express;
  port: string | number;
  uiPath: string | null;
  uiPrefix: string;
  version: string;
  client: ClientConfig;
  log: (message: string | object, loggerName?: string, level?: string) => void | Promise<void>;
  offlineToken: OfflineToken;
  accessToken: AccessToken;
  baseUrlCache: BaseUrlCache;
  erp: TypedApiStatic<erpPaths>;
  apiServer: Router;
  uiServer?: Router;
  serverListening: Boolean;

  start(): Promise<VarioCloudApp>;
}
