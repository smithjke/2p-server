import { AnyCrudType, CrudSchema, CrudService } from '@smithjke/2p-core/crud';

export type CrudRouteProps<T extends AnyCrudType> = {
  crudService: CrudService<T>;
  crudSchema: CrudSchema;
};
