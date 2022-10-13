import {
  AnyCrudType,
  crudApiConfig,
  CrudFindAllQuery,
  makeCrudFindAllQuery,
  makeCrudFindAllResult
} from '@smithjke/2p-core/crud';
import { FastifyRequest, RouteOptions } from 'fastify';
import { CrudRouteProps } from '../common';

export function makeFindAllRoute<T extends AnyCrudType>(props: CrudRouteProps<T>): RouteOptions {
  return {
    method: crudApiConfig.findAll.method as any,
    url: crudApiConfig.findAll.url,
    schema: {
      querystring: makeCrudFindAllQuery(
        props.crudSchema.entityOrderField,
        props.crudSchema.entityFilter,
      ),
      response: {
        200: makeCrudFindAllResult(props.crudSchema.listedEntity),
      },
    },
    handler: async (request: FastifyRequest) => {
      const crudFastifyService = props.useCrudFastifyService();
      crudFastifyService.setRequest(request);
      return crudFastifyService.findAll(
        request.query as CrudFindAllQuery<any>,
      );
    },
  };
}
