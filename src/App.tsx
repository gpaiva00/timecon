import { useState } from 'react'
import { HourglassSimple } from 'phosphor-react'
import InputForm from './components/InputForm'
import ResultView from './components/ResultView'

export interface ResultProps {
  result: number
  time: number
  from: string
  to: string
}

function App() {
  const [result, setResult] = useState({} as ResultProps)

  const handleOnCloseResult = () => {
    setResult({} as ResultProps)
  }

  return (
    <div className="w-full h-fit pt-6 sm:pt-0 sm:h-screen flex flex-1 gap-8 sm:gap-10 flex-col justify-center items-center px-3 sm:px-0">
      <h1 className="flex items-center gap-2 text-6xl font-black text-primary">
        <HourglassSimple size={32} weight="bold" className="text-zinc-800" />
        timecon
      </h1>

      <div className="flex flex-col justify-center items-center bg-background w-full h-96 sm:h-80 sm:w-96 p-6 sm:p-10 rounded-lg shadow-neuromorphic">
        {result.time ? (
          <ResultView result={result} onClose={handleOnCloseResult} />
        ) : (
          <InputForm handleShowResult={setResult} />
        )}
      </div>
    </div>
  )
}

export default App
