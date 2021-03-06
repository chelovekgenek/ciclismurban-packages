import { EventPermissions, ParkingPermissions, ServicePermissions, ShopPermissions } from "../../location/interfaces"

export const Permissions = [EventPermissions, ParkingPermissions, ServicePermissions, ShopPermissions].reduce(
  (prevV, currV) => prevV.concat(Object.values(currV)),
  [],
)
