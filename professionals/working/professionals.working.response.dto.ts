import { Expose } from 'class-transformer'
import { WeekDayEnum } from 'src/data-transfer-object/date/weekday.enum'

export default class ProfessionalsWorkingDto {

  @Expose()
  id: string

  @Expose()
  professionalId: string

  @Expose()
  startAt: Date

  @Expose()
  endAt: Date

  @Expose()
  weekDay: WeekDayEnum

  @Expose()
  createdAt: Date
  @Expose()
  createdBy: string

  @Expose()
  updatedAt: Date
  @Expose()
  updatedBy: string

}