export const monthsToMilliseconds = (months: number) => {
  return months * 2628000000
}

export const monthsToSeconds = (months: number) => {
  return months * 2628000
}

export const monthsToMinutes = (months: number) => {
  return months * 43830
}

export const monthsToHours = (months: number) => {
  return months * 730
}

export const monthsToDays = (months: number) => {
  return months * 30
}

export const monthsToWeeks = (months: number) => {
  return months * 438
}

export const monthsToYears = (months: number) => {
  return months / 12
}
