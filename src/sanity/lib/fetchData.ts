// lib/fetchProducts.ts

import { client } from './client';

// Fetch Products Data (alwasy use this function)
export const fetchProducts = async () => {
  const query = `*[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    price,
    description,
    discountPercentage,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    stockLevel,
    category
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Error fetching from Sanity:', error);
    return [];
  }
};
