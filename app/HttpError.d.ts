export declare class HttpError extends Error
{
  constructor(
    message: string,
    statusCode?: number,
    logService?: string,
    logInfo?: unknown,
    logId?: unknown,
    logLevel?: string,
    errorData?: unknown,
  );

  statusCode?: number;
  logLevel?: string;
  logService?: string;
  logId?: unknown;
  logInfo?: unknown;
  data?: unknown;
}
