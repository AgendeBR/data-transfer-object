import { Type } from 'class-transformer'
import { IsDate, IsEnum, IsOptional, IsString, IsUUID } from 'class-validator'
import { CanceledReasonEnum } from './canceled.reason.enum'

export default class SchedulesUpdateDto {

  @IsUUID()
  @IsOptional()
  userId: string

  @IsUUID()
  @IsOptional()
  professionalId: string

  @IsUUID()
  @IsOptional()
  serviceId: string

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  scheduled: Date

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  canceledAt: Date

  @IsString()
  @IsOptional()
  canceledBy: string

  @IsEnum(CanceledReasonEnum)
  @IsOptional()
  canceledReason: CanceledReasonEnum

}