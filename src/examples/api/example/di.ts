import { getDependency } from '@smithjke/2p-core/di';
import { Service } from './service';

export const useExampleService = () => getDependency<Service>('EXAMPLE_SERVICE');
