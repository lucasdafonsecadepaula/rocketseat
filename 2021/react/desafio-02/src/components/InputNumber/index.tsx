import { Minus, Plus } from "@phosphor-icons/react";

interface InputNumberProps {
    value: number;
}

export function InputNumber({ value }: InputNumberProps) {
    return (
        <span className="flex h-8 w-fit rounded-md items-center justify-center gap-1 p-2 bg-base-button">
            <button>
                <Minus
                    weight="bold"
                    size={14}
                    className="text-purple hover:text-purple-dark"
                />
            </button>
            <p className="text-base-title text-m">{value}</p>
            <button>
                <Plus
                    weight="bold"
                    size={14}
                    className="text-purple hover:text-purple-dark"
                />
            </button>
        </span>
    );
}
