import databaseConfig from "../config/databaseConfig";

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  databaseConfig.db,
  databaseConfig.user,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect,
    operatorsAliases: false,
    pool: databaseConfig.pool,
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
