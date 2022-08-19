interface SelectProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options: Array<{
    value: string
    label: string
  }>
  label?: string
}

export default function Select(props: SelectProps) {
  const { options, label, ...rest } = props

  return (
    <div>
      {label && (
        <label className="text-zinc-800 text-2xl font-bold">{label}</label>
      )}
      <select
        className="w-full bg-white border-zinc-200 rounded-lg p-2 h-10"
        {...rest}
      >
        <option value="">Selecione</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
}
