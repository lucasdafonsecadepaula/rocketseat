import { ButtonHTMLAttributes } from "react";
import { IconPlus } from "../icons/IconPlus";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonCreate = ({ ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className="text-md transition-all bg-blue-dark p-4 rounded-lg text-gray-100 hover:bg-blue h-[52px] flex items-center gap-2"
        >
            Criar
            <IconPlus />
        </button>
    );
};
