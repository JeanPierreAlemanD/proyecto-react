import { IResProducts } from "../../models/product";

export async function getProducts(): Promise<IResProducts[]> {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
}