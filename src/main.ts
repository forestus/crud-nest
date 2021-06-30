import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EntityNotFounExceptiondError } from './exception-filters/entity-not-found-exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new EntityNotFounExceptiondError())
  await app.listen(3000);
}
bootstrap();
