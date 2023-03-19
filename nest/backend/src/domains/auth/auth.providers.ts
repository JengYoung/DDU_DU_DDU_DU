import { JWTStrategy } from './../../common/jwt/jwt.strategy';
import { DataSource } from 'typeorm';
import { databaseToken, repositoryToken } from 'src/common/tokens';
import { Auth } from './entities/auth.entity';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';

export const authProviders = [
  ConfigService,
  {
    provide: repositoryToken.auth,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Auth),
    inject: [databaseToken.postgresql],
  },
  AuthService,
  JWTStrategy,
];
