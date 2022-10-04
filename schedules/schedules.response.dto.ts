import { Expose } from 'class-transformer'
import { CanceledReasonEnum } from './canceled.reason.enum'

export default class SchedulesDto {

  @Expose()
  id: string

  @Expose()
  userId: string

  @Expose()
  professionalId: string

  @Expose()
  serviceId: string

  @Expose()
  scheduled: Date

  @Expose()
  canceledAt: Date

  @Expose()
  canceledBy: string

  @Expose()
  canceledReason: CanceledReasonEnum
}