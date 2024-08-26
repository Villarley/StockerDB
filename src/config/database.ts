import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { User } from "../models/user"
import { Food } from "../models/food";
import path from "path";
import { Supply } from "../models/supply";
import { Furniture } from "../models/furniture";


dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL! , {
  dialect: "postgres",
  models: [User, Food, Supply, Furniture],
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export default sequelize;
