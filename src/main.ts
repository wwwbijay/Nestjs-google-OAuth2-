import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(
    session({
      secret: '3EDBFA63BC5AAA9F1CE6E9D5A2E97',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000
      }
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3001);
}
bootstrap();
