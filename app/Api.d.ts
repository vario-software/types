// -- Utility types --

type ConvertPath<S extends string> =
  S extends `${infer A}{${infer B}}${infer C}`
    ? `${A}:${B}${ConvertPath<C>}`
    : S;

type ReversePath<S extends string> =
  S extends `${infer A}:${infer B}/${infer C}`
    ? `${A}{${B}}/${ReversePath<C>}`
    : S extends `${infer A}:${infer B}`
      ? `${A}{${B}}`
      : S;

type GetOperation<PathDef, M extends string> =
  M extends keyof PathDef
    ? Exclude<PathDef[M], undefined> extends infer Op
      ? Op extends { responses: any } ? Op : never
      : never
    : never;

type SuccessResponse<Op> =
  Op extends { responses: { 200: { content: { 'application/json': infer R } } } } ? R :
  Op extends { responses: { 201: { content: { 'application/json': infer R } } } } ? R :
  Op extends { responses: { 200: { content: { '*/*': infer R } } } } ? R :
  Op extends { responses: { 201: { content: { '*/*': infer R } } } } ? R :
  Op extends { responses: { 200: { content: { 'application/*': infer R } } } } ? R :
  Op extends { responses: { 201: { content: { 'application/*': infer R } } } } ? R :
  never;

type PathParams<Op> =
  Op extends { parameters: { path: infer P } } ? P : Record<string, never>;

type QueryParams<Op> =
  Op extends { parameters: { query?: infer Q } }
    ? [Q] extends [never] ? Record<string, never> : NonNullable<Q>
    : Record<string, never>;

type RequestBody<Op> =
  Op extends { requestBody: { content: { 'application/json': infer B } } } ? B :
  Op extends { requestBody?: { content: { 'application/json': infer B } } } ? B :
  any;

type MethodEndpoints<Paths, M extends string> = {
  [P in keyof Paths as
    GetOperation<Paths[P], M> extends never ? never :
    [SuccessResponse<GetOperation<Paths[P], M>>] extends [never] ? never :
    ConvertPath<P & string>
  ]: GetOperation<Paths[P], M>;
};

// -- Per-method endpoint maps (used only for path autocomplete constraints) --

type GetEndpoints<Paths> = MethodEndpoints<Paths, 'get'>;
type PostEndpoints<Paths> = MethodEndpoints<Paths, 'post'>;
type PutEndpoints<Paths> = MethodEndpoints<Paths, 'put'>;
type DeleteEndpoints<Paths> = MethodEndpoints<Paths, 'delete'>;

// -- Direct O(1) lookup types (via ReversePath, no mapped type iteration) --

type DirectLookup<Paths, P extends string> =
  ReversePath<P> extends keyof Paths ? Paths[ReversePath<P>] : never;

type DirectOperation<Paths, P extends string, M extends string> =
  GetOperation<DirectLookup<Paths, P>, M>;

type DirectPathParams<Paths, P extends string> =
  DirectLookup<Paths, P> extends infer Def
    ? [Def] extends [never] ? Record<string, any>
      : PathParams<GetOperation<Def, 'get'>> extends Record<string, never>
        ? PathParams<GetOperation<Def, 'post'>> extends Record<string, never>
          ? PathParams<GetOperation<Def, 'put'>> extends Record<string, never>
            ? PathParams<GetOperation<Def, 'delete'>>
            : PathParams<GetOperation<Def, 'put'>>
          : PathParams<GetOperation<Def, 'post'>>
        : PathParams<GetOperation<Def, 'get'>>
    : Record<string, any>;

type ExtractBody<Op> =
  Op extends { requestBody: { content: { 'application/json': infer B } } } ? B :
  Op extends { requestBody?: { content: { 'application/json': infer B } } } ? B :
  never;

type DirectRequestBody<Paths, P extends string> =
  DirectLookup<Paths, P> extends infer Def
    ? [Def] extends [never] ? any
      : ExtractBody<GetOperation<Def, 'post'>> | ExtractBody<GetOperation<Def, 'put'>> extends infer B
        ? [B] extends [never] ? any : B | string
        : any
    : any;

type DirectMethods<Paths, P extends string> =
  DirectLookup<Paths, P> extends infer Def
    ? [Def] extends [never] ? string
      : ([GetOperation<Def, 'get'>] extends [never] ? never : 'GET')
        | ([GetOperation<Def, 'post'>] extends [never] ? never : 'POST')
        | ([GetOperation<Def, 'put'>] extends [never] ? never : 'PUT')
        | ([GetOperation<Def, 'delete'>] extends [never] ? never : 'DELETE')
    : string;

type DirectQueryParams<Paths, P extends string> =
  DirectLookup<Paths, P> extends infer Def
    ? [Def] extends [never] ? Record<string, any>
      : QueryParams<GetOperation<Def, 'get'>> extends Record<string, never>
        ? QueryParams<GetOperation<Def, 'post'>> extends Record<string, never>
          ? QueryParams<GetOperation<Def, 'put'>> extends Record<string, never>
            ? QueryParams<GetOperation<Def, 'delete'>>
            : QueryParams<GetOperation<Def, 'put'>>
          : QueryParams<GetOperation<Def, 'post'>>
        : QueryParams<GetOperation<Def, 'get'>>
    : Record<string, any>;

// -- Shared option shapes for generic overloads --

type GenericGetOptions<Paths, P extends string> = ErpBaseOptions & {
  method: 'GET';
  pathParams?: DirectPathParams<Paths, P>;
  params?: QueryParams<DirectOperation<Paths, P, 'get'>>;
};

type GenericPostOptions<Paths, P extends string> = ErpBaseOptions & {
  method: 'POST';
  pathParams?: DirectPathParams<Paths, P>;
  params?: QueryParams<DirectOperation<Paths, P, 'post'>>;
  body?: DirectRequestBody<Paths, P>;
};

type GenericPutOptions<Paths, P extends string> = ErpBaseOptions & {
  method: 'PUT';
  pathParams?: DirectPathParams<Paths, P>;
  params?: QueryParams<DirectOperation<Paths, P, 'put'>>;
  body?: DirectRequestBody<Paths, P>;
};

type GenericDeleteOptions<Paths, P extends string> = ErpBaseOptions & {
  method: 'DELETE';
  pathParams?: DirectPathParams<Paths, P>;
  params?: QueryParams<DirectOperation<Paths, P, 'delete'>>;
};

type GenericFallbackOptions<Paths, P extends string> = ErpBaseOptions & {
  method?: DirectMethods<Paths, P>;
  pathParams?: DirectPathParams<Paths, P>;
  params?: DirectQueryParams<Paths, P>;
  body?: DirectRequestBody<Paths, P>;
};

// -- Public types --

export interface ErpFetchResponse<T>
{
  data: T;
  response: any;
}

export interface ErpBaseOptions
{
  saveResponse?: boolean;
  resolveOn?: 'end' | 'response';
  timeout?: number;
  suppressLogs?: boolean;
  secretsToMask?: string[];
  followRedirects?: boolean;
  headers?: Record<string, string>;
  executeAsAppUser?: boolean;
}

export interface TypedErpApiFetch<Paths = Record<string, any>>
{
  // Path-constrained overloads (for path autocomplete + full response typing)
  <P extends keyof GetEndpoints<Paths>>(
    path: P,
    options: ErpBaseOptions & {
      method: 'GET';
      pathParams?: PathParams<DirectOperation<Paths, P & string, 'get'>>;
      params?: QueryParams<DirectOperation<Paths, P & string, 'get'>>;
    },
  ): Promise<ErpFetchResponse<SuccessResponse<DirectOperation<Paths, P & string, 'get'>>>>;

  <P extends keyof PostEndpoints<Paths>>(
    path: P,
    options: ErpBaseOptions & {
      method: 'POST';
      pathParams?: PathParams<DirectOperation<Paths, P & string, 'post'>>;
      params?: QueryParams<DirectOperation<Paths, P & string, 'post'>>;
      body?: RequestBody<DirectOperation<Paths, P & string, 'post'>> | string;
    },
  ): Promise<ErpFetchResponse<SuccessResponse<DirectOperation<Paths, P & string, 'post'>>>>;

  <P extends keyof PutEndpoints<Paths>>(
    path: P,
    options: ErpBaseOptions & {
      method: 'PUT';
      pathParams?: PathParams<DirectOperation<Paths, P & string, 'put'>>;
      params?: QueryParams<DirectOperation<Paths, P & string, 'put'>>;
      body?: RequestBody<DirectOperation<Paths, P & string, 'put'>> | string;
    },
  ): Promise<ErpFetchResponse<SuccessResponse<DirectOperation<Paths, P & string, 'put'>>>>;

  <P extends keyof DeleteEndpoints<Paths>>(
    path: P,
    options: ErpBaseOptions & {
      method: 'DELETE';
      pathParams?: PathParams<DirectOperation<Paths, P & string, 'delete'>>;
      params?: QueryParams<DirectOperation<Paths, P & string, 'delete'>>;
    },
  ): Promise<ErpFetchResponse<SuccessResponse<DirectOperation<Paths, P & string, 'delete'>>>>;

  // Path-constrained GET default (no method required, defaults to GET)
  <P extends keyof GetEndpoints<Paths>>(
    path: P,
    options?: ErpBaseOptions & {
      pathParams?: PathParams<DirectOperation<Paths, P & string, 'get'>>;
      params?: QueryParams<DirectOperation<Paths, P & string, 'get'>>;
    },
  ): Promise<ErpFetchResponse<SuccessResponse<DirectOperation<Paths, P & string, 'get'>>>>;

  // Generic per-method overloads (typed params/body per method, no path constraint)
  <P extends string>(path: P, options: GenericGetOptions<Paths, P>): Promise<ErpFetchResponse<any>>;
  <P extends string>(path: P, options: GenericPostOptions<Paths, P>): Promise<ErpFetchResponse<any>>;
  <P extends string>(path: P, options: GenericPutOptions<Paths, P>): Promise<ErpFetchResponse<any>>;
  <P extends string>(path: P, options: GenericDeleteOptions<Paths, P>): Promise<ErpFetchResponse<any>>;

  // Fallback (no method specified)
  <P extends string>(path: P, options?: GenericFallbackOptions<Paths, P>): Promise<ErpFetchResponse<any>>;
}

export interface VqlOptions
{
  statement: string;
  variableSubstitutions?: any[];
  limit?: number | null;
  offset?: number | null;
}

export interface VqlResult
{
  data: Array<Record<string, any>>;
  moreElements?: string;
  nextOffset?: string;
  [key: string]: any;
}

export interface TypedPathCallable<Paths, R>
{
  // Path-constrained overloads (for path autocomplete)
  <P extends keyof GetEndpoints<Paths>>(path: P, options?: GenericFallbackOptions<Paths, P & string>): Promise<R>;
  <P extends keyof PostEndpoints<Paths>>(path: P, options?: GenericFallbackOptions<Paths, P & string>): Promise<R>;
  <P extends keyof PutEndpoints<Paths>>(path: P, options?: GenericFallbackOptions<Paths, P & string>): Promise<R>;
  <P extends keyof DeleteEndpoints<Paths>>(path: P, options?: GenericFallbackOptions<Paths, P & string>): Promise<R>;

  // Generic per-method overloads (typed params/body per method)
  <P extends string>(path: P, options: GenericGetOptions<Paths, P>): Promise<R>;
  <P extends string>(path: P, options: GenericPostOptions<Paths, P>): Promise<R>;
  <P extends string>(path: P, options: GenericPutOptions<Paths, P>): Promise<R>;
  <P extends string>(path: P, options: GenericDeleteOptions<Paths, P>): Promise<R>;

  // Fallback (no method specified)
  <P extends string>(path: P, options?: GenericFallbackOptions<Paths, P>): Promise<R>;
}

export interface TypedApiStatic<Paths = Record<string, any>>
{
  fetch: TypedErpApiFetch<Paths>;
  getResponseStream: TypedPathCallable<Paths, import('stream').PassThrough>;
  gateway: TypedPathCallable<Paths, void>;
  redirectRequest: TypedPathCallable<Paths, import('stream').PassThrough>;
  vql(options: VqlOptions): Promise<VqlResult>;

  new(path: string, options?: ErpBaseOptions & {
    method?: string;
    pathParams?: Record<string, any>;
    body?: any;
    params?: Record<string, any>;
  }): ApiInstance;

  [key: string]: any;
}

export interface ApiInstance
{
  execute(): Promise<void>;
  getData(): any;
  getStatusCode(): number | undefined;
  getResponseHeaders(): Record<string, string> | undefined;
}
