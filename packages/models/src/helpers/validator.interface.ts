export interface IFlatValidationError {
  /**
   * Object's property path that haven't pass validation.
   */
  path: string

  /**
   * First constraint that failed validation with error message.
   */
  message: string
}
