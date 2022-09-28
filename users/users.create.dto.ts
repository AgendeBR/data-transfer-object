import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator"
import { IsPhone } from "src/common/decorators/phone.validator"
import { RegexHelper } from "src/common/helpers/regex.helper"

export default class UsersCreateDto {

  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsOptional()
  nickname: string

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string
  
  @IsString()
  @IsNotEmpty()
  @IsPhone()
  phone: string

  @IsString()
  @IsNotEmpty()
  @Matches(RegexHelper.PASSWORD)
  password: string

}