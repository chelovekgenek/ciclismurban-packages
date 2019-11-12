import { EventPermissions, ParkingPermissions, ServicePermissions, ShopPermissions } from "../../location/interfaces"

import { mergePermissions } from "../helpers"

export const MergedPermissions = mergePermissions([
  EventPermissions,
  ParkingPermissions,
  ServicePermissions,
  ShopPermissions,
])
