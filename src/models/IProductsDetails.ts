import { IResProducts } from "./product";

export interface IProductoCarrito extends IResProducts {
    talla: string;
    cantidad: number;
}