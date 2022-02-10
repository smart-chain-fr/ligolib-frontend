import { IsDate, IsMongoId, Length, Matches } from 'class-validator'
import { ObjectId } from 'mongodb'

export const PUBLIC_USER_MONGO_SELECTOR = '_id username createdAt'

export class PublicUser {
  @IsMongoId()
  readonly _id!: ObjectId

  @Length(2, 20)
  @Matches(/^[a-zA-Z0-9_]*$/, { message: 'Username can only contain letters, numbers and underscores' })
  username!: string

  @IsDate()
  createdAt!: Date
}
