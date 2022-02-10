// prettier-ignore
import { IsDate, IsMongoId, Length, Matches } from 'class-validator'
import { ObjectId } from 'mongodb'

import { getModel, Index, Property } from '../../helpers/typegoose'

@Index({ username: 1 })
export class User {
  @IsMongoId()
  readonly _id!: ObjectId

  @Property({ required: true, unique: true, index: true })
  @Length(2, 20)
  @Matches(/^[a-zA-Z0-9_]*$/, { message: 'Username can only contain letters, numbers and underscores' })
  username!: string

  @Property({ required: true })
  hashedPassword!: string

  @IsDate()
  createdAt!: Date

  @IsDate()
  updatedAt!: Date
}

export const UserModel = getModel(User, { schemaOptions: { timestamps: true } })
