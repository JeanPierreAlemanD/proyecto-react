import Button from "@components/Button";
import ImageGallery from "@components/ImagenGallery";
import QuantitySelector from "@components/QuantitySelector";
import { ShoppingCartContext } from "@context/index";
import useFetch from "@hooks/useFetch";
import { IProductoCarrito } from "@models/IProductsDetails";
import { Category, IResProductsAll } from "@models/productsAll";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailAll() {
    const { id } = useParams<{ id: string }>();
    const { data: productAll, loading, error } = useFetch<IResProductsAll>(`https://api.escuelajs.co/api/v1/products/${id}`);
    const [cantidad, setCantidad] = useState<number>(1);
    const { CartProducts, setCartProducts } = useContext(ShoppingCartContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!productAll) {
        return <div>No se encontró el producto.</div>;
    }


    return (
        <div className="w-full p-5  min-h-screen">
            <div className="mt-5" style={{ width: "100%", height: "1px", backgroundColor: "#0000001A" }}></div>
            {/* dividir */}
            <div className="container flex flex-col md:flex-row gap-2 mt-2 items-center">
                <div className="flex justify-center items-center w-full md:w-1/2">
                    <ImageGallery images={productAll.images} />
                </div>
                <div className="md:w-1/2">
                    <div className="flex flex-col justify-start items-start">
                        <p className="text-left text-[40px] font-bold leading-[100%] mb-4 sm:mt-4">{productAll.title}</p>
                        <span className="text-[32px] font-semibold text-left mt-2">${productAll.price}</span>
                        <span className="text-[20px] font-bold">Description:</span>
                        <p className="text-[16px] text-black/60 mt-2 text-justify pr-5"> {productAll.description}</p>
                    </div>
                    <div className="separador mt-3"></div>
                    <div className="separador mt-3"></div>
                    <div className="flex flex-row mt-4 items-center gap-4">
                        <QuantitySelector onQuantityChange={(qty) => setCantidad(qty)} ></QuantitySelector>
                        <Button label="Añadir al carrito" variant="primary" className="bg-black text-white px-4 py-2 rounded ml-4 radius-40"
                            onClick={() => {
                                const productoCarrito: IProductoCarrito = {
                                    id: productAll.id,
                                    title: productAll.title,
                                    price: productAll.price,
                                    description: productAll.description,
                                    category: productAll.category as Category,
                                    image: productAll.images[0],
                                    rating: {
                                        rate: 5,
                                        count: 1,
                                    },
                                    talla: "M",
                                    cantidad: cantidad,
                                };
                                setCartProducts([...CartProducts, productoCarrito]);
                            }}
                        ></Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductDetailAll