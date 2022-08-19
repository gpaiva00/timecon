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
    <div className="w-full min-h-screen flex flex-1 gap-10 flex-col justify-center items-center">
      <h1 className="flex items-center gap-2 text-6xl font-black text-primary">
        <HourglassSimple size={32} weight="bold" className="text-zinc-800" />
        timecon
      </h1>

      <div className="flex flex-col justify-center items-center bg-background w-96 h-80 p-10 rounded-lg shadow-neuromorphic">
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
