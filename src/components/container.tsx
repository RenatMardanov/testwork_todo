import { ReactNode } from "react";

interface IContainer {
    children: ReactNode;
}

export const Container: React.FC<IContainer> = ({ children }) => {
    return (
        <div className="container m-auto px-3 min-w-80 transition-all duration-250 relative">
            {children}
        </div>
    );
};
