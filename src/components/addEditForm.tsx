import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Categories, ITodo } from "../store/todos/todos.slice";
import { TaskInput } from "./addEditForm/taskInput";
import { CategorySelect } from "./addEditForm/categorySelect";
import { PrioritySelect } from "./addEditForm/prioritySelect";

interface AddEditFormProps {
    onClose: () => void;
    onSubmit: (data: ITodo) => void;
    onEdit: (index: number, data: ITodo) => void;
    todo?: ITodo;
    index?: number;
}

export const AddEditForm: React.FC<AddEditFormProps> = ({
    onClose,
    onSubmit,
    todo,
    onEdit,
    index,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
    } = useForm<ITodo>({
        defaultValues: {
            task: todo?.task ?? "",
            category: todo?.category ?? Categories.WORK,
            importance: todo?.importance ?? 1,
            isDone: todo?.isDone ?? false,
        },
        mode: "onChange",
    });

    const handleFormSubmit: SubmitHandler<ITodo> = (data) => {
        if (todo && index) {
            onEdit(index, data);
        } else {
            onSubmit(data);
        }
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col box-border">
            <TaskInput error={errors} register={register} />
            <CategorySelect active={getValues("category")} setValue={setValue} />
            <PrioritySelect active={getValues("importance")} setValue={setValue} />

            <div className="flex justify-around">
                <button
                    type="submit"
                    className="flex justify-center items-center w-2/5 py-2 px-4 border  bg-red-500 text-white font-bold rounded-full transition-colors duration-300 hover:bg-red-400 hover:text-white"
                >
                    {todo ? "Сохранить" : "Добавить"}
                </button>

                <button
                    type="button"
                    className="flex justify-center items-center w-2/5 py-2 px-4 rounded-full border border-blue-500 text-blue-500 font-bold transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                    onClick={onClose}
                >
                    Закрыть
                </button>
            </div>
        </form>
    );
};
