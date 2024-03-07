import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Draft, produce } from "immer"; // Импортируем Draft из immer

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

const addToLocalStorage = (store: ITodo[]) => {
    localStorage.setItem("todos", JSON.stringify(store));
};

const loadFromLocalStorage = (): ITodo[] | undefined => {
    try {
        const serializedState = localStorage.getItem("todos");
        if (serializedState === null) {
            return [];
        }
        const data = JSON.parse(serializedState);
        console.log(data);
        return data;
    } catch (err) {
        if (err instanceof Error) {
            console.log("Ошибка получения данных из хранилища", err.message);
        }
        return [];
    }
};

const preloadedState: ITodo[] = loadFromLocalStorage() || [];

export const todosSlice = createSlice({
    name: "todos",
    initialState: preloadedState,
    reducers: {
        addTodo: (state: ITodo[], action: PayloadAction<ITodo>) => {
            return produce(state, (draftState: Draft<ITodo[]>) => {
                draftState.push(action.payload);
                addToLocalStorage(draftState);
            });
        },
        removeTodo: (state: ITodo[], action: PayloadAction<number>) => {
            return produce(state, (draftState: Draft<ITodo[]>) => {
                draftState.splice(action.payload, 1);
            });
        },
    },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
