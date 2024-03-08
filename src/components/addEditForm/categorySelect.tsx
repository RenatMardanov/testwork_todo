import React, { useState } from "react";
import { Categories, ITodo } from "../../store/todos/todos.slice";
import { CategoryButton } from "../categoryButton";
import { UseFormSetValue } from "react-hook-form";

interface CategorySelectProps {
    setValue: UseFormSetValue<ITodo>;
    active: Categories;
}

export const CategorySelect: React.FC<CategorySelectProps> = ({ setValue, active }) => {
    const [activeCategory, setActiveCategory] = useState<Categories>(active);

    const handleCategorySelect = (category: Categories) => {
        setValue("category", category);
        setActiveCategory(category);
    };

    return (
        <>
            <label htmlFor="category" className="mb-2 block">
                Выберите категорию:
            </label>
            <div className="flex mb-2 gap-2 justify-between">
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
            </div>
        </>
    );
};
