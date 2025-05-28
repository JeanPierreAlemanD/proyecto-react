import { useEffect, useState } from "react";
import TallasChips from "@components/Chips"
import { useParams } from "react-router-dom";
import useFetch from "@hooks/useFetch";
import RatingStar from "@components/RatingStar";
import QuantitySelector from "@components/QuantitySelector";
import Button from "@components/Button";
import { TallaEnum } from "@models/tallas.enum";
import './index.css';
import { useContext } from "react";
import { ShoppingCartContext } from "@context/index";
import { IProductoCarrito } from "@models/IProductsDetails";

console.log("🏠 ProductDetail cargado (normal)");

function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const { data: product, loading, error } = useFetch<IProductoCarrito>(`https://fakestoreapi.com/products/${id}`);
    const [tallaSeleccionada, setTallaSeleccionada] = useState<string>('');
    const [cantidad, setCantidad] = useState<number>(1);
    const context = useContext(ShoppingCartContext);

    // Selecionar talla por defecto al cargar el componente
    useEffect(() => {
        setTallaSeleccionada(TallaEnum.Small);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleTallaChange = (talla: string) => {
        setTallaSeleccionada(talla);
    };

    if (!product) {
        return <div>No se encontró el producto.</div>;
    }

    const handleAgregarCarrito = (product: IProductoCarrito) => {
        const productoConDetalle = {
            ...product,
            talla: tallaSeleccionada,
            cantidad: cantidad,
        }
        const existe = context.CartProducts.find(p => p.id === product.id && p.talla === tallaSeleccionada);
        if (existe) {
            const carritoActualizado = context.CartProducts.map(p => {
                if (p.id === product.id && p.talla === tallaSeleccionada) {
                    return { ...p, cantidad: p.cantidad + cantidad };
                }
                return p;
            });
            context.setCartProducts(carritoActualizado);
        } else {
            context.setCartProducts([...context.CartProducts, productoConDetalle]);
        }
    };

    return (
        <div className="w-full p-5  min-h-screen">
            <div className="mt-5" style={{ width: "100%", height: "1px", backgroundColor: "#0000001A" }}></div>
            {/* dividir */}
            <div className="container flex flex-col md:flex-row gap-2 mt-2 items-center">
                <div className="flex justify-center items-center w-full md:w-1/2">
                    <img className="w-[288px] h-[230px] lg:w-[440px] lg:h-[530px] p-5" src={product.image} alt={product.title} />
                </div>
                <div className="md:w-1/2">
                    <div className="flex flex-col justify-start items-start">
                        <p className="text-left text-[40px] font-bold leading-[100%] mb-4 sm:mt-4">{product.title}</p>
                        {product.rating !== undefined && (
                            <RatingStar rating={product.rating.rate} />
                        )}
                        <span className="text-[32px] font-semibold text-left mt-2">${product.price}</span>
                        <p className="text-[16px] text-black/60 mt-2 text-justify pr-5">{product.description}</p>
                    </div>
                    <div className="separador mt-3"></div>
                    <div className="flex flex-col md:flex-cols gap-2 mt-2 justify-start">
                        <p className="text-left">Choose Size</p>
                        <TallasChips onTallaSelect={handleTallaChange} defaultTalla={TallaEnum.Small} />
                    </div>
                    <div className="separador mt-3"></div>
                    <div className="flex flex-row mt-4 items-center gap-4">
                        <QuantitySelector onQuantityChange={(qty) => setCantidad(qty)} ></QuantitySelector>
                        <Button label="Añadir al carrito" onClick={() => handleAgregarCarrito(product)} variant="primary" className="bg-black text-white px-4 py-2 rounded ml-4 radius-40"></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail