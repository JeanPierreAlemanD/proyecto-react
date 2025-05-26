// import Menu from "../components/Menu";
import { useState } from "react";
import icon from "../assets/icon/SHOP.CO.svg";
import { IMenuItem } from "../models/menu";
import Menu from "../components/Menu";
import { FiShoppingCart } from "react-icons/fi";
import { FileSearchIcon, FileUser, MenuIcon, X } from "lucide-react";


const menuItems: IMenuItem[] = [
    { title: 'Home', url: '/' },
    { title: 'On Sale', url: 'on-sale' },
    { title: 'New Arrivals', url: 'new-arrivals' },
    { title: 'Brands', url: 'brands' },
]

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="bg-white text-black lg:p-6 sm:p-3 text-xs">
            <nav className="flex flex-col md:flex-row md:items-center lg:gap-5">

                <div className="flex items-center  md:justify-start md:justify-between md:w-auto w-full">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <div className="flex items-center gap-2">
                            <button
                                className="md:hidden p-3"
                                onClick={() => setIsOpen((prev) => !prev)}>
                                {isOpen ? <X size={24} /> : <MenuIcon size={28} />}
                            </button>
                            <img src={icon} alt="Logo" className="w-24 h-auto" />
                        </div>
                        {/* Iconos */}
                        <div className="lg:hidden flex gap-2">
                            <div className="p-3">
                                <FiShoppingCart size={20} className="cursor-pointer" />
                            </div>
                            <div className="p-3">
                                <FileUser size={20} className="cursor-pointer" />
                            </div>

                        </div>
                    </div>
                </div>

                {/* Menú de navegación (visible siempre en desktop, colapsable en mobile) */}
                <div className="w-full md:w-auto p-2">
                    <Menu items={menuItems} isOpen={isOpen} />
                </div>

                {/* Centro: Input con icono */}
                <div className={`relative w-full sm:w-1/2 hidden md:block`} >
                    <FileSearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="md:w-[577px] pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none"
                    />
                </div>

                {/* Derecha: Iconos verticales */}
                <div className="hidden  sm:flex flex-row items-center gap-2">
                    <div className="p-2">
                        <FiShoppingCart size={20} className="cursor-pointer" />
                    </div>
                    <div className="p-2">
                        <FileUser size={20} className="cursor-pointer" />
                    </div>
                </div>
            </nav>
        </header >
    );
};

export default Header;