import { Expose } from 'class-transformer'

export default class GatewayDto {

  @Expose()
  id: string

  @Expose()
  name: string

  @Expose()
  description: string

  @Expose()
  createdAt: Date
  @Expose()
  createdBy: string

  @Expose()
  updatedAt: Date
  @Expose()
  updatedBy: string

}