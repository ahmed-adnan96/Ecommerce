export interface Products {
  imageCover: string;
  ratingsAverage: number;
  id?: string;
  price: number;
  title: string;
  category: { name: string };
}
