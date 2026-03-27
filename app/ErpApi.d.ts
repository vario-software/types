import type { paths as erpPaths } from '../schema/erp';
import type { TypedApiStatic } from './Api';
import type { Eav, Migration, TextEnum, Webhook, PermittedToken } from './modules';

declare const Api: TypedApiStatic<erpPaths> & {
  migration: Migration;
  eav: Eav;
  textenum: TextEnum;
  webhook: Webhook;
  permittedToken: PermittedToken;
};

export = Api;
