import { AnyCrudType, crudApiConfig } from '@smithjke/2p-core/crud';
import { RouteOptions } from 'fastify';
import { CrudRouteProps } from '../common';
import { getRequestMetaData } from './get-request-meta-data';

export function makeCreateRoute<T extends AnyCrudType>(props: CrudRouteProps<T>): RouteOptions {
  return {
    method: crudApiConfig.create.method as any,
    url: crudApiConfig.create.url,
    schema: {
      body: props.crudSchema.createEntity,
      response: {
        200: props.crudSchema.singleEntity,
      },
    },
    handler: async (request, reply) => props.crudService.create(
      request.body as object,
      getRequestMetaData(request),
    ),
  };
}
