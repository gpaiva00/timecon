import { useState } from 'react'
import { ResultProps } from '../App'
import timecon from '../utils/timecon'
import Input from './Input'
import Select from './Select'

interface InputFormProps {
  handleShowResult: React.Dispatch<React.SetStateAction<ResultProps>>
}

export default function InputForm(props: InputFormProps) {
  const { handleShowResult } = props

  const [inputTime, setInputTime] = useState(null as unknown as number)
  const [selectValueFrom, setSelectValueFrom] = useState('')
  const [selectValueTo, setSelectValueTo] = useState('')

  const handleInputChange = (value: string) => {
    const numberPattern = /\d+/g
    const isNumber = value.match(numberPattern)

    if (isNumber || !value.length) setInputTime(value)
  }

  const handleSelectChange = (type: string, value: string) => {
    const selectType = {
      from: setSelectValueFrom,
      to: setSelectValueTo
    }

    selectType[type](value)
  }

  const handleConvert = () => {
    if (!selectValueFrom.length || !selectValueTo.length) {
      alert('Selecione um tipo de conversão')
      return
    }

    if (selectValueFrom === selectValueTo) {
      alert('Selecione um tipo de conversão diferente')
      return
    }

    if (!inputTime) {
      alert('Insira um valor')
      return
    }

    const result = timecon({
      from: selectValueFrom,
      to: selectValueTo,
      time: inputTime
    })

    handleShowResult({
      from: selectValueFrom,
      to: selectValueTo,
      time: inputTime,
      result
    })
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
      <Input
        onChange={e => handleInputChange(e.target.value)}
        value={inputTime}
        label="valor"
      />

      <div className="flex gap-5 flex-row mb-5">
        <Select
          onChange={e => handleSelectChange('from', e.target.value)}
          value={selectValueFrom}
          options={[
            { value: 'milliseconds', label: 'milissegundos' },
            { value: 'seconds', label: 'segundos' },
            { value: 'minutes', label: 'minutos' },
            { value: 'hours', label: 'horas' },
            { value: 'days', label: 'dias' },
            { value: 'weeks', label: 'semanas' },
            { value: 'months', label: 'meses' },
            { value: 'years', label: 'anos' }
          ]}
          label="de"
        />

        <Select
          onChange={e => handleSelectChange('to', e.target.value)}
          value={selectValueTo}
          options={[
            { value: 'milliseconds', label: 'milissegundos' },
            { value: 'seconds', label: 'segundos' },
            { value: 'minutes', label: 'minutos' },
            { value: 'hours', label: 'horas' },
            { value: 'days', label: 'dias' },
            { value: 'weeks', label: 'semanas' },
            { value: 'months', label: 'meses' },
            { value: 'years', label: 'anos' }
          ]}
          label="em"
        />
      </div>

      <button
        className="w-full bg-primary text-zinc-100 font-medium hover:bg-zinc-800 hover:text-secondary rounded-lg p-2 h-10 transition-colors"
        onClick={handleConvert}
      >
        Converter
      </button>
    </form>
  )
}
