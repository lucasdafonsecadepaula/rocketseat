import { Trash } from "@phosphor-icons/react";
import { SecondaryButton } from "../Buttons/Secondary";
import { InputNumber } from "../InputNumber";

interface ItemDescriptionProps {
    imgSrc: string;
    title: string;
    price: number;
    amout: number;
}

export function CardShort({
    imgSrc,
    title,
    price,
    amout,
}: ItemDescriptionProps) {
    return (
        <div className="flex justify-between px-1 py-2 min-w-[368px] bg-base-card">
            <div className="flex gap-5 items-center">
                <img
                    src={imgSrc}
                    alt={title}
                    className="h-[64px] w-[64px] mix-blend-multiply"
                />

                <div className="flex flex-col gap-2">
                    <p className="text-base-subtitle text-m">{title}</p>
                    <span className="flex gap-2">
                        <InputNumber value={amout} />
                        <SecondaryButton
                            leftIcon={
                                <Trash size={16} className="text-purple" />
                            }
                        >
                            REMOVER
                        </SecondaryButton>
                    </span>
                </div>
            </div>

            <p className="text-right text-base-text text-m font-bold">
                {`R$ `}
                <span className="">{price.toPrecision(3)}</span>
            </p>
        </div>
    );
}
