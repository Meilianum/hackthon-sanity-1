// 
import React from "react";
import Link from "next/link";   
import { BiSolidUserCheck } from "react-icons/bi";
import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="text-gray-600 body-font border-b">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex flex-grow items-center justify-between gap-4 md:gap-10">
            {/* Navigation Links */}
            <nav className="hidden md:flex flex-wrap justify-evenly items-end text-base  gap-6 lg:gap-10">
              <Link href="/Shop" className="hover:text-gray-900">
                Shop
              </Link>
              <Link href="/About" className="hover:text-gray-900">
                About
              </Link>
              <Link href="/Contact" className="hover:text-gray-900">
                Contact
              </Link>
            </nav>
            {/* Header Icons */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <BiSolidUserCheck className="text-xl cursor-pointer hover:text-gray-900" />
              <FaSearch className="text-xl cursor-pointer hover:text-gray-900" />
              <FaRegHeart className="text-xl cursor-pointer hover:text-gray-900" />
              <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-900" />
            </div>
          </div>
        </div>
      </header>

      {/* Image Section */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      {/* <Image
  src="/images/Group 78.png" // Image path
  alt="Cart"
  width={500} // Width of the image (in pixels)
  height={500} // Height of the image (in pixels)
  className="object-cover" // Optional styling
/> */}


      {/* Full Width Image Section */}
      <div className="w-full mt-5">
        <img 
          src="/images/Group 185 (1).png" 
          alt="Full Width Image" 
          className="w-full h-auto" 
        />
      </div>
      <div className="bg-[#FAF4F4] w-full py-10 m-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-5 text-center">
          {/* Free Delivery */}
          <div>
            <h2 className="font-medium text-gray-900 text-lg sm:text-xl">Free Delivery</h2>
            <p className="text-sm sm:text-base mt-2">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          {/* 90 Days Return */}
          <div>
            <h2 className="font-medium text-gray-900 text-lg sm:text-xl">90 Days Return</h2>
            <p className="text-sm sm:text-base mt-2">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          {/* Secure Payment */}
          <div>
            <h2 className="font-medium text-gray-900 text-lg sm:text-xl">Secure Payment</h2>
            <p className="text-sm sm:text-base mt-2">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
    </div>
</div>
</div>
  );
}
