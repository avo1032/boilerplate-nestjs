import * as Joi from 'joi';

export interface EnvironmentVariables {
  NODE_ENV: string;
  PORT: number;
  DATABASE: {
    TYPE: 'mysql' | 'postgres';
    HOST: string;
    PORT: number;
    USERNAME: string;
    PASSWORD: string;
    NAME: string;
  };
  SAMPLE_SERVER_ADDR: string;
}

export const getEnvConfig = () => ({
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DATABASE: {
    TYPE: process.env.DATABASE_TYPE,
    HOST: process.env.DATABASE_HOST,
    PORT: process.env.DATABASE_PORT,
    USERNAME: process.env.DATABASE_USERNAME,
    PASSWORD: process.env.DATABASE_PASSWORD,
    NAME: process.env.DATABASE_NAME,
  },
  SAMPLE_SERVER_ADDR: process.env.SAMPLE_SERVER_ADDR,
});

export const environmentSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
  PORT: Joi.number().default(3000).required(),
  DATABASE: {
    TYPE: Joi.string().valid('mysql', 'postgres').required(),
    HOST: Joi.string().required(),
    PORT: Joi.number().required(),
    USERNAME: Joi.string().required(),
    PASSWORD: Joi.string().required(),
    NAME: Joi.string().required(),
  },
  SAMPLE_SERVER_ADDR: Joi.string().required(),
});
