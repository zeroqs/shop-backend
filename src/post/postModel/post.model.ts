import { Column, Model, Table } from 'sequelize-typescript'
import { IPostCreate } from './iPostCreate'
import {
  descriptionColumn,
  idPostColumn,
  postUrlColumn,
  titleColumn,
} from './postColumn'

@Table
export class Post extends Model<Post, IPostCreate> {
  @Column(idPostColumn)
  id: string

  @Column(postUrlColumn)
  url: string

  @Column(titleColumn)
  title: string

  @Column(descriptionColumn)
  description: string
}
