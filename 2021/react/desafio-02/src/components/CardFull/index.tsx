import { ShoppingCart } from "@phosphor-icons/react";
import { IconButton } from "../Buttons/Icon";
import { InputNumber } from "../InputNumber";

interface ItemDescriptionProps {
    imgSrc: string;
    tags: string[];
    title: string;
    description: string;
    price: number;
    amout: number;
}

export function CardFull({
    imgSrc,
    tags,
    title,
    description,
    price,
    amout,
}: ItemDescriptionProps) {
    return (
        <div className="flex flex-col justify-center items-center bg-base-card w-[256px] rounded-tl-[6px] rounded-tr-[36px] rounded-bl-[36px] rounded-br-[6px]">
            <img
                src={imgSrc}
                alt={title}
                className="h-[120px] w-[120px] object-contain bg-transparent mix-blend-multiply -mt-5"
            />
            <div className="flex items-center gap-1 mt-3">
                {tags.map((tag) => (
                    <span className="bg-yellow-light text-yellow-dark rounded-[100px] py-1 px-2 text-xs leading-normal">
                        {tag.toLocaleUpperCase()}
                    </span>
                ))}
            </div>
            <div className="text-title-s  text-base-subtitle font-[700] font-baloo2 mt-4">
                {title}
            </div>
            <p className="text-center text-s text-base-label px-2 mt-2">
                {description}
            </p>
            <div className="flex items-center gap-2 mt-7 mb-5">
                <p className="flex-none text-base-text text-s mr-3">
                    {`R$ `}
                    <span className="font-baloo2 text-title-m">
                        {price.toPrecision(3)}
                    </span>
                </p>
                <InputNumber value={amout} />
                <IconButton
                    icon={
                        <ShoppingCart
                            weight="fill"
                            size={22}
                            className="text-base-card"
                        />
                    }
                />
            </div>
        </div>
    );
}
