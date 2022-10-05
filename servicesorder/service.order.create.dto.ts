import { Type } from 'class-transformer'
import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator'
import { ServiceOrderStatusEnum } from './service.order.status.enum'

export default class ServicesOrderCreateDto {

  @IsUUID()
  @IsNotEmpty()
  userId: string

  @IsUUID()
  @IsNotEmpty()
  gatewayId: string

  @IsEnum(ServiceOrderStatusEnum)
  @IsOptional()
  status?: ServiceOrderStatusEnum

  @IsString()
  @IsOptional()
  description?: string

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => String)
  schedulesId: string[]

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => String)
  productsId: string[]

}