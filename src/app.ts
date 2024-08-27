import express from "express";
import userRoutes from "./routes/userRoutes";
import foodRoutes from "./routes/foodRoutes"
import supplyRoutes from "./routes/supplyRoutes"
import furnitureRoutes from "./routes/furnitureRoutes"
import { sequelize } from "./models";
import cors from "cors";

const app = express();


app.use(cors()); // Add this line
app.use(express.json());
app.use("/auth", userRoutes);
app.use("/foods", foodRoutes);
app.use("/supply", supplyRoutes);
app.use("/furniture", furnitureRoutes);


sequelize.sync({force:true})
  .then(() => {
    console.log("Database connected!");
  })
  .catch(err => {
    console.error("Error connecting to the database: ", err);
  });

export default app;
