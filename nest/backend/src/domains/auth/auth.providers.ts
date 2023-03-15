import { DataSource } from 'typeorm';
import { databaseToken, repositoryToken } from 'src/common/tokens';
import { Auth } from './entities/auth.entity';

export const authProviders = [
  {
    provide: repositoryToken.todos,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Auth),
    inject: [databaseToken.postgresql],
  },
];
