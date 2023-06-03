import { ReactNode } from "react";

interface SelectProps {
    children?: ReactNode;
    rightIcon?: ReactNode;
    leftIcon?: ReactNode;
    isActive: boolean;
}

export function Select({
    children,
    leftIcon,
    rightIcon,
    isActive,
}: SelectProps) {
    const styleActive = isActive ? "bg-purple-light border border-purple" : "";
    return (
        <button
            className={`flex items-center justify-center gap-3 p-4 rounded-md bg-base-button hover:bg-base-hover text-button-m min-h-[51px] leading-4 ${styleActive}`}
        >
            {leftIcon}
            {children}
            {rightIcon}
        </button>
    );
}
