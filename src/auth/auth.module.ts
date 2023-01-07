import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './utils/GoogleStrategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [
    GoogleStrategy,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService
    }
  ]
})
export class AuthModule { }
