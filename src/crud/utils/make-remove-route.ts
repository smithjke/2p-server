import { AnyCrudType, crudApiConfig } from '@smithjke/2p-core/crud';
import { CrudRouteProps } from '../common';
import { RouteOptions } from 'fastify';
import { getRequestMetaData } from './get-request-meta-data';

export function makeRemoveRoute<T extends AnyCrudType>(props: CrudRouteProps<T>): RouteOptions {
  return {
    method: crudApiConfig.remove.method as any,
    url: crudApiConfig.remove.url,
    schema: {
      params: props.crudSchema.entityKey,
    },
    handler: async (request, reply) => {
      return props.crudService.remove(
        request.params as object,
        getRequestMetaData(request),
      );
    },
  };
}
