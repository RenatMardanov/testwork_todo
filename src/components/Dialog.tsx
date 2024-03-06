import { ReactNode } from "react";

interface IDialog {
    children: ReactNode;
}

const Dialog: React.FC<IDialog> = ({ children }) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6">{children}</div>
        </div>
    );
};

export default Dialog;
