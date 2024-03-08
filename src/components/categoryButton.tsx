import React from "react";
import clsx from "clsx";

interface CategoryButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    color: string;
    active: boolean;
    children: React.ReactNode;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({
    onClick,
    color,
    active,
    children,
}) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onClick(event);
    };

    return (
        <button
            onClick={handleClick}
            className={clsx(
                "w-5/12 lg:w-1/5 rounded-xl p-2 shadow-md hover:shadow-xl transition-all min-w-min box-border",
                active && "bg-opacity-50 shadow-lg shadow-black",
                color
            )}
        >
            {children}
        </button>
    );
};
