import type { TypedApiStatic } from '../Api';

export declare class Webhook
{
  constructor(ApiAdapter: TypedApiStatic);

  register(destinationQueue: string, url: string, destinationOwner?: string): Promise<void>;
  deregister(destinationQueue: string, url: string, destinationOwner?: string): Promise<void>;
}
