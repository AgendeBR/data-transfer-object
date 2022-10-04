import { Type } from 'class-transformer'
import { IsDate, IsNotEmpty, IsUUID } from 'class-validator'

export default class SchedulesCreateDto {

  @IsUUID()
  @IsNotEmpty()
  userId: string

  @IsUUID()
  @IsNotEmpty()
  professionalId: string

  @IsUUID()
  @IsNotEmpty()
  serviceId: string

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  scheduled: Date

}