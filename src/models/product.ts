export interface IResProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
}

export enum Category {
  MensClothing = "men's clothing",
  WomensClothing = "women's clothing",
  Jewelery = "jewelery",
  Electronics = "electronics"
}

// export interface Category {
//   id: number;
//   name: string;
//   image: string;
//   slug: string;
// }

export interface Rating {
  rate: number;
  count: number;
}


