import { Expose } from 'class-transformer'
import { IsOptional } from 'class-validator'

import { PublicUser } from '../user/PublicUser'
import { Comment } from './Comment'

export class CommentWithPublicUser {
  @Expose()
  comment!: Comment

  @Expose()
  @IsOptional()
  publicUser?: PublicUser
}
