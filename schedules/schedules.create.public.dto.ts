import { Type } from 'class-transformer'
import { IsDate, IsNotEmpty, IsString, IsUUID } from 'class-validator'
import { IsPhone } from 'src/common/decorators/phone.validator'

export default class SchedulesCreatePublicDto {

  @IsString()
  @IsNotEmpty()
  fullname: string
  
  @IsString()
  @IsNotEmpty()
  @IsPhone()
  phone: string

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  bornAt: Date

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