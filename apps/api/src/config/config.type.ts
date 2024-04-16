export interface CommonConfig {
  env: string;
  port: number;
}

export interface DatabaseConfig {
  DB_HOST: string;
  DB_PORT: number;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_DATABASE: string;
}

export interface Config extends CommonConfig, DatabaseConfig {}
