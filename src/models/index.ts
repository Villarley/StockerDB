import sequelize from "../config/database";
import { User } from "./user";

sequelize.addModels([User]);

export { sequelize, User };
