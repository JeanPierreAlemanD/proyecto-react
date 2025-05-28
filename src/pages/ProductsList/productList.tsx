
import { Category, IResProducts } from "@models/product";
import Cards from "@components/Cards";
import Button from "@components/Button";
import useFetch from "@hooks/useFetch";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

interface ProductsListProps {
    category?: Category;
    title?: string;
}

const ProductList = ({ category, title }: ProductsListProps) => {
    const { data: products, loading, error } = useFetch<IResProducts[]>("https://fakestoreapi.com/products");
    const [showAll, setShowAll] = useState<boolean>(false);

    const filteredProducts = useMemo(() => {
        return category
            ? (products || []).filter(product => product.category === category)
            : (products || []);
    }, [products, category]);


    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error al cargar los productos: {error.message}</p>;

    const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 4);
    return (
        <div>
            <p className="uppercase font-bold text-[48px] p-5">{title}</p>
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
                    {displayedProducts.length > 0 ? (
                        displayedProducts.map((product) => (
                            <Link to={`/product/${product.id}`} key={product.id} className="w-full">
                                <Cards
                                    key={product.id}
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                    rating={product.rating}
                                    onClick={() => console.log('click')} />
                            </Link>
                        ))
                    ) : (
                        <p className="col-span-full">Cargando productos...</p>
                    )}
                </div>
                {filteredProducts.length > 4 && (
                    <div className="flex justify-center mt-6">
                        <Button
                            size="md"
                            width="lg"
                            label={showAll ? "Ver menos " : "Ver más"}
                            className="border rounded-full border-black text-black bg-transparent hover:bg-black hover:text-white py-2 px-4 transition"
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
