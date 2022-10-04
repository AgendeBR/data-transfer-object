import { IsNotEmpty, IsString, IsUUID } from 'class-validator'

export default class ProfessionalsCreateDto {

  @IsUUID()
  @IsNotEmpty()
  userId: string

  @IsString()
  @IsNotEmpty()
  name: string

}