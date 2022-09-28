import { IsNotEmpty, IsString } from 'class-validator'

export default class RefreshTokenDto {

  @IsString()
  @IsNotEmpty()
  access_token: string

}