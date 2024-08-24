import express from "express";
import userRoutes from "./routes/userRoutes";
import { sequelize } from "./models";

const app = express();

app.use(express.json());
app.use("/auth", userRoutes);

sequelize.sync({force:true})
  .then(() => {
    console.log("Database connected!");
  })
  .catch(err => {
    console.error("Error connecting to the database: ", err);
  });

export default app;
