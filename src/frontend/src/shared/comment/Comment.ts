// prettier-ignore
import { IsArray, IsDate, IsMongoId, IsOptional, Length } from 'class-validator'
import { ObjectId } from 'mongodb'

import { Mongoose, getModel, Index, Property } from '../../helpers/typegoose'

@Index({ targetId: 1 })
export class Comment {
  @IsMongoId()
  readonly _id!: ObjectId

  @Property({ nullable: true, optional: true, ref: 'Comment' })
  @IsOptional()
  @IsMongoId()
  targetId?: ObjectId

  @Property({ required: true, ref: 'User' })
  @IsMongoId()
  userId!: ObjectId

  @Property({ nullable: true, optional: true, type: [Mongoose.Schema.Types.ObjectId], ref: 'Comment' })
  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  replyIds?: ObjectId[]

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @Length(2, 10000, { message: 'Comment must be longer than 2 characters' })
  content?: string

  @IsDate()
  createdAt?: Date

  @IsDate()
  updatedAt?: Date
}

export const CommentModel = getModel(Comment, { schemaOptions: { timestamps: true } })
