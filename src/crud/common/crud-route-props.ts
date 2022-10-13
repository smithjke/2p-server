import { AnyCrudType, CrudSchema } from '@smithjke/2p-core/crud';
import { CrudFastifyService } from '../services';

export type CrudRouteProps<T extends AnyCrudType> = {
  crudSchema: CrudSchema;
  useCrudFastifyService: () => CrudFastifyService<T>;
};
