import { Expose } from 'class-transformer'
import ProfessionalsDto from '../professionals/professionals.response.dto'
import { CanceledReasonEnum } from './canceled.reason.enum'

export default class SchedulesDto {

  @Expose()
  id: string

  @Expose()
  userId: string

  @Expose()
  professionalId: string

  @Expose()
  professional: ProfessionalsDto

  @Expose()
  serviceId: string

  @Expose()
  fullname: string

  @Expose()
  phone: string

  @Expose()
  bornAt: Date

  @Expose()
  scheduled: Date

  @Expose()
  canceledAt: Date

  @Expose()
  canceledBy: string

  @Expose()
  canceledReason: CanceledReasonEnum
}