import {
  daysToMilliseconds,
  daysToSeconds,
  daysToMinutes,
  daysToHours,
  daysToWeeks,
  daysToMonths,
  daysToYears
} from './days'
import {
  hoursToMilliseconds,
  hoursToSeconds,
  hoursToMinutes,
  hoursToDays,
  hoursToWeeks,
  hoursToMonths,
  hoursToYears
} from './hours'
import {
  millisecondsToSeconds,
  millisecondsToHours,
  millisecondsToDays,
  millisecondsToWeeks,
  millisecondsToMinutes,
  millisecondsToMonths,
  millisecondsToYears
} from './milliseconds'
import {
  minutesToMilliseconds,
  minutesToSeconds,
  minutesToHours,
  minutesToDays,
  minutesToWeeks,
  minutesToMonths,
  minutesToYears
} from './minutes'
import {
  monthsToMilliseconds,
  monthsToSeconds,
  monthsToMinutes,
  monthsToHours,
  monthsToDays,
  monthsToWeeks,
  monthsToYears
} from './months'
import {
  secondsToMilliseconds,
  secondsToMinutes,
  secondsToHours,
  secondsToDays,
  secondsToWeeks,
  secondsToMonths,
  secondsToYears
} from './seconds'
import {
  weeksToMilliseconds,
  weeksToSeconds,
  weeksToMinutes,
  weeksToHours,
  weeksToDays,
  weeksToMonths,
  weeksToYears
} from './weeks'
import {
  yearsToMilliseconds,
  yearsToSeconds,
  yearsToMinutes,
  yearsToHours,
  yearsToDays,
  yearsToWeeks,
  yearsToMonths
} from './years'

interface timeconProps {
  from: string
  to: string
  time: number
}

const DECIMAL_PLACES = 1

const timecon = ({ from, to, time }: timeconProps): number => {
  const convertType = `${from}|${to}`

  const convertFunctions = {
    'milliseconds|seconds': millisecondsToSeconds,
    'milliseconds|minutes': millisecondsToMinutes,
    'milliseconds|hours': millisecondsToHours,
    'milliseconds|days': millisecondsToDays,
    'milliseconds|weeks': millisecondsToWeeks,
    'milliseconds|months': millisecondsToMonths,
    'milliseconds|years': millisecondsToYears,

    'seconds|milliseconds': secondsToMilliseconds,
    'seconds|minutes': secondsToMinutes,
    'seconds|hours': secondsToHours,
    'seconds|days': secondsToDays,
    'seconds|weeks': secondsToWeeks,
    'seconds|months': secondsToMonths,
    'seconds|years': secondsToYears,

    'minutes|milliseconds': minutesToMilliseconds,
    'minutes|seconds': minutesToSeconds,
    'minutes|hours': minutesToHours,
    'minutes|days': minutesToDays,
    'minutes|weeks': minutesToWeeks,
    'minutes|months': minutesToMonths,
    'minutes|years': minutesToYears,

    'hours|milliseconds': hoursToMilliseconds,
    'hours|seconds': hoursToSeconds,
    'hours|minutes': hoursToMinutes,
    'hours|days': hoursToDays,
    'hours|weeks': hoursToWeeks,
    'hours|months': hoursToMonths,
    'hours|years': hoursToYears,

    'days|milliseconds': daysToMilliseconds,
    'days|seconds': daysToSeconds,
    'days|minutes': daysToMinutes,
    'days|hours': daysToHours,
    'days|weeks': daysToWeeks,
    'days|months': daysToMonths,
    'days|years': daysToYears,

    'weeks|milliseconds': weeksToMilliseconds,
    'weeks|seconds': weeksToSeconds,
    'weeks|minutes': weeksToMinutes,
    'weeks|hours': weeksToHours,
    'weeks|days': weeksToDays,
    'weeks|months': weeksToMonths,
    'weeks|years': weeksToYears,

    'months|milliseconds': monthsToMilliseconds,
    'months|seconds': monthsToSeconds,
    'months|minutes': monthsToMinutes,
    'months|hours': monthsToHours,
    'months|days': monthsToDays,
    'months|weeks': monthsToWeeks,
    'months|years': monthsToYears,

    'years|milliseconds': yearsToMilliseconds,
    'years|seconds': yearsToSeconds,
    'years|minutes': yearsToMinutes,
    'years|hours': yearsToHours,
    'years|days': yearsToDays,
    'years|weeks': yearsToWeeks,
    'years|months': yearsToMonths
  }

  const convertResult: number = convertFunctions[convertType](time)

  console.warn({ convertResult, convertType, time })
  

  return convertResult.toPrecision(DECIMAL_PLACES)

}

export default timecon
