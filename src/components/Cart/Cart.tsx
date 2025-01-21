import React, { useState } from "react";
import Link from "next/link";
import { BiSolidUserCheck } from "react-icons/bi";
import { FaSearch, FaRegHeart, FaShoppingCart, FaRegTrashAlt } from "react-icons/fa";
import Image from "next/image";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 1,
      name: "Asgaard Sofa",
      price: 250000.0,
      quantity: 1,
    },
  ]);

  // Calculate subtotal for a product
  const calculateSubtotal = (item: CartItem) => item.price * item.quantity;

  // Calculate total for the cart
  const calculateTotal = () =>
    cart.reduce((total, item) => total + calculateSubtotal(item), 0);

  // Handle quantity change
  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const handleRemoveItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header */}
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex flex-grow items-center justify-between md:justify-start gap-6">
            {/* Logo Section */}
            <div className="text-xl font-bold">
              <Link href="/">Logo</Link>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex md:ml-auto flex-wrap items-center text-base justify-center gap-10">
              <Link href="/Shop" className="hover:text-gray-900">
                Shops
              </Link>
              <Link href="/About" className="hover:text-gray-900">
                About
              </Link>
              <Link href="/Contact" className="hover:text-gray-900">
                Contact
              </Link>
            </nav>

            {/* Header Icons */}
            <div className="flex items-center gap-4 md:gap-10">
              <BiSolidUserCheck className="text-xl cursor-pointer hover:text-gray-900" />
              <FaSearch className="text-xl cursor-pointer hover:text-gray-900" />
              <FaRegHeart className="text-xl cursor-pointer hover:text-gray-900" />
              <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-900" />
            </div>
          </div>
        </div>
      </header>
    
      <Image
  src="/images/Group 78.png" // Image path
  alt="Cart"
  width={500} // Width of the image (in pixels)
  height={500} // Height of the image (in pixels)
  className="object-cover" // Optional styling
/>





      {/* Cart Header */}
      <div className="flex justify-between items-center gap-4 w-[700px] max-w-3xl mx-auto bg-red-100 rounded-lg text-center font-semibold">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      {/* Cart Items */}
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex flex-wrap justify-between items-center w-[700px] max-w-3xl mx-auto mt-6 p-4 bg-white shadow-lg rounded-lg gap-4"
        >
          <img
            src="/images/Group 137.svg"
            alt={item.name}
            className="w-28 h-28 object-cover rounded-lg"
          />
          <span className="flex-1 font-semibold text-center">{item.name}</span>
          <span className="font-semibold text-center">
            Rs. {item.price.toLocaleString()}
          </span>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              handleQuantityChange(item.id, parseInt(e.target.value, 10) || 1)
            }
            className="w-16 h-10 border border-gray-300 rounded-lg text-center"
          />
          <span className="font-semibold text-center">
            Rs. {calculateSubtotal(item).toLocaleString()}
          </span>
          <FaRegTrashAlt
            className="text-red-500 cursor-pointer text-xl"
            onClick={() => handleRemoveItem(item.id)}
          />
        </div>
      ))}

      {/* Cart Totals */}
      <div className="w-[400px] max-w-lg mx-auto mt-10 p-6 bg-red-100 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>Rs. {calculateTotal().toLocaleString()}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Total</span>
          <span>Rs. {calculateTotal().toLocaleString()}</span>
        </div>
        < Link href="/Button.tsx">
  <button className="w-full h-12 text-white bg-black rounded-lg mt-4 hover:bg-gray-800">
    Checkout
  </button>
</Link>
       
      </div>
    </div>
  );
}
