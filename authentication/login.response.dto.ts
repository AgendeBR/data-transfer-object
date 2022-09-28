import { Expose } from 'class-transformer'

export default class LoginResponseDto {

  @Expose()
  id: string

  @Expose()
  access_token: string

}