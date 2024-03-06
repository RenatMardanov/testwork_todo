import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum Categories {
    WORK = "Задачи",
    SPORT = "Занятия спортом",
    HOME = "Дела по дому",
    SHOPPING = "Покупки",
}

export interface ITodo {
    task: string;
    importance: number;
    category: Categories;
    isDone: boolean;
}

const initialState: ITodo[] = [
    {
        task: "Сходить поссать",
        importance: 2,
        category: Categories.WORK,
        isDone: false,
    },
    {
        task: "Сходить покурить",
        importance: 2,
        category: Categories.SHOPPING,
        isDone: false,
    },
    {
        task: "Выключить комп",
        importance: 2,
        category: Categories.WORK,
        isDone: false,
    },
    {
        task: "Лечь спать",
        importance: 2,
        category: Categories.SPORT,
        isDone: false,
    },
];

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            const todo: ITodo = action.payload;
            state.push(todo);
        },
    },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
