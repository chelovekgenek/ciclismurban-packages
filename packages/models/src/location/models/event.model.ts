import { Expose } from "class-transformer"
import { IsISO8601, IsOptional } from "class-validator"

import { LocationModel } from "./location.model"
import { LocationExposeGroup } from "../interfaces"

export class EventModel extends LocationModel {
  @Expose({ groups: [LocationExposeGroup.READ, LocationExposeGroup.WRITE, LocationExposeGroup.UPDATE] })
  @IsOptional({ groups: [LocationExposeGroup.UPDATE] })
  @IsISO8601({ always: true })
  startedAt: string
}
