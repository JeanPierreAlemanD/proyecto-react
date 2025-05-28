import QuantitySelector from "@components/QuantitySelector";
import React from "react";
import { IProductoCarrito } from "@models/IProductsDetails";
import { MdClose } from "react-icons/md";

interface SummaryCartListProps {
    products: IProductoCarrito[];
    updateCantidad: (index: number, newCantidad: number) => void;
    removeProduct: (index: number) => void;
}

const SummarryCartList: React.FC<SummaryCartListProps> = ({
    products,
    updateCantidad,
    removeProduct,
}) => {
    return (
        <ul className="flex-1 space-y-4 max-h-[450px] overflow-y-auto">
            {products.map((producto, index) => (
                <li key={index}
                    className="relative border p-4 rounded shadow flex items-center space-x-6" >
                    {/* Botón eliminar - posición absoluta arriba derecha */}
                    <button
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded hover:bg-red-600 flex items-center justify-center"
                        onClick={() => removeProduct(index)}
                        aria-label="Eliminar producto"
                        title="Eliminar producto"  >
                        <MdClose size={20} />
                    </button>

                    {/* Imagen a la izquierda */}
                    <img
                        src={producto.image}
                        alt={producto.title}
                        className="w-24 h-24 object-cover rounded flex-shrink-0"
                    />

                    {/* Detalle en el centro */}
                    <div className="flex-1 text-left">
                        <h2 className="text-lg font-semibold">{producto.title}</h2>
                        <p >Size: {producto.talla}</p>
                        <p >Precio: ${producto.price.toFixed(2)}</p>
                    </div>

                    {/* Cantidad abajo a la derecha */}
                    <div className="flex-shrink-0 self-end">
                        <QuantitySelector
                            initialQuantity={producto.cantidad || 1}
                            onQuantityChange={(newQty) => updateCantidad(index, newQty)}
                        />
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default SummarryCartList;
