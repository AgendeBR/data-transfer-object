import { Type } from 'class-transformer'
import { IsArray, IsEnum, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator'
import { ServiceOrderStatusEnum } from './service.order.status.enum'

export default class ServicesOrderUpdateDto {

  @IsUUID()
  @IsOptional()
  userId: string

  @IsUUID()
  @IsOptional()
  gatewayId: string

  @IsEnum(ServiceOrderStatusEnum)
  @IsOptional()
  status?: ServiceOrderStatusEnum

  @IsString()
  @IsOptional()
  description?: string

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => String)
  schedulesId: string[]

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => String)
  productsId: string[]

}