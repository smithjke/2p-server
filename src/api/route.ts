import { FastifyInstance, RouteOptions } from 'fastify';
import {
  AnyCrudType,
  crudApiConfig,
  CrudListQuery,
  CrudSchema,
  CrudService,
  makeCrudListQuerySchema,
  makeCrudListResultSchema
} from '@smithjke/2p-core/crud';

export type FindOneRouteProps<T extends AnyCrudType> = {
  crudService: CrudService<T>;
  crudSchema: CrudSchema;
};

export function makeFindOneRoute<T extends AnyCrudType>(props: FindOneRouteProps<T>): RouteOptions {
  return {
    method: crudApiConfig.findOne.method as any,
    url: crudApiConfig.findOne.url,
    schema: {
      params: props.crudSchema.entityKey,
      response: {
        200: props.crudSchema.entity,
      },
    },
    handler: async (request, reply) => {
      try {
        return props.crudService.findOne(request.params as object);
      } catch (e) {
        reply.code(404);
        throw e;
      }
    },
  };
}

export type FindAllRouteProps<T extends AnyCrudType> = {
  crudService: CrudService<T>;
  crudSchema: CrudSchema;
};

export function makeFindAllRoute<T extends AnyCrudType>(props: FindAllRouteProps<T>): RouteOptions {
  return {
    method: crudApiConfig.findAll.method as any,
    url: crudApiConfig.findAll.url,
    schema: {
      querystring: makeCrudListQuerySchema(
        props.crudSchema.entityOrderField,
        props.crudSchema.entityFilter,
        ),
      response: {
        200: makeCrudListResultSchema(props.crudSchema.listedEntity),
      },
    },
    handler: async (request, reply) => {
      return props.crudService.findAll(request.query as CrudListQuery);
    },
  };
}

export type CreateRouteProps<T extends AnyCrudType> = {
  crudService: CrudService<T>;
  crudSchema: CrudSchema;
};

export function makeCreateRoute<T extends AnyCrudType>(props: CreateRouteProps<T>): RouteOptions {
  return {
    method: crudApiConfig.create.method as any,
    url: crudApiConfig.create.url,
    schema: {
      body: props.crudSchema.createEntity,
      response: {
        200: props.crudSchema.entity,
      },
    },
    handler: async (request, reply) => {
      return props.crudService.create(request.body as object);
    },
  };
}

export type UpdateRouteProps<T extends AnyCrudType> = {
  crudService: CrudService<T>;
  crudSchema: CrudSchema;
};

export function makeUpdateRoute<T extends AnyCrudType>(props: UpdateRouteProps<T>): RouteOptions {
  return {
    method: crudApiConfig.update.method as any,
    url: crudApiConfig.update.url,
    schema: {
      params: props.crudSchema.entityKey,
      body: props.crudSchema.updateEntity,
      response: {
        200: props.crudSchema.entity,
      },
    },
    handler: async (request, reply) => {
      return props.crudService.update(
        request.body as object,
        request.params as object,
      );
    },
  };
}

export type RemoveRouteProps<T extends AnyCrudType> = {
  crudService: CrudService<T>;
  crudSchema: CrudSchema;
};

export function makeRemoveRoute<T extends AnyCrudType>(props: RemoveRouteProps<T>): RouteOptions {
  return {
    method: crudApiConfig.remove.method as any,
    url: crudApiConfig.remove.url,
    schema: {
      params: props.crudSchema.entityKey,
    },
    handler: async (request, reply) => {
      return props.crudService.remove(request.params as object);
    },
  };
}

export type RegisterCrudRoutesProps<T extends AnyCrudType> = {
  fastifyInstance: FastifyInstance;
  crudService: CrudService<T>;
  crudSchema: CrudSchema;
};

export function registerCrudRoutes<T extends AnyCrudType>(props: RegisterCrudRoutesProps<T>) {
  const {
    fastifyInstance,
    crudService,
    crudSchema,
  } = props;

  fastifyInstance.route(
    makeFindOneRoute({
      crudService,
      crudSchema,
    }),
  );

  fastifyInstance.route(
    makeFindAllRoute({
      crudService,
      crudSchema,
    }),
  );

  fastifyInstance.route(
    makeCreateRoute({
      crudService,
      crudSchema,
    }),
  );

  fastifyInstance.route(
    makeUpdateRoute({
      crudService,
      crudSchema,
    }),
  );

  fastifyInstance.route(
    makeRemoveRoute({
      crudService,
      crudSchema,
    }),
  );
}
