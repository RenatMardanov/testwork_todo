import clsx from "clsx";
import React from "react";

interface CategoryButtonProps {
    onClick: () => void;
    color: string;
    children: React.ReactNode;
    active: boolean;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({
    onClick,
    color,
    children,
    active,
}) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "w-5/12 lg:w-1/5 rounded-xl p-4 shadow-md hover:shadow-xl transition-all",
                active && "bg-opacity-50 shadow-lg",
                color
            )}
        >
            {children}
        </button>
    );
};
