import { Expose } from 'class-transformer'
import { IsJWT, Length, Matches } from 'class-validator'

import { Jwt } from './Jwt'
import { PublicUser } from './PublicUser'

export class LoginInputs {
  @Expose()
  @Length(2, 20)
  @Matches(/^[a-zA-Z0-9_]*$/, { message: 'Username can only contain letters, numbers and underscores' })
  username!: string

  @Expose()
  @Length(8, 100)
  hashedPassword!: string
}

export class LoginOutputs {
  @Expose()
  @IsJWT()
  jwt!: Jwt

  @Expose()
  publicUser!: PublicUser
}
