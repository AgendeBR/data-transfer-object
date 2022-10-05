import { Expose } from 'class-transformer'

export default class ProductsDto {

  @Expose()
  id: string

  @Expose()
  name: string

  @Expose()
  price: number

  @Expose()
  amount: number

}