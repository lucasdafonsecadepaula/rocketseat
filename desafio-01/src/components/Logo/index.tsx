import { IconRocket } from "../icons/IconRocket";

export const Logo = () => {
    return (
        <div className="flex items-center gap-3">
            <IconRocket className="pt-3" />
            <h1 className="font-black font-size text-xl">
                <span className="text-blue">to</span>
                <span className="text-purple-dark">do</span>
            </h1>
        </div>
    );
};
