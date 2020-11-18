import app from "./server/server";
import { PORT } from "./config/serverConfig";
import sequelize from "./models";

try {
  sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.");
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen({ port: PORT }, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
