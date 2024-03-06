import { ITodo } from "../store/todos/todos.slice";
import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

export const Task: React.FC<{ todo: ITodo }> = ({ todo }) => {
    // function colorOfImportance(todo: ITodo) {
    //     if (todo.importance === 3) {
    //         return "bg-red-400";
    //     } else if (todo.importance === 2) {
    //         return "bg-yellow-200";
    //     }

    //     return "bg-inherit"; ${colorOfImportance(todo)}
    // }

    return (
        <li
            className={`p-3 mb-2 flex flex-row  border-2 justify-around items-center rounded-2xl hover:bg-slate-200 transition-all`}
        >
            {/* <div></div> */}
            <button>
                <CiCircleCheck size={25} />
            </button>
            <h3 className="w-2/3 font-bold text-xl">{todo.task}</h3>
            <button>
                <CiEdit size={25} className="hover:bg-inherit" />
            </button>
            <button>
                <CiTrash size={25} className="hover:text-red-600  transition-all" />
            </button>
        </li>
    );
};
