import { Expose } from 'class-transformer'
import { IsArray, IsInt, IsMongoId, IsOptional, Max, Min } from 'class-validator'
import { ObjectId } from 'mongodb'
import { CommentWithPublicUser } from './CommentWithPublicUser'

export class GetCommentsWithPublicUsersInputs {
  @Expose()
  @IsOptional()
  @IsMongoId()
  targetId?: ObjectId

  @Expose()
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(100000)
  page?: number
}

export class GetCommentsWithPublicUsersOutputs {
  @Expose()
  @IsArray()
  commentsWithPublicUsers!: CommentWithPublicUser[]
}
