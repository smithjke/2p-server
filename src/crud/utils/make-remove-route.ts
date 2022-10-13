import { AnyCrudType, crudApiConfig } from '@smithjke/2p-core/crud';
import { CrudRouteProps } from '../common';
import { FastifyRequest, RouteOptions } from 'fastify';

export function makeRemoveRoute<T extends AnyCrudType>(props: CrudRouteProps<T>): RouteOptions {
  return {
    method: crudApiConfig.remove.method as any,
    url: crudApiConfig.remove.url,
    schema: {
      params: props.crudSchema.entityKey,
    },
    handler: async (request: FastifyRequest) => {
      const crudFastifyService = props.useCrudFastifyService();
      crudFastifyService.setRequest(request);
      return crudFastifyService.remove(
        request.params as object,
      );
    },
  };
}
