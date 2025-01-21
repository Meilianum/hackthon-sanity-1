"use client";



import { useEffect, useState } from 'react';
import { fetchProducts } from '../../sanity/lib/fetchData';

const ProductsPage = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product: any) => (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Discount: {product.discountPercentage}%</p>
            <p>Stock Level: {product.stockLevel}</p>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
