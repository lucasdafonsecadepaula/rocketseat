import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useMemo, useState } from "react";
import { ButtonCreate } from "./components/ButtonCreate";
import { Empty } from "./components/Empty";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";
import { TodoProps } from "./model/Todo";

function App() {
    const [parent] = useAutoAnimate();
    const [taskDescription, setTaskDescription] = useState("");
    const [todos, setTodos] = useState<TodoProps[]>([]);

    function handleChangeTaskDescription(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setTaskDescription(event.target.value);
    }

    function createTodo() {
        if (taskDescription === "") return;
        const newId = new Date().getTime().toString();
        const newTodo: TodoProps = {
            id: newId,
            description: taskDescription,
            isCompleted: false,
        };
        setTodos((prevValues) => [...prevValues, newTodo]);
        setTaskDescription("");
    }

    function onPressEnter(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key !== "Enter") return;
        createTodo();
    }

    const handleCompleteTodo = (id: string) => () => {
        setTodos((prevTodos) =>
            prevTodos.map((prevTodo) => {
                if (prevTodo.id === id) {
                    return {
                        ...prevTodo,
                        isCompleted: !prevTodo.isCompleted,
                    };
                }
                return prevTodo;
            })
        );
    };

    const handleDeleteTodo = (id: string) => () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const completedCount = useMemo(
        () =>
            todos.reduce((acc, cur) => {
                const count = cur.isCompleted ? 1 : 0;
                return acc + count;
            }, 0),
        [todos]
    );

    return (
        <main className="font-inter min-h-screen bg-gray-600 text-gray-300">
            <Header />
            <div className="w-full flex flex-col items-center justify-center">
                <div className="max-w-[736px] w-full">
                    <div className="-mt-[27px] flex items-center gap-2 w-full">
                        <Input
                            placeholder="Adicione uma nova tarefa"
                            value={taskDescription}
                            onChange={handleChangeTaskDescription}
                            onKeyUp={onPressEnter}
                        />
                        <ButtonCreate onClick={createTodo} />
                    </div>

                    <div className="flex w-full items-center justify-between mt-16">
                        <div className="flex items-center gap-4">
                            <p className="font-bold text-blue text-md">
                                Tarefas criadas
                            </p>
                            <span className="text-gray-200 bg-gray-400 px-[8px] py-[2px] rounded-full font-bold text-sm text-center">
                                {todos.length}
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <p className="font-bold text-purple text-md">
                                Concluídas
                            </p>
                            <span className="text-gray-200 bg-gray-400 px-[8px] py-[2px] rounded-full font-bold text-sm text-center">
                                {todos.length > 0
                                    ? `${completedCount} de ${todos.length}`
                                    : "0"}
                            </span>
                        </div>
                    </div>

                    <div
                        ref={parent}
                        className="flex flex-col w-full mt-6 rounded-lg gap-3"
                    >
                        {todos.length > 0 ? (
                            todos.map((todo) => (
                                <Task
                                    key={todo.id}
                                    id={todo.id}
                                    description={todo.description}
                                    isCompleted={todo.isCompleted}
                                    onComplete={handleCompleteTodo(todo.id)}
                                    onDelete={handleDeleteTodo(todo.id)}
                                />
                            ))
                        ) : (
                            <Empty />
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
