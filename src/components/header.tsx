interface IHeader {
    header: string;
}

export const Header: React.FC<IHeader> = ({ header }) => {
    return <h1 className="text-2xl font-bold mb-5 mt-9">{header}</h1>;
};
