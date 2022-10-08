import { RequestMetaData } from '@smithjke/2p-core/api';
import { CrudFindAllQuery, CrudFindAllResult } from '@smithjke/2p-core/crud';
import { Schema } from '@smithjke/2p-core/examples';

export class Service implements Schema.Example.EntityService {
  async create(
    data: Schema.Example.EntityCrudType['createEntity'],
    requestMetaData?: RequestMetaData,
  ): Promise<Schema.Example.EntityCrudType['singleEntity']> {
    throw new Error('Not Implemented');
  }

  async update(
    data: Schema.Example.EntityCrudType['updateEntity'],
    params: Schema.Example.EntityCrudType['entityKey'],
    requestMetaData?: RequestMetaData,
  ): Promise<Schema.Example.EntityCrudType['singleEntity']> {
    throw new Error('Not Implemented');
  }

  async remove(
    params: Schema.Example.EntityCrudType['entityKey'],
    requestMetaData?: RequestMetaData,
  ): Promise<void> {
    throw new Error('Not Implemented');
  }

  async findOne(
    params: Schema.Example.EntityCrudType['entityKey'],
    requestMetaData?: RequestMetaData,
  ): Promise<Schema.Example.EntityCrudType['singleEntity']> {
    throw new Error('Not Implemented');
  }

  async findAll(
    query?: CrudFindAllQuery<Schema.Example.EntityCrudType['entityOrderField'], Schema.Example.EntityCrudType['entityFilter']>,
    requestMetaData?: RequestMetaData,
  ): Promise<CrudFindAllResult<Schema.Example.EntityCrudType['listedEntity']>> {
    throw new Error('Not Implemented');
  }

  async superCreate(
    data: Schema.Example.CreateEntity,
    requestMetaData?: RequestMetaData,
  ): Promise<Schema.Example.SingleEntity> {
    throw new Error('Not Implemented');
  }

  async superUpdate(
    data: Schema.Example.UpdateEntity,
    params: Schema.Example.EntityKey,
    requestMetaData?: RequestMetaData,
  ): Promise<Schema.Example.SingleEntity> {
    throw new Error('Not Implemented');
  }
}
