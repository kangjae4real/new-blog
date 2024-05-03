import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { ConfigService } from '@nestjs/config';
import { setUpSwagger } from '@/swagger/swagger';

async function app() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const configService = app.get(ConfigService);
  const env = configService.get('ENV');
  const port = configService.get('PORT');

  setUpSwagger(app);

  if (env !== 'local') {
    app.enableCors();
  }

  await app.listen(port);
}

app();
