import { IsEmail, IsOptional, IsString } from "class-validator"
import { IsPhone } from "src/common/decorators/phone.validator"

export default class UsersUpdateDto {

  @IsString()
  @IsOptional()
  name: string

  @IsString()
  @IsOptional()
  @IsEmail()
  email: string
  
  @IsString()
  @IsOptional()
  @IsPhone()
  phone: string

  @IsString()
  @IsOptional()
  nickname: string

}