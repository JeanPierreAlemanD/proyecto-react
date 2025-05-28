import { useState } from "react";
import { TallaEnum } from "@models/tallas.enum";

interface TallasProps {
    onTallaSelect?: (talla: string) => void;
    defaultTalla?: TallaEnum;
}

const TallasChips = ({ onTallaSelect, defaultTalla = TallaEnum.Small }: TallasProps) => {
    const [tallaSeleccionada, setTallaSeleccionada] = useState<TallaEnum>(defaultTalla);
    const Tallas = Object.values(TallaEnum);

    const selectTalla = (talla: TallaEnum) => {
        setTallaSeleccionada(talla);
        if (onTallaSelect) {
            onTallaSelect(talla);
        }
    };


    return (
        <div className="flex flex-wrap gap-3">
            {Tallas.map((talla) => {
                const isSelected = talla === tallaSeleccionada;
                return (
                    <button
                        onClick={() => selectTalla(talla)}
                        key={talla}
                        className={`sm:w-[90px] sm:flex justify-between  lg:w-[100px] px-3 py-1 rounded-full text-sm cursor-pointer 
                            ${isSelected ? 'bg-black text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
                        {talla}
                    </button>
                );
            })}
        </div>
    );
}

export default TallasChips;