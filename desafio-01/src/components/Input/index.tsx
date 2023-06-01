import { InputHTMLAttributes } from "react";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            {...props}
            className="text-gray-100 outline-none focus-visible:border-purple-dark p-4 w-full bg-gray-500 rounded-lg border-gray-700 border text-lg placeholder:text-gray-300 h-[54px]"
        />
    );
};
