import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { ITodo, editIsDoneTodo, removeTodo } from "../store/todos/todos.slice";
import { IOpenHandler } from "../App";
import clsx from "clsx";

interface ITask {
    index: number;
    task: ITodo;
    onEdit: (obj: IOpenHandler) => void;
}

interface ImportanceColors {
    [key: number]: string;
}

export const Task: React.FC<ITask> = ({ task, index, onEdit }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeTodo(index));
    };

    const handleIsDone = () => {
        dispatch(editIsDoneTodo(index));
    };
    const importanceColors: ImportanceColors = {
        1: "bg-green-100",
        2: "bg-yellow-100",
        3: "bg-red-100",
    };

    const taskBackground: string = importanceColors[task.importance] || "";

    return (
        <li
            className={clsx(
                "p-3 mb-2 flex flex-row  border-2 justify-around items-center rounded-2xl hover:bg-slate-200 transition-all",
                { "line-through": task.isDone },
                taskBackground
            )}
        >
            <button onClick={handleIsDone}>
                <CiCircleCheck size={25} className={clsx({ "text-green-500": task.isDone })} />
            </button>
            <h3 className={clsx("w-2/3 font-bold text-xl", { "text-gray-500": task.isDone })}>
                {task.task}
            </h3>
            <button
                onClick={() =>
                    onEdit({
                        obj: task,
                        status: true,
                        index,
                    })
                }
            >
                <CiEdit size={25} className="hover:bg-inherit" />
            </button>
            <button>
                <CiTrash
                    size={25}
                    className="hover:text-red-600  transition-all"
                    onClick={handleDelete}
                />
            </button>
        </li>
    );
};
