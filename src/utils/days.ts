export const daysToMilliseconds = (days: number) => {
  return days * 86400000
}

export const daysToSeconds = (days: number) => {
  return days * 86400
}

export const daysToMinutes = (days: number) => {
  return days * 1440
}

export const daysToHours = (days: number) => {
  return days * 24
}

export const daysToWeeks = (days: number) => {
  return days / 7
}

export const daysToMonths = (days: number) => {
  return days / 30
}

export const daysToYears = (days: number) => {
  return days / 365
}
