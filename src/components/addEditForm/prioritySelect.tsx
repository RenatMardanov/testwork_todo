import React, { useState } from "react";
import { CategoryButton } from "../categoryButton";
import { UseFormSetValue } from "react-hook-form";
import { ITodo } from "../../store/todos/todos.slice";

interface PrioritySelectProps {
    setValue: UseFormSetValue<ITodo>;
    active: number;
}

export const PrioritySelect: React.FC<PrioritySelectProps> = ({ setValue, active }) => {
    const [activePriority, setActivePriority] = useState<number>(active);

    const handlePrioritySelect = (priority: number) => {
        setValue("importance", priority);
        setActivePriority(priority);
    };

    return (
        <>
            <label htmlFor="importance" className="mb-2">
                Выберите приоритет:
            </label>
            <div className="flex justify-around mb-4">
                <CategoryButton
                    onClick={() => handlePrioritySelect(1)}
                    color="bg-green-400"
                    active={activePriority === 1}
                >
                    Низкий
                </CategoryButton>
                <CategoryButton
                    onClick={() => handlePrioritySelect(2)}
                    color="bg-yellow-400"
                    active={activePriority === 2}
                >
                    Средний
                </CategoryButton>
                <CategoryButton
                    onClick={() => handlePrioritySelect(3)}
                    color="bg-red-400"
                    active={activePriority === 3}
                >
                    Высокий
                </CategoryButton>
            </div>
        </>
    );
};
