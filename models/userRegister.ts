const { DataTypes } = require('sequelize');
import { sequelizeConnection } from "../databaseConnections/sequelizeDatabaseConnection";
export const User = sequelizeConnection.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  imageURL: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
  }
});
