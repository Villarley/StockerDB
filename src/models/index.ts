import sequelize from "../config/database";
import { User } from "./user";
import { Food } from "./food";

sequelize.addModels([User, Food]);

export { sequelize, User };
