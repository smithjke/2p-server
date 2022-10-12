import { FastifyRequest } from 'fastify';
import * as api from './api';
import * as crud from './crud';
import * as mongo from './mongo';

declare module '@smithjke/2p-core/api' {
  export interface RequestMetaData extends FastifyRequest {}
}

export default {
  api,
  crud,
  mongo,
};
