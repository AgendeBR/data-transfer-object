import { Expose } from 'class-transformer'
import { ServiceOrderStatusEnum } from './service.order.status.enum'

export default class ServicesOrderDto {

  @Expose()
  userId: string

  @Expose()
  gatewayId: string

  @Expose()
  status: ServiceOrderStatusEnum

  @Expose()
  description: string

  @Expose()
  schedulesId: string[]

  @Expose()
  productsId: string[]

  @Expose()
  createdAt: Date
  @Expose()
  updatedAt: Date

}