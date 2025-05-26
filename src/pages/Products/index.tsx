import Header from "../../layaout/Header"


function ProductDetail() {
    return (
        <div className="w-full p-5">
            <Header />
            {/* dividir */}
            <div className="mt-5" style={{ width: "100%", height: "1px", backgroundColor: "#0000001A" }}></div>

            <div className="flex flex-col md:flex-row gap-2 mt-2">
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Nombre del Producto</h1>
                    <p className="text-gray-600 mt-2">Descripción del producto. Aquí puedes incluir detalles importantes sobre el producto, sus características y beneficios.</p>
                    <div className="mt-4">
                        <span className="text-xl font-semibold">$99.99</span>
                        <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ProductDetail