import { TodoProps } from "../../model/Todo";
import { IconDone } from "../icons/IconDone";

export const Checkbox = ({ isCompleted }: Pick<TodoProps, "isCompleted">) => {
    const style = isCompleted
        ? "bg-purple-dark hover:bg-purple"
        : "border border-blue hover:bg-blue-dark/20";
    return (
        <span
            className={`flex-none cursor-pointer rounded-full transition-all h-[17.45px] w-[17.45px] flex items-center justify-center ${style}`}
        >
            {isCompleted && <IconDone />}
        </span>
    );
};
