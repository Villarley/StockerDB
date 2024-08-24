import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { User } from "../models/user"
import { Food } from "../models/food";
import path from "path";

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL! , {
  dialect: "postgres",
  models: [User, Food],
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export default sequelize;
