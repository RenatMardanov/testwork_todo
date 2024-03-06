import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, Categories, ITodo } from "../store/todos/todos.slice";

const TodoInput: React.FC = () => {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState<string>("");

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            const todo: ITodo = {
                task: newTodo,
                importance: 1,
                category: Categories.SHOPPING,
                isDone: false, // По умолчанию задаем важность 1
            };
            dispatch(addTodo(todo));
            setNewTodo(""); // Очищаем поле ввода после добавления
        }
    };

    return (
        <div className="flex items-center justify-between mb-4">
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Введите новую задачу"
                className="p-2 mr-2 border border-gray-400"
            />
            <button
                onClick={handleAddTodo}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Добавить задачу
            </button>
        </div>
    );
};

export default TodoInput;
