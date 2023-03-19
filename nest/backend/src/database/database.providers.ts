import { databaseToken } from 'src/common/tokens';
import { DataSource } from 'typeorm';

const synchronize = {
  DEV: true,
  PROD: false,
};

export const databaseProviders = [
  // ConfigService,
  {
    provide: databaseToken.postgresql,
    useFactory: async () => {
      const port = Number(process.env.POSTGRES_PORT);

      const dataSource = new DataSource({
        host: 'localhost',
        type: 'postgres',
        port,
        username: 'postgres',
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        // 다시 실행 시 엔티티 안에서 수정된 컬럼의 길이 타입 변경값등을 해당 테이블을 drop하고 다시 생성.
        synchronize: synchronize[process.env.NODE_ENV] as boolean,
      });

      return dataSource.initialize();
    },
  },
];
