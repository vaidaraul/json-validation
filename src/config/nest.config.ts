export const TYPES = {
  IJSONService: Symbol.for('IJSONService'),
  IDatabaseStorageService: Symbol.for('IDatabaseStorageService'),
};

import { Provider } from '@nestjs/common';
import { DatabaseStorageService } from 'src/json/services/DatabaseStorageService';
import { JSONService } from 'src/json/services/JSONService';

export const configJSONModuleProvider: Provider<any>[] = [
  {
    provide: TYPES.IJSONService,
    useClass: JSONService,
  },
  {
    provide: TYPES.IDatabaseStorageService,
    useClass: DatabaseStorageService,
  },
];
