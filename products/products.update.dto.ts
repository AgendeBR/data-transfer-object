import { IsNumber, IsOptional, IsString } from 'class-validator'

export default class ProductsUpdateDto {

  @IsString()
  @IsOptional()
  name: string

  @IsNumber()
  @IsOptional()
  price: number

  @IsNumber()
  @IsOptional()
  amount: number

}