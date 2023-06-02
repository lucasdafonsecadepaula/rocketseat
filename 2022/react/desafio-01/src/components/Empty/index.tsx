import { IconClipboard } from "../icons/IconClipboard";

export const Empty = () => (
    <div className="border-t border-gray-400 px-6 py-16 flex flex-col items-center justify-center gap-4 w-full text-lg rounded-lg">
        <IconClipboard />
        <div className="leading-normal">
            <p className="font-bold">Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    </div>
);
