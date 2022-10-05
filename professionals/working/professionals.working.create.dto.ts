import { Type } from 'class-transformer'
import { IsDate, IsEnum, IsNotEmpty, IsUUID } from 'class-validator'
import { WeekDayEnum } from 'src/data-transfer-object/date/weekday.enum'

export default class ProfessionalsWorkingCreateDto {

  @IsUUID()
  @IsNotEmpty()
  professionalId: string

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  startAt: Date

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  endAt: Date

  @IsEnum(WeekDayEnum)
  @IsNotEmpty()
  weekDay: WeekDayEnum

}