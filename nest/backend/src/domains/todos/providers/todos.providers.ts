import { databaseToken, repositoryToken } from 'src/common/tokens';
import { DataSource } from 'typeorm';
import { Todos } from '../entities/todos.entity';

export const todosProviders = [
  {
    provide: repositoryToken.todos,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Todos),
    inject: [databaseToken.postgresql],
  },
];
