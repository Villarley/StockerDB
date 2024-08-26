import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Optional } from "sequelize";
import { User } from "./user"; // Import the User model

interface SupplyAttributes {
  id: string;
  name: string;
  brand: string;
  stock: number;
  companyId: string;
}

interface SupplyCreationAttributes extends Optional<SupplyAttributes, "id"> {}

@Table({
  tableName: "supplies",
  timestamps: true,
})
export class Supply extends Model<SupplyAttributes, SupplyCreationAttributes> {
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
  brand!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  category!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  stock!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  companyId!: string;

  @BelongsTo(() => User)
  company!: User;
}
