import { TodoProps } from "../../model/Todo";
import { Checkbox } from "../Checkbox";
import { IconTrash } from "../icons/IconTrash";

interface TaskComponentProps extends TodoProps {
    onComplete: () => void;
    onDelete: () => void;
}

export const Task = ({
    description,
    isCompleted,
    onComplete,
    onDelete,
}: TaskComponentProps) => {
    const style = isCompleted ? "text-gray-300 line-through" : "text-gray-100";
    return (
        <div
            className={`flex items-start gap-3 p-4 bg-gray-500 rounded-lg border border-gray-400 shadow-sm text-md ${style}`}
        >
            <div
                onClick={onComplete}
                className="h-6 w-6 flex-none flex items-center justify-center"
            >
                <Checkbox isCompleted={isCompleted} />
            </div>

            <p className="break-all">{description}</p>

            <div
                onClick={onDelete}
                className="cursor-pointer ml-auto text-gray-300 rounded-[4px] h-6 w-6 flex-none flex items-center justify-center hover:text-danger hover:bg-gray-400"
            >
                <IconTrash />
            </div>
        </div>
    );
};
