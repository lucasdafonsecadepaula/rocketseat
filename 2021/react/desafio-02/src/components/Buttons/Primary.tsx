import { ButtonHTMLAttributes, ReactNode } from 'react'

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}

export function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
  return (
    <button
      {...props}
      className="bg-yellow transition-[background] duration-200 px-2 py-3 rounded-md text-white min-w-[132px] text-button-g hover:bg-yellow-dark"
    >
      {children}
    </button>
  )
}
