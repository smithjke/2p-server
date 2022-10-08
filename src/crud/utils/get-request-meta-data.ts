import { FastifyRequest } from 'fastify';
import { RequestMetaData } from '@smithjke/2p-core/api';

export function getRequestMetaData(request: FastifyRequest): RequestMetaData {
  return {
    bearerToken: (request.headers['authorization'] || '').replace('Bearer ', '') || undefined,
    ip: request.ip,
  };
}
