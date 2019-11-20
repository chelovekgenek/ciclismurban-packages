import { Expose, Type } from "class-transformer"
import { ValidateNested, IsString, IsUrl, Length, IsOptional } from "class-validator"

import { PointModel } from "../../shared/point"
import { LocationExposeGroup } from "../interfaces"

export class LocationModel {
  @Expose({ groups: [LocationExposeGroup.READ] })
  uuid: string

  @Expose({ groups: [LocationExposeGroup.READ] })
  userId: string

  @Expose({ groups: [LocationExposeGroup.READ, LocationExposeGroup.WRITE, LocationExposeGroup.UPDATE] })
  @IsString({ always: true })
  @Length(3, undefined, { always: true })
  @IsOptional({ groups: [LocationExposeGroup.UPDATE] })
  title: string

  @Expose({ groups: [LocationExposeGroup.READ, LocationExposeGroup.WRITE, LocationExposeGroup.UPDATE] })
  @IsOptional({ groups: [LocationExposeGroup.UPDATE] })
  @IsString({ always: true })
  description: string

  @Expose({ groups: [LocationExposeGroup.READ, LocationExposeGroup.WRITE, LocationExposeGroup.UPDATE] })
  @IsOptional({ groups: [LocationExposeGroup.UPDATE] })
  @IsUrl({}, { always: true })
  image: string

  @Expose({ groups: [LocationExposeGroup.READ, LocationExposeGroup.WRITE, LocationExposeGroup.UPDATE] })
  @IsOptional({ groups: [LocationExposeGroup.UPDATE] })
  @Type(() => PointModel)
  @ValidateNested({ always: true })
  point: PointModel

  @Expose({ groups: [LocationExposeGroup.READ] })
  createdAt: Date

  @Expose({ groups: [LocationExposeGroup.READ] })
  updatedAt: Date
}
