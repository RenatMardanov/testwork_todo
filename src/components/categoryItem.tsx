interface ICategoryItem {
    name: string;
    count?: number;
    icon?: React.ReactNode;
}

export const CategoryItem: React.FC<ICategoryItem> = ({ name, count, icon }) => {
    return (
        <>
            <div className="w-8  h-8 rounded-full bg-white flex items-center justify-center mb-1">
                {icon}
            </div>
            <div className="flex justify-between p-2 font-bold text-base md:text-xl mt-2">
                <p className="w-2/3 text-left">{name}</p>
                <p>{count}</p>
            </div>
        </>
    );
};
