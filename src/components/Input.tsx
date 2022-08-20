interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function Input(props: InputProps) {
  const {
    onChange,
    value,
    label,
    placeholder = 'digite aqui',
    type = 'text',
    ...rest
  } = props

  return (
    <div className="flex flex-col justify-center">
      {label && (
        <label className="text-zinc-800 text-2xl font-bold">{label}</label>
      )}
      <input
        className="w-full bg-zinc-100 border-zinc-200 rounded-lg p-2 h-12 sm:h-10"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  )
}
