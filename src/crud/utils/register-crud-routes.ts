import { AnyCrudType, CrudSchema, CrudService } from '@smithjke/2p-core/crud';
import { FastifyInstance } from 'fastify';
import { makeFindOneRoute } from './make-find-one-route';
import { makeFindAllRoute } from './make-find-all-route';
import { makeCreateRoute } from './make-create-route';
import { makeUpdateRoute } from './make-update-route';
import { makeRemoveRoute } from './make-remove-route';

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
