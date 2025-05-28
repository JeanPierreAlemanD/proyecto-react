import React, { useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface CategoryCarouselProps {
    categories: string[];
    onCategoryClick?: (category: string) => void;
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ categories, onCategoryClick }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const itemWidth = 120; // Ancho estimado por item (ajústalo si es necesario)
    const loopFactor = 5;  // Número de veces que duplicamos las categorías

    const repeatedCategories = Array(loopFactor).fill(categories).flat();

    const centerScroll = () => {
        const center = (categories.length * itemWidth) * Math.floor(loopFactor / 2);
        scrollRef.current?.scrollTo({ left: center, behavior: "auto" });
    };

    useEffect(() => {
        centerScroll();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        const amount = direction === "left" ? -itemWidth : itemWidth;
        scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });

        setTimeout(() => {
            const scrollLeft = scrollRef.current!.scrollLeft;

            const leftEdge = categories.length * itemWidth * 0.5;
            const rightEdge = categories.length * itemWidth * (loopFactor - 1.5);

            // Reposicionar al centro si se llega a los extremos
            if (scrollLeft <= leftEdge || scrollLeft >= rightEdge) {
                centerScroll();
            }
        }, 350); // Espera a que termine el scroll suave
    };

    return (
        <div className="w-[500px] mb-6 mx-auto">
            <p className="text-[20px] text-bolder p-4 text-center">Filtra por Categoria</p>
            <div className="relative bg-white shadow-md rounded-xl p-4 overflow-hidden">
                {/* Botón izquierdo */}
                <span
                    role="button"
                    tabIndex={0}
                    aria-label="Slide left"
                    className="absolute left-0 top-0 bottom-0 flex items-center px-3 bg-white rounded-[5px] z-10 cursor-pointer hover:bg-gray-100"
                    onClick={() => scroll("left")}
                >
                    <FiChevronLeft size={20} />
                </span>

                {/* Carrusel infinito */}
                <div
                    ref={scrollRef}
                    className="flex overflow-hidden space-x-3 px-8"
                    style={{ whiteSpace: "nowrap" }} >
                    {repeatedCategories.map((category, index) => (
                        <span
                            key={`${category}-${index}`}
                            role="button"
                            tabIndex={0}
                            id={category.toLowerCase() + "-" + index}
                            onClick={() => onCategoryClick?.(category)}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-1 rounded-[5px] cursor-pointer text-sm border border-gray-300 flex-shrink-0 uppercase"
                            style={{ minWidth: `${itemWidth - 10}px` }}>
                            {category}
                        </span>
                    ))}
                </div>

                {/* Botón derecho */}
                <span
                    role="button"
                    tabIndex={0}
                    aria-label="Slide right"
                    className="absolute right-0 top-0 bottom-0 flex items-center px-3 bg-white rounded-[5px] z-10 cursor-pointer hover:bg-gray-100"
                    onClick={() => scroll("right")}
                >
                    <FiChevronRight size={20} />
                </span>
            </div>
        </div>
    );

};

export default CategoryCarousel;
