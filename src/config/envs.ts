import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  POSTS_MICROSERVICE_PORT: number;
  POSTS_MICROSERVICE_HOST: string;
  DETAILS_MICROSERVICE_PORT: number;
  DETAILS_MICROSERVICE_HOST: string;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    POSTS_MICROSERVICE_HOST: joi.string().required(),
    POSTS_MICROSERVICE_PORT: joi.number().required(),
    DETAILS_MICROSERVICE_HOST: joi.string().required(),
    DETAILS_MICROSERVICE_PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  postsMicroserviceHost: envVars.POSTS_MICROSERVICE_HOST,
  postsMicroservicePort: envVars.POSTS_MICROSERVICE_PORT,
  detailsMicroserviceHost: envVars.DETAILS_MICROSERVICE_HOST,
  detailsMicroservicePort: envVars.DETAILS_MICROSERVICE_PORT,
};
