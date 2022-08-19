import { ResultProps } from '../App'
import englishUnitToPortuguese from '../utils/englishUnitToPortuguese'

interface ResultViewProps {
  result: ResultProps
  onClose: () => void
}

export default function ResultView(props: ResultViewProps) {
  const { result, onClose } = props
  return (
    <div className="w-full flex flex-col gap-6">
      <h1 className="flex flex-col items-center gap-5 font-bold text-5xl text-zinc-800">
        <span className="flex items-center gap-2">
          {`${result.time}`}
          <span className="text-lg text-zinc-500">
            {englishUnitToPortuguese(result.from)}
          </span>
        </span>
        <span className="text-primary text-5xl">=</span>
        <span className="flex items-center gap-2">
          {`${result.result} `}
          <span className="text-lg text-zinc-500">
            {englishUnitToPortuguese(result.to)}
          </span>
        </span>
      </h1>

      <button
        className="w-full bg-primary text-zinc-100 font-medium hover:bg-zinc-800 hover:text-secondary rounded-lg p-2 h-10 transition-colors"
        onClick={onClose}
      >
        Voltar
      </button>
    </div>
  )
}
