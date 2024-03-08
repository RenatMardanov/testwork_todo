import { ReactNode } from "react";

interface IDialog {
    children: ReactNode;
    onOpen: boolean;
}

export const Dialog: React.FC<IDialog> = ({ children, onOpen }) => {
    return (
        <>
            {onOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 box-border">
                    <div className="flex flex-col box-border bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};
