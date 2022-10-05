import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export default class ProductsCreateDto {

  @IsString()
  @IsNotEmpty()
  name: string

  @IsNumber()
  @IsNotEmpty()
  price: number

  @IsNumber()
  @IsNotEmpty()
  amount: number

}