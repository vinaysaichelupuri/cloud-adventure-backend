const { Sequelize } = require('sequelize');
import * as dotenv from 'dotenv'
dotenv.config({
    override: true,
    path: '.env',
  });

const database = process.env.DATABASE_NAME|| 'database-2'
const username = process.env.DATABASE_USERNAME || 'cloudadventure';
const password = process.env.DATABASE_PASSWORD || 'vinaysai';
const host = process.env.DATABASE_HOST || 'database-2.cja0gy6g8226.ap-south-1.rds.amazonaws.com';
const dialect = process.env.DATABASE_DIALECT || 'postgres'

export const sequelizeConnection = new Sequelize(database, username, password, {
    host: host,
    dialect: dialect,
    dialectOpitions:{
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
});