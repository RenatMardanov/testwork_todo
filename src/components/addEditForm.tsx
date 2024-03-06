import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Categories, ITodo } from "../store/todos/todos.slice";
import { TaskInput } from "./addEditForm/taskInput";
import { CategorySelect } from "./addEditForm/categorySelect";
import { PrioritySelect } from "./addEditForm/prioritySelect";

interface AddEditFormProps {
    buttonText: string;
    onClose: () => void;
    onSubmit: (data: ITodo) => void;
}

export const AddEditForm: React.FC<AddEditFormProps> = ({ buttonText, onClose, onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<ITodo>({
        defaultValues: {
            category: Categories.WORK,
            importance: 1,
        },
    });

    const handleFormSubmit: SubmitHandler<ITodo> = (data) => {
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col">
            <TaskInput
                error={errors}
                setValue={setValue}
                {...register("task", { required: true, minLength: 6, maxLength: 49 })}
            />
            <CategorySelect setValue={setValue} />
            <PrioritySelect setValue={setValue} />

            <div className="flex gap-2">
                <button
                    type="submit"
                    className="border-2 w-full bg-blue-500 text-white font-bold py-2 px-4 rounded"
                >
                    {buttonText}
                </button>
                <button
                    type="button"
                    className="border-2 w-full bg-gray-500 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        onClose();
                    }}
                >
                    Закрыть
                </button>
            </div>
        </form>
    );
};
