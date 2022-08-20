// TODO: retirar da lista direita o que foi selecionado na lista esquerda
import { useState } from 'react'
import { ResultProps } from '../App'
import listOptions from '../common/listOptions'
import timecon from '../utils/timecon'
import Button from './Button'
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

  const getFromOptions = (selectedValueFrom: string) =>
    listOptions.filter(option => option.value !== selectedValueFrom)

  return (
    <form
      className="flex flex-col gap-3 w-full"
      onSubmit={e => e.preventDefault()}
    >
      <Input
        onChange={e => handleInputChange(e.target.value)}
        value={inputTime}
        label="valor"
      />

      <div className="flex flex-col sm:flex-row gap-5 mb-5">
        <Select
          onChange={e => handleSelectChange('from', e.target.value)}
          value={selectValueFrom}
          options={listOptions}
          label="de"
        />

        <Select
          onChange={e => handleSelectChange('to', e.target.value)}
          value={selectValueTo}
          options={getFromOptions(selectValueFrom)}
          label="em"
        />
      </div>

      <Button onClick={handleConvert} text="converter" />
    </form>
  )
}
