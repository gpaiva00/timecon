export const hoursToMilliseconds = (hours: number) => {
  return hours * 3600000
}

export const hoursToSeconds = (hours: number) => {
  return hours * 3600
}

export const hoursToMinutes = (hours: number) => {
  return hours * 60
}

export const hoursToDays = (hours: number) => {
  return hours / 24
}

export const hoursToWeeks = (hours: number) => {
  return hours / 168
}

export const hoursToMonths = (hours: number) => {
  return hours / 730
}

export const hoursToYears = (hours: number) => {
  return hours / 8760
}
