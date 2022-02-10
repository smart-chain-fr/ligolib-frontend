import { Expose } from 'class-transformer'
import { IsMongoId, IsOptional, Length } from 'class-validator'
import { ObjectId } from 'mongodb'
import { CommentWithPublicUser } from './CommentWithPublicUser'

export class NewCommentInputs {
  @Expose()
  @IsOptional()
  @Length(2, 10000, { message: 'Comment must be longer than 2 characters' })
  content?: string

  @Expose()
  @IsOptional()
  @IsMongoId()
  targetId?: ObjectId
}

export class NewCommentOutputs {
  @Expose()
  commentWithPublicUser!: CommentWithPublicUser
}
