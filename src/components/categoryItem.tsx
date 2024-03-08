interface ICategoryItem {
    name: string;
    count?: number;
    icon?: React.ReactNode;
}

export const CategoryItem: React.FC<ICategoryItem> = ({ name, count, icon }) => {
    return (
        // <div className={clsx(` ${color}`)}>
        <>
            <div className="w-8  h-8 rounded-full bg-white flex items-center justify-center mb-1">
                {icon}
            </div>
            <div className="flex justify-between px-2 font-bold">
                <p>{name}</p>
                <p>{count}</p>
            </div>
        </>
        // </div>
    );
};
