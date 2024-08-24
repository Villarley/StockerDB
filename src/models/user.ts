import { Table, Column, Model, DataType } from "sequelize-typescript";
import { Optional } from "sequelize";

interface UserAttributes {
  id: string;
  email: string;
  companyName: string;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

@Table({
  timestamps: true,
  tableName: "users",
})
export class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  companyName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;
}
