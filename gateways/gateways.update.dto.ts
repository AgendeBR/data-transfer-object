import { IsOptional, IsString } from 'class-validator'

export default class GatewayUpdateDto {

  @IsString()
  @IsOptional()
  name: string

  @IsString()
  @IsOptional()
  description: string

}