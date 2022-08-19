const englishUnitToPortuguese = (englishUnit: string) => {
  const unitsToPortuguese = {
    milliseconds: 'milissegundos',
    seconds: 'segundos',
    minutes: 'minutos',
    hours: 'horas',
    days: 'dias',
    weeks: 'semanas',
    months: 'meses',
    years: 'anos'
  }

  return unitsToPortuguese[englishUnit]
}

export default englishUnitToPortuguese
