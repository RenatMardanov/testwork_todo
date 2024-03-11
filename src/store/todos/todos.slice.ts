import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum Categories {
    WORK = "Задачи",
    SPORT = "Спорт",
    SHOPPING = "Покупки",
    DONE = "Выполнено",
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
        return JSON.parse(serializedState);
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
            state.push(action.payload);
            addToLocalStorage(state);
        },
        removeTodo: (state: ITodo[], action: PayloadAction<number>) => {
            state.splice(action.payload, 1);
            addToLocalStorage(state);
        },
        editTodo: (state: ITodo[], action: PayloadAction<{ index: number; todo: ITodo }>) => {
            const { index, todo } = action.payload;
            state[index] = {
                ...todo,
            };

            addToLocalStorage(state);
        },
        editIsDoneTodo: (state: ITodo[], action: PayloadAction<number>) => {
            const index = action.payload;
            state[index] = {
                ...state[index],
                isDone: !state[index].isDone,
            };
            addToLocalStorage(state);
        },
    },
});

export const { addTodo, removeTodo, editTodo, editIsDoneTodo } = todosSlice.actions;
export default todosSlice.reducer;
