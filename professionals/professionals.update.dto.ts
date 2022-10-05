import { IsOptional, IsString, IsUUID } from 'class-validator'

export default class ProfessionalsUpdateDto {

  @IsUUID()
  @IsOptional()
  userId: string

  @IsString()
  @IsOptional()
  name: string

}