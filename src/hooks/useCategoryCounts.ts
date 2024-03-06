import { useEffect, useState } from "react";
import { Categories, ITodo } from "../store/todos/todos.slice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useCategoryCounts = () => {
    const todos = useSelector((state: RootState) => state.todos);
    const [categoryCounts, setCategoryCounts] = useState<{ [key in Categories]: number }>({
        [Categories.WORK]: 0,
        [Categories.SHOPPING]: 0,
        [Categories.SPORT]: 0,
        [Categories.HOME]: 0,
    });

    useEffect(() => {
        const counts = {
            [Categories.WORK]: 0,
            [Categories.SHOPPING]: 0,
            [Categories.SPORT]: 0,
            [Categories.HOME]: 0,
        };

        todos.forEach((todo: ITodo) => {
            counts[todo.category]++;
        });

        setCategoryCounts(counts);
    }, [todos]);

    return categoryCounts;
};
