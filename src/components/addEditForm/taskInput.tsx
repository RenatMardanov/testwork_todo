import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ITodo } from "../../store/todos/todos.slice";
import clsx from "clsx";

interface TaskInputProps {
    error: FieldErrors<ITodo>;
    register: UseFormRegister<ITodo>;
}

export const TaskInput: React.FC<TaskInputProps> = ({ error, register }) => {
    const showError = (error: FieldErrors<ITodo>) => {
        if (error.task && error.task.type === "required")
            return "Это поле обязательно для заполнения";
        if (error.task && error.task.type === "minLength") return "Минимальная длина 3 символа";
        if (error.task && error.task.type === "maxLength") return "Максимальная длина 70 символов";
        return;
    };

    return (
        <>
            <input
                id="task-input"
                type="text"
                placeholder="Task"
                className="border px-2 py-1 rounded mb-2 transition-all"
                {...register("task", { required: true, minLength: 3, maxLength: 70 })}
            />
            <p
                className={clsx(
                    `text-red-500 text-sm h-0 transition-all`,
                    showError(error) && "h-4"
                )}
            >
                {showError(error)}
            </p>
        </>
    );
};
