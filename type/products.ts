import { Image } from "sanity";

interface Product {
    _id: number;
    name: string;
    type: Product;
    image?: {
        asset: {
            _ref: string;
            _type: Image;

        }
    };
    catagory: string;
    price: number;
    description: string;
    discountPercentage: number;
    isFeaturedProduct: boolean;
    stockLevel: number;
}