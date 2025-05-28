import { IResProducts } from "./product";

// En tu ShoppingCartContext
export interface IProductoCarrito extends IResProducts {
    talla: string;
    cantidad: number;
}