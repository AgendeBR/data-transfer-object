import { IsNotEmpty, IsString } from 'class-validator'

export default class GatewayCreateDto {

  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  description: string

}