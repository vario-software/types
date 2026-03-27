/// <reference path="./scripting.d.ts" />

// -- Backend App Module Declarations (Public) --

declare module '@vario-software/vario-app-framework-backend/api/ErpApi'
{
  import Api = require('./app/ErpApi');
  export = Api;
}

declare module '@vario-software/vario-app-framework-backend/api/ErpApi.js'
{
  import Api = require('./app/ErpApi');
  export = Api;
}

declare module '@vario-software/vario-app-framework-backend/utils/context'
{
  export * from './app/context';
}

declare module '@vario-software/vario-app-framework-backend/utils/context.js'
{
  export * from './app/context';
}

declare module '@vario-software/vario-app-framework-backend/app'
{
  const VarioCloudApp: typeof import('./app/VarioCloudApp').VarioCloudApp;
  export = VarioCloudApp;
}

declare module '@vario-software/vario-app-framework-backend/app.js'
{
  const VarioCloudApp: typeof import('./app/VarioCloudApp').VarioCloudApp;
  export = VarioCloudApp;
}

// -- Backend Utility Module Declarations (Public) --

declare module '@vario-software/vario-app-framework-backend/utils/httpError'
{
  export { HttpError as default, HttpError } from './app/HttpError';
}

declare module '@vario-software/vario-app-framework-backend/utils/httpError.js'
{
  export { HttpError as default, HttpError } from './app/HttpError';
}

declare module '@vario-software/vario-app-framework-backend/utils/migrator'
{
  export { Migrator as default, Migrator, MigratorMethods, MigratorCallback } from './app/Migrator';
}

declare module '@vario-software/vario-app-framework-backend/utils/migrator.js'
{
  export { Migrator as default, Migrator, MigratorMethods, MigratorCallback } from './app/Migrator';
}

declare module '@vario-software/vario-app-framework-backend/utils/permission'
{
  export function checkPermission(verb: string, strict?: boolean): boolean;
  export function checkPermissionMiddleware(verb: string): import('express').RequestHandler;
}

declare module '@vario-software/vario-app-framework-backend/utils/permission.js'
{
  export function checkPermission(verb: string, strict?: boolean): boolean;
  export function checkPermissionMiddleware(verb: string): import('express').RequestHandler;
}

declare module '@vario-software/vario-app-framework-backend/utils/licenses'
{
  export function checkLicense(licenseKey: string, silent?: boolean): Promise<boolean>;
  export function checkLicenseMiddleware(licenseKey: string): import('express').RequestHandler;
}

declare module '@vario-software/vario-app-framework-backend/utils/licenses.js'
{
  export function checkLicense(licenseKey: string, silent?: boolean): Promise<boolean>;
  export function checkLicenseMiddleware(licenseKey: string): import('express').RequestHandler;
}

declare module '@vario-software/vario-app-framework-backend/utils/promiseSingletonMap'
{
  export { PromiseSingletonMap as default, PromiseSingletonMap } from './app/PromiseSingletonMap';
}

declare module '@vario-software/vario-app-framework-backend/utils/promiseSingletonMap.js'
{
  export { PromiseSingletonMap as default, PromiseSingletonMap } from './app/PromiseSingletonMap';
}

declare module '@vario-software/vario-app-framework-backend/utils/token'
{
  export function validateOfflineToken(offlineToken: string): Promise<import('./app/context').AccessTokenPayload>;
  export function validateAppToken(appToken: string): Promise<import('./app/context').AccessTokenPayload>;
  export function isAppTokenExpired(): boolean;
  export function refreshAppToken(): Promise<void>;
}

declare module '@vario-software/vario-app-framework-backend/utils/token.js'
{
  export function validateOfflineToken(offlineToken: string): Promise<import('./app/context').AccessTokenPayload>;
  export function validateAppToken(appToken: string): Promise<import('./app/context').AccessTokenPayload>;
  export function isAppTokenExpired(): boolean;
  export function refreshAppToken(): Promise<void>;
}

declare module '@vario-software/vario-app-framework-backend/utils/logger'
{
  export function log(message: string | object, loggerName?: string, level?: string): Promise<void>;
}

declare module '@vario-software/vario-app-framework-backend/utils/logger.js'
{
  export function log(message: string | object, loggerName?: string, level?: string): Promise<void>;
}

declare module '@vario-software/vario-app-framework-backend/utils/keycloak'
{
  export default function refreshAccessToken(offlineToken: string, refreshUrl: string): Promise<Record<string, unknown>>;
}

declare module '@vario-software/vario-app-framework-backend/utils/keycloak.js'
{
  export default function refreshAccessToken(offlineToken: string, refreshUrl: string): Promise<Record<string, unknown>>;
}

// -- Backend Setup Module Declarations (Public) --

declare module '@vario-software/vario-app-framework-backend/setup/runAsAppUser'
{
  export default function runAsAppUser(value?: boolean): Promise<void>;
}

declare module '@vario-software/vario-app-framework-backend/setup/runAsAppUser.js'
{
  export default function runAsAppUser(value?: boolean): Promise<void>;
}

// -- Backend API Helper Declarations (Public) --

declare module '@vario-software/vario-app-framework-backend/api/helpers/streamResponse'
{
  export default function streamResponse(res: import('express').Response, handler: (onProgress?: (data: unknown) => void) => Promise<unknown>): Promise<void>;
}

declare module '@vario-software/vario-app-framework-backend/api/helpers/streamResponse.js'
{
  export default function streamResponse(res: import('express').Response, handler: (onProgress?: (data: unknown) => void) => Promise<unknown>): Promise<void>;
}
