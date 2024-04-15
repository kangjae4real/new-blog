import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { ConfigService } from '@/config/config.service';
import { setUpSwagger } from '@/swagger/swagger';

async function app() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get('port');

  setUpSwagger(app);

  await app.listen(port);
}

app();
