import React, { useState } from "react";
import { Categories, ITodo } from "../../store/todos/todos.slice";
import { CategoryButton } from "../categoryButton";
import { UseFormSetValue } from "react-hook-form";

interface CategorySelectProps {
    setValue: UseFormSetValue<ITodo>;
}

export const CategorySelect: React.FC<CategorySelectProps> = ({ setValue }) => {
    const [activeCategory, setActiveCategory] = useState<Categories | null>(null);

    const handleCategorySelect = (category: Categories) => {
        setValue("category", category);
        setActiveCategory(category);
    };

    return (
        <>
            <label htmlFor="category" className="mb-2">
                Выберите категорию
            </label>
            <div className="flex gap-2 mb-2">
                <CategoryButton
                    color="bg-teal-400"
                    onClick={() => handleCategorySelect(Categories.WORK)}
                    active={activeCategory === Categories.WORK}
                >
                    {Categories.WORK}
                </CategoryButton>
                <CategoryButton
                    color="bg-emerald-400"
                    onClick={() => handleCategorySelect(Categories.SHOPPING)}
                    active={activeCategory === Categories.SHOPPING}
                >
                    {Categories.SHOPPING}
                </CategoryButton>
                <CategoryButton
                    color="bg-violet-400"
                    onClick={() => handleCategorySelect(Categories.SPORT)}
                    active={activeCategory === Categories.SPORT}
                >
                    {Categories.SPORT}
                </CategoryButton>
                <CategoryButton
                    color="bg-slate-400"
                    onClick={() => handleCategorySelect(Categories.HOME)}
                    active={activeCategory === Categories.HOME}
                >
                    {Categories.HOME}
                </CategoryButton>
            </div>
        </>
    );
};
