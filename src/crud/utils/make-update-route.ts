import { AnyCrudType, crudApiConfig } from '@smithjke/2p-core/crud';
import { FastifyRequest, RouteOptions } from 'fastify';
import { CrudRouteProps } from '../common';

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
    handler: async (request: FastifyRequest) => {
      const crudFastifyService = props.useCrudFastifyService();
      crudFastifyService.setRequest(request);
      return crudFastifyService.update(
        request.body as object,
        request.params as object,
      );
    },
  };
}
