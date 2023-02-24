import dotenv from 'dotenv';
import { Dialect } from 'sequelize';

dotenv.config();

type configInterface = {
  [key:string]: configDBInterface
}

type configDBInterface ={
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number;
  dialect?: Dialect;
  url?: string;
}

const config: configInterface = {
  development: {
    username: process.env.DB_ROOT_USER,
    password: process.env.DB_ROOT_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: process.env.DB_DRIVER as Dialect
  },
  test: {
    username: process.env.DB_ROOT_USER_TEST,
    password: process.env.DB_ROOT_PASSWORD_TEST,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST_TEST,
    port: Number(process.env.DB_PORT_TEST),
    dialect: process.env.DB_DRIVER_TEST as Dialect
  },
  production: {
    username: process.env.DB_ROOT_USER_PRODUCTION,
    password: process.env.DB_ROOT_PASSWORD_PRODUCTION,
    database: process.env.DB_NAME_PRODUCTION,
    host: process.env.DB_HOST_PRODUCTION,
    port: Number(process.env.DB_PORT_PRODUCTION),
    dialect: process.env.DB_DRIVER_PRODUCTION as Dialect
  }
}

export default config;
module.exports = config;