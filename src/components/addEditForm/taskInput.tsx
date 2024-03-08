import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ITodo } from "../../store/todos/todos.slice";

interface TaskInputProps {
    error: FieldErrors<ITodo>;
    register: UseFormRegister<ITodo>;
}

export const TaskInput: React.FC<TaskInputProps> = ({ error, register }) => {
    return (
        <>
            <input
                id="task-input"
                type="text"
                placeholder="Task"
                className="border px-2 py-1 rounded mb-2"
                // onChange={(e) => setValue("task", e.target.value)}
                {...register("task", { required: true, minLength: 6, maxLength: 49 })}
            />
            {error.task && error.task.type === "required" && (
                <p className="text-red-500">Это поле обязательно для заполнения</p>
            )}
            {error.task && error.task.type === "minLength" && (
                <p className="text-red-500">Минимальная длина задачи 6 символов</p>
            )}
            {error.task && error.task.type === "maxLength" && (
                <p className="text-red-500">Максимальная длина задачи 49 символов</p>
            )}
        </>
    );
};
