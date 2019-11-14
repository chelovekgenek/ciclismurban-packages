import { IsEmail, IsString, Length, IsArray, IsIn } from "class-validator"
import { Expose, Exclude, Type } from "class-transformer"

import { UserExposeGroup } from "../interfaces"

import { SocialModel } from "./social.model"
import { ProfileModel } from "./profile.model"
import { MergedPermissions } from "./merged-permissions"

export class UserModel {
  @Expose({ groups: [UserExposeGroup.READ] })
  uuid: string

  @Expose({ groups: [UserExposeGroup.READ, UserExposeGroup.WRITE, UserExposeGroup.LOGIN] })
  @IsEmail({}, { always: true })
  email: string

  @Expose({ groups: [UserExposeGroup.WRITE, UserExposeGroup.LOGIN] })
  @IsString({ always: true })
  @Length(8, 16, { always: true })
  password?: string

  @Expose({ groups: [UserExposeGroup.READ] })
  @IsArray({ groups: [UserExposeGroup.UPDATE] })
  @IsIn(MergedPermissions, { groups: [UserExposeGroup.UPDATE], each: true })
  permissions: string[]

  @Exclude()
  @Type(() => SocialModel)
  social?: SocialModel

  @Expose({ groups: [UserExposeGroup.READ] })
  @Type(() => ProfileModel)
  profile: ProfileModel

  @Expose({ groups: [UserExposeGroup.READ] })
  createdAt: Date

  @Expose({ groups: [UserExposeGroup.READ] })
  updatedAt: Date
}
