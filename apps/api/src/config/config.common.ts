import { CommonConfig } from '@/config/config.type';

const commonConfig: () => CommonConfig = () => ({
  env: process.env.ENV || 'local',
  port: parseInt(process.env.PORT, 10) || 8080,
});

export default commonConfig;
