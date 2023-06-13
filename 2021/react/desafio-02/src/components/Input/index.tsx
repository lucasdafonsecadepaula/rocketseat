import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
}

export function Input(props: InputProps) {
  return (
    <span className="relative w-full text-base-text">
      <input
        {...props}
        className="w-full min-h-[42px] placeholder:text-base-label rounded-[4px] bg-base-input p-3 text-s focus-visible:outline-1 focus-visible:outline-yellow-dark leading-[0]"
      />
      {props.isOptional && !props.value ? (
        <p className="text-base-label absolute italic right-0 top-[50%] text-[0.75rem] translate-y-[-50%] pr-3">
          Opcional
        </p>
      ) : null}
    </span>
  )
}
