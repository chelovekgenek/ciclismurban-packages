import { Expose } from "class-transformer"
import { IsOptional, IsUrl, IsString, IsEnum } from "class-validator"

import { UserExposeGroup, Status } from "../interfaces"

export class ProfileModel {
  @Expose({ groups: [UserExposeGroup.READ, UserExposeGroup.UPDATE] })
  @IsOptional({ groups: [UserExposeGroup.UPDATE] })
  @IsUrl({}, { always: true })
  avatar: string

  @Expose({ groups: [UserExposeGroup.READ, UserExposeGroup.UPDATE] })
  @IsOptional({ groups: [UserExposeGroup.UPDATE] })
  @IsEnum(Status, { always: true })
  status: Status

  @Expose({ groups: [UserExposeGroup.READ, UserExposeGroup.UPDATE] })
  @IsOptional({ groups: [UserExposeGroup.UPDATE] })
  @IsString({ always: true })
  description: string

  @Expose({ groups: [UserExposeGroup.READ, UserExposeGroup.UPDATE] })
  @IsOptional({ groups: [UserExposeGroup.UPDATE] })
  @IsString({ always: true })
  facebook: string

  @Expose({ groups: [UserExposeGroup.READ, UserExposeGroup.UPDATE] })
  @IsOptional({ groups: [UserExposeGroup.UPDATE] })
  @IsString({ always: true })
  telegram: string
}
