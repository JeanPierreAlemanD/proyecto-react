
import { IProductoCarrito } from "@models/IProductsDetails";
import React, { createContext, useEffect, useState } from "react";

interface ShoppingCartContextprops {
    CartProducts: IProductoCarrito[];
    setCartProducts: React.Dispatch<React.SetStateAction<IProductoCarrito[]>>;
    updateCantidad: (index: number, newCantidad: number) => void;
    removeProduct: (index: number) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ShoppingCartContext = createContext<ShoppingCartContextprops>({} as ShoppingCartContextprops);

interface ShoppingCartProvidersProps {
    children: React.ReactNode;
}
const STORAGE_KEY = "cart_products";

export const ShoppingCartProvider = ({ children }: ShoppingCartProvidersProps) => {
    const [CartProducts, setCartProducts] = useState<IProductoCarrito[]>(() => {
        try {
            const storedProducts = localStorage.getItem('cart_products');
            return storedProducts ? JSON.parse(storedProducts) : [];
        } catch (error) {
            console.error("Error al cargar los productos del carrito desde localStorage:", error);
            return [];
        }
    });

    // Cada vez que CartProducts cambia, actualizar localStorage
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(CartProducts));
    }, [CartProducts]);

    const updateCantidad = (index: number, newQty: number) => {
        setCartProducts((prevProducts) => {
            const updated = [...prevProducts];
            updated[index] = {
                ...updated[index],
                cantidad: newQty,
            };
            return updated;
        });
    };

    const removeProduct = (index: number) => {
        setCartProducts((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <ShoppingCartContext.Provider value={{ CartProducts, setCartProducts, updateCantidad, removeProduct }}>
            {children}
        </ShoppingCartContext.Provider>
    )
};

