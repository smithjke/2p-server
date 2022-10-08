import { AnyCrudType, crudApiConfig } from '@smithjke/2p-core/crud';
import { RouteOptions } from 'fastify';
import { CrudRouteProps } from '../common';
import { getRequestMetaData } from './get-request-meta-data';

export function makeUpdateRoute<T extends AnyCrudType>(props: CrudRouteProps<T>): RouteOptions {
  return {
    method: crudApiConfig.update.method as any,
    url: crudApiConfig.update.url,
    schema: {
      params: props.crudSchema.entityKey,
      body: props.crudSchema.updateEntity,
      response: {
        200: props.crudSchema.singleEntity,
      },
    },
    handler: async (request, reply) => {
      return props.crudService.update(
        request.body as object,
        request.params as object,
        getRequestMetaData(request),
      );
    },
  };
}
