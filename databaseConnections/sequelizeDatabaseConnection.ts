// const { Sequelize } = require('sequelize');
import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv'
dotenv.config({
    override: true,
    path: '.env',
  });

const database = process.env.DATABASE_NAME || "cloudadventure";
const username = process.env.DATABASE_USERNAME|| "cloudadventure";
const password = process.env.DATABASE_PASSWORD || "vinaysai02";
const host = process.env.DATABASE_HOST;
const dialect = process.env.DATABASE_DIALECT

export const sequelizeConnection = new Sequelize(database, username, password, {
    dialect: "postgres",
    dialectOptions:{
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    host: host,
});