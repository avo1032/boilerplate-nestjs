import { Logger } from '@nestjs/common';
import { config as dotenvConfig } from 'dotenv';
import {
  getEnvConfig,
  environmentSchema,
  EnvironmentVariables,
} from './environment-schema';

export class Config {
  private static instance;
  private static readonly logger = new Logger('Config');

  private constructor() {}

  public static getEnvironment(): EnvironmentVariables {
    if (!Config.instance) {
      const nodeEnv = process.env.NODE_ENV;
      const envFilePath = `.env.${nodeEnv}`;

      dotenvConfig({ path: envFilePath });

      Config.instance = Config.validate(getEnvConfig());
      Config.instance = Object.freeze(Config.instance);
    }

    return Config.instance;
  }

  public static validate(config: Record<string, unknown>) {
    const { error, value } = environmentSchema.validate(config);

    if (error) {
      this.logger.error(`Environment validation failed :: ${error.message}`);
      process.exit(1);
    }

    return value;
  }
}
