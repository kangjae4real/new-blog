import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

export type SwaggerUtilParams<Return = void> = (
  app: INestApplication,
  title?: string,
  path?: string,
) => Return;

export const getDocument: SwaggerUtilParams<OpenAPIObject> = (app, title) => {
  const config = new DocumentBuilder()
    .setTitle(title ?? 'Kangjae Choi - Blog API')
    .build();

  return SwaggerModule.createDocument(app, config);
};

export const setUpSwagger: SwaggerUtilParams = (app, _, path) => {
  SwaggerModule.setup(path ?? 'docs', app, getDocument(app));
};
