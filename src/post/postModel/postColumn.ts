import { DataType } from 'sequelize-typescript'

export const idPostColumn = {
  type: DataType.INTEGER,
  unique: true,
  autoIncrement: true,
}

export const postUrlColumn = {
  type: DataType.STRING,
  allowNull: false,
}

export const titleColumn = {
  type: DataType.STRING,
  allowNull: false,
}

export const descriptionColumn = {
  type: DataType.STRING,
  allowNull: false,
}
