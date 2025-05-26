import { useEffect, useState } from "react";
import { getProducts } from "../../core/services/productService";
import { Category, IResProducts } from "../../models/product";
import Cards from "../../components/Cards";
import Button from "../../components/Button";

interface ProductsListProps {
    category?: Category;
    title?: string;
}

const ProductList = ({ category, title }: ProductsListProps) => {
    const [products, setProducts] = useState<IResProducts[]>([]);
    const [showAll, setShowAll] = useState<boolean>(false);

    useEffect(() => {
        getProducts().then((res) => {
            const filteredProducts = category
                ? res.filter(product => product.category === category)
                : res;
            setProducts(filteredProducts);
        }
        );
    }, [category]);

    const displayedProducts = showAll ? products : products.slice(0, 4);
    return (
        <div>
            <p className="uppercase font-bold text-[48px] p-5">{title}</p>
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
                    {displayedProducts.length > 0 ? (
                        displayedProducts.map((product) => (
                            <a href={`product/${product.id}`} key={product.id} className="w-full">
                                <Cards
                                    key={product.id}
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                    rating={product.rating}
                                    onClick={() => console.log('click')} />
                            </a>
                        ))
                    ) : (
                        <p className="col-span-full">Cargando productos...</p>
                    )}
                </div>
                {products.length > 4 && (
                    <div className="flex justify-center mt-6">
                        <Button
                            size="md"
                            width="lg"
                            label={showAll ? "Ver menos " : "Ver más"}
                            className="border rounded-full border-black text-black bg-transparent hover:bg-black hover:text-white py-2 px-4 rounded transition"
                            variant="tertiary"
                            onClick={() => setShowAll(!showAll)}
                        />

                    </div>
                )}
                <div className="mt-5" style={{ width: "100%", height: "2px", backgroundColor: "#0000001A" }}></div>
            </div>
        </div>
    );
};

export default ProductList;
