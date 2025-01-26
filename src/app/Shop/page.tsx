"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import type { Product } from "../../type/products";
import { allProducts } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "../button/button";
import Swal from 'sweetalert2';


const Product = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchProduct: Product[] = await client.fetch(allProducts);
        setProduct(fetchProduct);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: 'top-right',
      icon: 'success', // Corrected spelling
      title: `${product.name} added to cart`, // Use product.name instead of product.productName if that's the field
      showConfirmButton: false,
      timer: 1000,
    });
  
    addToCart(product); // Ensure addToCart is defined and imported
  };
  
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Section Header */}
      <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
        Our Latest Products
      </h1>

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-gray-600">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-slate-400">
          {product.map((item) => (
            <div
              key={item._id}
              className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow transform hover:scale-110 duration-300 bg-white"
            >
           <Link href={`/product/${item.slug.current}`}>
  {/* Product Image */}
  {item.image && (
    <Image
      src={urlFor(item.image).url() || ""}
      alt={item.name || "Product Image"}
      width={400}
      height={400}
      className="w-full h-64 object-cover rounded-md"
      loading="lazy"
    />
  )}

  {/* Product Details */}
  <div className="mt-4">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      {item.name}
    </h3>
    {item.description && (
      <p className="text-gray-600 text-sm mb-4">
        {item.description}
      </p>
    )}
    <p className="text-gray-800 font-bold text-lg">
      {item.price ? `$${item.price}` : "Price: N/A"}
    </p>
  </div>
  <button 
  className="bg-gradient-to-r from-blue-300 to-purple-400 text-white font-semibold  py-2 px-4 rounded shadow-md hover:shadow-lg transform hover:scale-110 duration-300 mt-4"
onClick={(e) => handleAddToCart(e, item)}
>
  Add to Cart
</button>
</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
