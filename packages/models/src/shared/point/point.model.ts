import { Expose } from "class-transformer"
import { IsNumber } from "class-validator"

import { ExposeGroup } from "./point.interface"

export class PointModel {
  @Expose({ groups: [ExposeGroup.READ, ExposeGroup.WRITE, ExposeGroup.UPDATE] })
  @IsNumber({}, { always: true })
  lat: number

  @Expose({ groups: [ExposeGroup.READ, ExposeGroup.WRITE, ExposeGroup.UPDATE] })
  @IsNumber({}, { always: true })
  lng: number
}
