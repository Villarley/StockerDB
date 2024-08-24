import { User } from "../models/user";
import bcrypt from "bcrypt";
import { CreationAttributes } from "sequelize";

interface UserData {
  email: string;
  companyName: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const createUser = async (userData: UserData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const userAttributes: CreationAttributes<User> = {
    email: userData.email,
    companyName: userData.companyName,
    password: hashedPassword,
  };

  return await User.create(userAttributes);
};

export const loginUser = async (loginData: LoginData) => {
  const user = await User.findOne({ where: { email: loginData.email } });

  if (!user) {
    throw new Error("Invalid credentials: user not found.");
  }

  const isPasswordValid = await bcrypt.compare(loginData.password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid credentials: incorrect password.");
  }

  const { password, ...userWithoutPassword } = user.toJSON();
  return userWithoutPassword;
};
