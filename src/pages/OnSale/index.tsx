import Cards from "@components/Cards";
import CategoryCarousel from "@components/Carousel";
import useFetch from "@hooks/useFetch";
import { IResProductsAll } from "@models/productsAll";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


const ProductAll = () => {
    const { data: produtcsAll, loading, error } = useFetch<IResProductsAll[]>('https://api.escuelajs.co/api/v1/products');

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error al cargar productos</p>;

    const categories = Array.from(new Set(produtcsAll?.map(p => p.category.name) ?? []));

    const filteredProducts = selectedCategory
        ? produtcsAll?.filter(p => p.category.name === selectedCategory)
        : produtcsAll;


    return (
        <div>
            <div className="p-8">
                <div>
                    <CategoryCarousel
                        categories={categories}
                        onCategoryClick={(cat) => setSelectedCategory(cat === selectedCategory ? null : cat)} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
                    {filteredProducts?.map((product) => (
                        <Link to={`/productAll/${product.id}`} key={product.id} className="w-full">
                            <Cards
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                image={product.images[0]}
                                onClick={() => console.log('click')} />
                        </Link>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductAll;