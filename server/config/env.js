'use strict';

const env = {
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://postgres@postgres:5432/test',
  DATABASE_NAME: process.env.DATABASE_NAME || 'test',
  DATABASE_HOST: process.env.DATABASE_HOST || 'postgres',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'postgres',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '',
  DATABASE_PORT: process.env.DATABASE_PORT || 5432,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'postgres'
};

module.exports = env;
