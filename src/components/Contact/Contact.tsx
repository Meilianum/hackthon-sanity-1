import React from "react";
import Link from "next/link";
import { BiSolidUserCheck } from "react-icons/bi";
import { FaSearch, FaRegHeart, FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Footer from "@/components/Footer";

export default function Header() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header Section */}
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

      {/* Image Section */}
      <img src="/images/Group 78 (1).png" alt="Contactpic" className="w-full h-auto" />

      {/* Contact Heading */}
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold mb-2">Get In Touch With Us</h1>
        <p className="text-gray-600">
          For More Information About Our Product & Services. Please Feel Free To Drop Us <br />
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      {/* Contact Section */}
      <div className="container flex flex-wrap gap-10 p-6 mx-auto justify-between w-full max-w-[1200px]">
        {/* Left Section: Contact Info */}
        <div className="flex flex-col gap-8 w-full lg:max-w-[500px]">
          {/* Address Section */}
          <div className="flex flex-row gap-5 items-start">
            <span className="text-2xl">
              <CiLocationOn />
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-semibold">Address</span>
              <span className="text-gray-700">
                236 5th SE Avenue, New <br />
                York NY10000, United <br />
                States
              </span>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex flex-row gap-5 items-start">
            <span className="text-2xl">
              <FaPhoneAlt />
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-semibold">Phone</span>
              <span className="text-gray-700">
                Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789
              </span>
            </div>
          </div>

          {/* Working Time Section */}
          <div className="flex flex-row gap-5 items-start">
            <span className="text-2xl">
              <MdOutlineWatchLater />
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-semibold">Working Time</span>
              <span className="text-gray-700">
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </span>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="flex flex-col gap-5 p-6 bg-white shadow-md rounded-lg w-full lg:max-w-[600px]">
          <label htmlFor="name" className="text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full h-[50px] border rounded-xl px-4 placeholder:text-gray-500"
            placeholder="abc"
          />

          <label htmlFor="email" className="text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full h-[50px] border rounded-xl px-4 placeholder:text-gray-500"
            placeholder="abc@defgmail.com"
          />

          <label htmlFor="subject" className="text-gray-700">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full h-[50px] border rounded-xl px-4 placeholder:text-gray-500"
            placeholder="This is optional"
          />

          <label htmlFor="message" className="text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            className="w-full h-[100px] border rounded-xl px-4 placeholder:text-gray-500 resize-none"
            placeholder="Hi! I'd like to ask about..."
          ></textarea>

          <button
            type="submit"
            className="w-40 h-[50px] border bg-gray-900 text-white rounded-xl transition hover:bg-gray-700 text-center"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-purple-200 py-10 flex flex-col md:flex-row justify-between items-center px-10">
        {/* Free Delivery */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-semibold text-gray-900 text-lg sm:text-xl lg:text-2xl">Free Delivery</h2>
          <p className="text-sm sm:text-base text-gray-700 mt-2">
            For all orders over $50, consectetur <br /> adipiscing elit.
          </p>
        </div>

        {/* 90 Days Return */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-semibold text-gray-900 text-lg sm:text-xl lg:text-2xl">90 Days Return</h2>
          <p className="text-sm sm:text-base text-gray-700 mt-2">
            If goods have problems, consectetur <br /> adipiscing elit.
          </p>
        </div>

        {/* Secure Payment */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-semibold text-gray-900 text-lg sm:text-xl lg:text-2xl">Secure Payment</h2>
          <p className="text-sm sm:text-base text-gray-700 mt-2">
            100% secure payment, consectetur <br /> adipiscing elit.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
