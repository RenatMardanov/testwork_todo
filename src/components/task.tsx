import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { removeTodo } from "../store/todos/todos.slice";

interface ITask {
    index: number;
    task: string;
}

export const Task: React.FC<ITask> = ({ task, index }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeTodo(index));
    };

    return (
        <li
            className={`p-3 mb-2 flex flex-row  border-2 justify-around items-center rounded-2xl hover:bg-slate-200 transition-all`}
        >
            <button>
                <CiCircleCheck size={25} />
            </button>
            <h3 className="w-2/3 font-bold text-xl">{task}</h3>
            <button>
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
