import { Expose, Type } from "class-transformer"
import { IsOptional, ValidateNested } from "class-validator"

import { LocationModel } from "./location.model"
import { WeeklyScheduleModel } from "./weekly-schedule.model"
import { LocationExposeGroup } from "../interfaces"

export class ServiceModel extends LocationModel {
  @Expose({ groups: [LocationExposeGroup.READ, LocationExposeGroup.WRITE, LocationExposeGroup.UPDATE] })
  @IsOptional({ groups: [LocationExposeGroup.UPDATE] })
  @Type(() => WeeklyScheduleModel)
  @ValidateNested({ always: true })
  schedule: WeeklyScheduleModel
}
