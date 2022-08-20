interface ButtonProps {
  text: string
  onClick: () => void
}

export default function Button(props: ButtonProps) {
  const { text, onClick } = props

  return (
    <button
      className="w-full bg-primary text-zinc-100 font-medium hover:bg-zinc-800 hover:text-secondary rounded-lg p-2 h-12 sm:h-10 transition-colors"
      onClick={onClick}
    >
      {text}
    </button>
  )
}
