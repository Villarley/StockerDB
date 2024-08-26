import sequelize from "../config/database";
import { User } from "./user";
import { Food } from "./food";
import { Supply } from "./supply";
import { Furniture } from "./furniture";

sequelize.addModels([User, Food, Supply, Furniture]);

export { sequelize };
