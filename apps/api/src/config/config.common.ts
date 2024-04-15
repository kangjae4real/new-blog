import { CommonConfig } from '@/config/config.type';

const commonConfig: () => CommonConfig = () => ({
  port: parseInt(process.env.PORT, 10) || 8080,
});

export default commonConfig;
