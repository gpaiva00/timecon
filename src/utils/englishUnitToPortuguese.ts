const englishUnitToPortuguese = (englishUnit: string, time: number) => {
  const unitsToPortuguese = {
    milliseconds: 'milissegundo',
    seconds: 'segundo',
    minutes: 'minuto',
    hours: 'hora',
    days: 'dia',
    weeks: 'semana',
    months: 'mes',
    years: 'ano'
  }

  const unitInPortuguese = unitsToPortuguese[englishUnit]
  const isPlural = time > 1
  let plural = isPlural ? 's' : ''

  plural = englishUnit === 'months' ? 'es' : plural

  return `${unitInPortuguese}${plural}`
}

export default englishUnitToPortuguese
