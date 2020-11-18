const dialect = process.env.DIALECT || "mysql";
const host = process.env.HOST || "localhost";
const user = process.env.DATABASE_USER || "root";
const password = process.env.DATABASE_PASSWORD || "root";
const db = process.env.DATABASE_NAME || "cego";

const databaseConfig = {
  dialect,
  host,
  user,
  password,
  db,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export default databaseConfig;
