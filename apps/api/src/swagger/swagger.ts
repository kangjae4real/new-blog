import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

export type SwaggerUtilParams<ReturnType = void> = (
  app: INestApplication,
  title?: string,
  path?: string,
) => ReturnType;

export const getDocument: SwaggerUtilParams<OpenAPIObject> = (
  app,
  title,
): OpenAPIObject => {
  const config = new DocumentBuilder()
    .setTitle(title ?? 'Kangjae Choi - Blog API')
    .build();

  return SwaggerModule.createDocument(app, config);
};

export const setUpSwagger: SwaggerUtilParams = (app, _, path): void => {
  SwaggerModule.setup(path ?? 'docs', app, getDocument(app));
};
