import { Link } from "react-router-dom";
import { IMenuProps } from "@models/menu";

const Menu = ({ items, isOpen }: IMenuProps) => {
    return (
        <ul className={`flex-col md:flex-row md:flex md:gap-6 mt-2 md:mt-0 transition-all duration-300 ease-in-out ${isOpen ? "flex" : "hidden"}`}>
            {items.map((items, idx) => (
                <li key={idx} className="flex gap-4 pt-1 pb-1">
                    <Link
                        to={items.url} className="text-gray-600 hover:text-black transition-colors duration-200">
                        <p className="text-[16px] font-bold cursor-pointer">
                            {items.title}
                        </p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Menu;
