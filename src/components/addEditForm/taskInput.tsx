import React from "react";
import { FieldErrors, UseFormSetValue } from "react-hook-form";
import { ITodo } from "../../store/todos/todos.slice";

interface TaskInputProps {
    error: FieldErrors<ITodo>;
    setValue: UseFormSetValue<ITodo>;
}

export const TaskInput: React.FC<TaskInputProps> = ({ error, setValue }) => {
    return (
        <>
            <input
                id="task-input"
                type="text"
                placeholder="Task"
                className="border px-2 py-1 rounded mb-2"
                onChange={(e) => setValue("task", e.target.value)}
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
