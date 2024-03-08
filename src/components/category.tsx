import { ReactNode } from "react";

interface ICategory {
    children: ReactNode;
}

export const Category: React.FC<ICategory> = ({ children }) => {
    return <div className="flex flex-wrap gap-3 justify-between mb-8">{children}</div>;
};
