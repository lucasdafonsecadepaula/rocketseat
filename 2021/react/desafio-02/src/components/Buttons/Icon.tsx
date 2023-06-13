import { ButtonHTMLAttributes, ReactNode } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
}

export function IconButton({ icon, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className="bg-purple-dark hover:bg-purple rounded-md p-2 transition-[background] duration-200"
    >
      {icon}
    </button>
  )
}
