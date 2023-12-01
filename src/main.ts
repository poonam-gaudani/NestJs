import { NestFactory } from '@nestjs/core';
import { RootModule } from './Root.module';
import { Request, Response, NextFunction } from 'express';

function isAuth (req: Request, res: Response, next: NextFunction) {
 console.log('Inside is auth middleware');
 next();
}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(isAuth);
  await app.listen(3000);
}
bootstrap();
