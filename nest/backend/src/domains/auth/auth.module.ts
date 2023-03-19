import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JWTStrategy } from 'src/common/jwt/jwt.strategy';
import { DatabaseModule } from 'src/database/database.module';
import { AuthController } from './auth.controller';
import { authProviders } from './auth.providers';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '3600000s' },
      }),
    }),
    DatabaseModule,
  ],
  controllers: [AuthController],
  providers: authProviders,
  // 다른 모듈에서 사용할 수 있도록 함.
  exports: [JWTStrategy, PassportModule],
})
export class AuthModule {}
