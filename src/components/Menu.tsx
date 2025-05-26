import { IMenuProps } from "../models/menu";

const Menu = ({ items, isOpen }: IMenuProps) => {
    return (
        <ul className={`flex-col md:flex-row md:flex md:gap-6 mt-2 md:mt-0 transition-all duration-300 ease-in-out ${isOpen ? "flex" : "hidden"}`}>
            {items.map((items, idx) => (
                <li key={idx} className="flex gap-4 pt-1 pb-1">
                    <a className="text-[16px] font-bold cursor-pointer">
                        {items.title}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Menu;
