import { FastifyInstance } from 'fastify';
import { Schema } from '@smithjke/2p-core/examples';
import { registerCrudRoutes } from '../../../crud';
import { useExampleService } from './di';

export function plugin(fastifyInstance: FastifyInstance, opts: any, done: () => void) {
  const crudService = useExampleService();

  const {
    crudSchema,
    entityApiConfig,
  } = Schema.Example;

  registerCrudRoutes({
    fastifyInstance,
    crudService,
    crudSchema,
  });

  fastifyInstance.route({
    method: entityApiConfig.superCreate.method as any,
    url: entityApiConfig.superCreate.url,
    schema: {},
    handler: async (request, reply) => crudService.superCreate(
      request.body as Schema.Example.CreateEntity,
      request,
    ),
  });

  fastifyInstance.route({
    method: entityApiConfig.superUpdate.method as any,
    url: entityApiConfig.superUpdate.url,
    schema: {},
    handler: async (request, reply) => crudService.superUpdate(
      request.body as Schema.Example.UpdateEntity,
      request.params as Schema.Example.EntityKey,
      request,
    ),
  });

  done();
}
