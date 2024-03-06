import { useForm } from "react-hook-form";

export function AddEditForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = () => console.log();
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <label htmlFor="#task-input" className="mb-2">
                Введите задачу
            </label>
            <input
                id="task-input"
                type="text"
                placeholder="Task"
                {...register("Task", { max: 49, min: 6, maxLength: 49 })}
                className="border px-2 py-1 rounded mb-2"
            />
            {errors.Task && errors.Task.type === "min" && (
                <p className="text-red-500">Минимальная длина задачи 6 символов</p>
            )}
            {errors.Task && errors.Task.type === "max" && (
                <p className="text-red-500">Максимальная длина задачи 49 символов</p>
            )}

            <div></div>

            {errors.Category && <p className="text-red-500">Выберите категорию</p>}

            <select {...register("Importance")} className="border px-2 py-1 rounded mb-2">
                <option value="low">low</option>
                <option value="middle">middle</option>
                <option value="high">high</option>
            </select>

            <input
                type="submit"
                className="border-2 w-full bg-blue-500 text-white font-bold py-2 px-4 rounded"
            />
        </form>
    );
}
