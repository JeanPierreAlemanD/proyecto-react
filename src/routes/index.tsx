// src/routes/AppRoutes.tsx
import { Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import { lazy, Suspense } from "react";

// Lazy-loaded components
const MainLayout = lazy(() => import("../layaout/MainLayout"));
const ProductDetail = lazy(() => import("../pages/ProductDetail/ProductDetail"));
const CartProducts = lazy(() => import("../pages/CartProducts"));


const AppRoutes = () => {
    return (
        <Suspense fallback={<div className="text-center p-4">Cargando...</div>}>
            <Routes>

                {/* Ruta padre */}
                <Route path="/" element={<App />}>
                    <Route index element={<Navigate to="home" replace />} />
                    <Route path="home" element={<MainLayout />} />
                    <Route path="product/:id" element={<ProductDetail />} />
                    <Route path="cart" element={<CartProducts />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
