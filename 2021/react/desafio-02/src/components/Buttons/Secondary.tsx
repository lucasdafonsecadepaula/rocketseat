import { ButtonHTMLAttributes, ReactNode } from "react";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

export function SecondaryButton({
    children,
    leftIcon,
    rightIcon,
    ...props
}: SecondaryButtonProps) {
    return (
        <button
            {...props}
            className="text-base-text flex items-center justify-center gap-1 px-2 bg-base-button hover:bg-base-hover rounded-md text-button-m min-w-[91px] min-h-[32px] transition-[background] duration-200"
        >
            {leftIcon}
            {children}
            {rightIcon}
        </button>
    );
}
