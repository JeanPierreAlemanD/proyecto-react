import SummarryCartList from "@components/Summary";
import { ShoppingCartContext } from "@context/index";
import { useContext } from "react";

console.log("ℹ️ CartProducts cargado (lazy)");

function CartProducts() {
    const { CartProducts, updateCantidad, removeProduct } = useContext(ShoppingCartContext);

    // Calcular subtotal sumando price * cantidad de cada producto
    const subtotal = CartProducts.reduce(
        (acc, producto) => acc + producto.price * (producto.cantidad || 1),
        0
    );

    const impuesto = subtotal * 0.18; // 18% de impuesto
    const total = subtotal + impuesto;

    return (
        <div className="min-h-screen w-full p-4">
            <h1 className="text-2xl font-bold mb-6">Carrito de compras</h1>

            {CartProducts.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Izquierda: lista de productos */}
                    <SummarryCartList
                        products={CartProducts}
                        updateCantidad={updateCantidad}
                        removeProduct={removeProduct}
                    />

                    {/* Derecha: resumen de compra */}
                    <div className="w-full md:w-1/2 max-w-md border p-6 rounded shadow flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-bold mb-4">Resumen de compra</h2>
                            <div className="flex justify-between mb-2">
                                <span>Subtotal:</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Impuesto (18%):</span>
                                <span>${impuesto.toFixed(2)}</span>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total:</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <button
                            className="mt-6 bg-green-600 text-white py-3 rounded hover:bg-green-700 font-semibold"
                            onClick={() => alert("Compra realizada")}
                        >
                            Comprar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartProducts;
