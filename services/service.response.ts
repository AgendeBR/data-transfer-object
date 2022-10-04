import { Expose } from 'class-transformer'

export default class ServiceDto {

  @Expose()
  id: string

  @Expose()
  name: string

  @Expose()
  price: number

  @Expose()
  duration: number

  @Expose()
  createdAt: Date
  @Expose()
  createdBy: string

  @Expose()
  updatedAt: Date
  @Expose()
  updatedBy: string

}