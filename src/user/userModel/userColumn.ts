import { DataType } from 'sequelize-typescript'

export const idUserColumn = {
  type: DataType.INTEGER,
  unique: true,
  autoIncrement: true,
  primaryKey: true,
}

export const emailUserColumn = {
  type: DataType.STRING,
  unique: true,
  allowNull: false,
}

export const passwordColumn = {
  type: DataType.STRING,
  allowNull: false,
}

export const usernameUserColumn = {
  type: DataType.STRING,
  unique: true,
  allowNull: false,
}
