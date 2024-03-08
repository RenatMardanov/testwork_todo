interface IFillTitle {
    title: string;
}

export const FillTitle: React.FC<IFillTitle> = ({ title }) => (
    <h2 className="text-xl font-bold mb-4">{title}</h2>
);
