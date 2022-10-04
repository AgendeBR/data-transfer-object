import { IsNumber, IsOptional, IsString } from 'class-validator'

export default class ServiceUpdateDto {

  @IsString()
  @IsOptional()
  name: string

  @IsNumber()
  @IsOptional()
  price: number

  @IsNumber()
  @IsOptional()
  duration: number

}