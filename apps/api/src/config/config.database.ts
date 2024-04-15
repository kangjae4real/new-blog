import { DatabaseConfig } from '@/config/config.type';

const databaseConfig: () => DatabaseConfig = () => ({
  DB_HOST: process.env.DB_HOST,
  DB_PORT: parseInt(process.env.DB_PORT, 10),
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE,
});

export default databaseConfig;
