import { Type } from 'class-transformer'
import { IsDate, IsEnum, IsOptional } from 'class-validator'
import { WeekDayEnum } from 'src/data-transfer-object/date/weekday.enum'

export default class ProfessionalsWorkingUpdateDto {

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  startAt: Date

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  endAt: Date

  @IsEnum(WeekDayEnum)
  @IsOptional()
  weekDay: WeekDayEnum

}