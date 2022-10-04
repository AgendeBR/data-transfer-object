import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export default class ServiceCreateDto {

  @IsString()
  @IsNotEmpty()
  name: string

  @IsNumber()
  @IsNotEmpty()
  price: number

  @IsNumber()
  @IsNotEmpty()
  duration: number

}