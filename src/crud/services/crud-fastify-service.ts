import { BaseCrudType, CrudFindAllQuery, CrudFindAllResult, CrudService } from '@smithjke/2p-core/crud';
import { FastifyService } from '../../api';

export abstract class CrudFastifyService<T extends BaseCrudType> extends FastifyService implements CrudService<T> {
  async create(data: T['createEntity']): Promise<T['singleEntity']> {
    throw new Error('Not Implemented');
  }

  async update(data: T['updateEntity'], params: T['entityKey']): Promise<T['singleEntity']> {
    throw new Error('Not Implemented');
  }

  async remove(params: T['entityKey']): Promise<void> {
    throw new Error('Not Implemented');
  }

  async findOne(params: T['entityKey']): Promise<T['singleEntity']> {
    throw new Error('Not Implemented');
  }

  async findAll(query?: CrudFindAllQuery<T>): Promise<CrudFindAllResult<T>> {
    throw new Error('Not Implemented');
  }
}
