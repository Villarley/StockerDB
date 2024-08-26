import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Optional } from "sequelize";
import { User } from "./user";

interface FurnitureAttributes {
  id: string;
  name: string;
  state: string;
  companyId: string;
}

interface FurnitureCreationAttributes extends Optional<FurnitureAttributes, "id"> {}

@Table({
  tableName: "furniture",
  timestamps: true,
})
export class Furniture extends Model<FurnitureAttributes, FurnitureCreationAttributes> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  state!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  companyId!: string;

  @BelongsTo(() => User)
  company!: User;
}
