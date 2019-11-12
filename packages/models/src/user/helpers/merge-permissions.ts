export const mergePermissions = (enums: Array<{ [key: string]: string }>): string[] =>
  enums.reduce((prevValue: string[], currentValue: object) => prevValue.concat(Object.values(currentValue)), [])
