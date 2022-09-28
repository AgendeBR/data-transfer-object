import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export default class LoginRequestDto {

  @IsString()
  @IsOptional()
  login: string

  @IsString()
  @IsNotEmpty()
  password: string

}