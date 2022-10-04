import { Expose } from 'class-transformer'

export default class ProfessionalsDto {

  @Expose()
  id: string

  @Expose()
  userId: string

  @Expose()
  name: string

  @Expose()
  createdAt: Date
  @Expose()
  createdBy: string

  @Expose()
  updatedAt: Date
  @Expose()
  updatedBy: string

}