import { AnyCrudType, crudApiConfig } from '@smithjke/2p-core/crud';
import { RouteOptions } from 'fastify';
import { CrudRouteProps } from '../common';
import { getRequestMetaData } from './get-request-meta-data';

export function makeFindOneRoute<T extends AnyCrudType>(props: CrudRouteProps<T>): RouteOptions {
  return {
    method: crudApiConfig.findOne.method as any,
    url: crudApiConfig.findOne.url,
    schema: {
      params: props.crudSchema.entityKey,
      response: {
        200: props.crudSchema.singleEntity,
      },
    },
    handler: async (request, reply) => {
      try {
        return props.crudService.findOne(
          request.params as object,
          getRequestMetaData(request),
        );
      } catch (e) {
        reply.code(404);
        throw e;
      }
    },
  };
}
