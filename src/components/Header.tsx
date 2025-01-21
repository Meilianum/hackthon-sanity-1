import React from "react";
import Link from "next/link";   
import { BiSolidUserCheck } from "react-icons/bi";
import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <div className="border-2 bg-[#FBEBB5] w-full min-h-screen flex flex-col">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex flex-grow items-center justify-between md:justify-start gap-6">
            {/* Logo Section */}
            <div className="text-xl font-bold">
              <Link href="/"></Link> {/* Replace with actual logo */}
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex md:ml-auto flex-wrap items-center text-base justify-center gap-10">
              <Link href="/Shop" className="hover:text-gray-900">Shops</Link>
              <Link href="/About" className="hover:text-gray-900">About</Link>
              <Link href="/Contact" className="hover:text-gray-900">Contact</Link>
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

      {/* Main Section */}
      <div className="w-full h-auto flex flex-col md:flex-row items-center justify-between text-center m-10 p-10 space-y-4 md:space-y-0 md:space-x-10">
        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
          <p className="font-popings text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Rocket Single
          </p>
          <p className="font-popings text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Seater
          </p>
          <br />
          <button className="mt-6 underline text-lg sm:text-xl md:text-2xl lg:text-3xl hover:text-blue-900">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center mt-6 md:mt-0">
          <img className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px]" src="/images/Rocket single seater 1.svg" alt="Rocket Single Seater" />
        </div>
      </div>
    </div>
  );
}

