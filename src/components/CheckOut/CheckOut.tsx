
// import React from 'react';
// import { BiSolidUserCheck } from "react-icons/bi";
// import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";
// import Link from 'next/link';

// function CheckOut() {
//   return (
//     <>
//       <div>
//         <div className="border-2 w-full min-h-screen flex flex-col">
//           <header className="text-gray-600 body-font">
//             <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//               <div className="flex flex-grow items-center justify-between md:justify-start gap-10">
//                 {/* Navigation Links */}
//                 <nav className="hidden md:flex md:ml-auto flex-wrap items-center text-base justify-center gap-10">
//                   <Link href="/Shop" className="hover:text-gray-900">Shop</Link>
//                   <Link  href="/About" className="hover:text-gray-900">About</Link>
//                   <Link href="/contact" className="hover:text-gray-900">Contact</Link>
//                 </nav>
//                 {/* Header Icons */}
//                 <div className="flex items-center space-x-4 md:gap-10">
//                   <BiSolidUserCheck className="text-xl cursor-pointer hover:text-gray-900" />
//                   <FaSearch className="text-xl cursor-pointer hover:text-gray-900" />
//                   <FaRegHeart className="text-xl cursor-pointer hover:text-gray-900" />
//                   <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-900" />
//                 </div>
//               </div>
//             </div>
//           </header>
//           <img src="/images/Group 78.svg" alt="checkout" />
//           <div className='container box w-full max-w-screen-xl mx-auto grid grid-cols- md:grid-cols px-4 md:px-0'>
//             <h1 className="text-start ml-4 md:ml-20">Billing details</h1>
//             <div className="flex flex-col md:flex-row md:gap-10 mt-6">
//               {/* First Name */}
//               <div className="flex flex-col gap-4">
//                 <label htmlFor="firstName">First Name:</label>
//                 <input
//                   id="firstName"
//                   type="text"
//                   className="border-2 border-black rounded-xl w-full md:w-[250px] h-[75px]" />
//               </div>
//               {/* Last Name */}
//               <div className="flex flex-col gap-4">
//                 <label htmlFor="lastName">Last Name:</label>
                
//                 <input
//                   id="lastName"
//                   type="text"
//                   className="border-2 border-black rounded-xl w-full md:w-[250px] h-[75px]" />
//               </div>
//             </div>
//             <br />
//             <br />
//             {/* Company Name */}
//             <div className="mt-6">
//               <label htmlFor="companyName">Company Name (Optional)</label>
//               <br />
//               <br />
//               <input
//                 id="companyName"
//                 type="text"
//                 className="border-2 border-black rounded-xl w-full md:w-[453px] h-[75px]" />
//             </div>
//             <br />
//             <br />
//             {/* Country */}
//             <div className="mt-6">
//               <label htmlFor="country" className="block mb-2">Country / Region</label>
//               <br />
//               <br />
//               <select
//                 id="country"
//                 className="border-2 border-black rounded-xl w-full md:w-[453px] h-[75px] pl-4 pr-10 text-gray-700 bg-white">
//                 <option value="sri-lanka">Sri Lanka</option>
//                 <option value="india">India</option>
//                 <option value="usa">USA</option>
//                 <option value="uk">UK</option>
//               </select>
//             </div>
//             <br />
//             <br />
//             {/* Street Address */}
//             <div className="mt-6">
//               <label htmlFor="streetAddress">Street Address</label>
//               <br />
//               <br />
//               <input
//                 id="streetAddress"
//                 type="text"
//                 className="border-2 border-black rounded-xl w-full md:w-[453px] h-[75px]" />
//             </div>
//             <br />
//             <br />
//             {/* City */}
//             <div className="mt-6">
//               <label htmlFor="city">Town / City</label>
//               <br />
//               <br />
//               <input
//                 id="city"
//                 type="text"
//                 className="border-2 border-black rounded-xl w-full md:w-[453px] h-[75px]" />
//             </div>
//             <br />
//             <br />
//             {/* Province */}
//             <div className="mt-6">
//               <label htmlFor="province">Province</label>
//               <br />
//               <br />
//               <select
//                 id="province"
//                 className="border-2 border-black rounded-xl w-full md:w-[453px] h-[75px] pl-4 pr-10 text-gray-700 bg-white">
//                 <option value="western">Western Province</option>
//                 <option value="southern">Southern Province</option>
//                 <option value="eastern">Eastern Province</option>
//               </select>
//             </div>
//             <br />
//             <br />
//             {/* Zip Code */}
//             <div className="mt-6">
//               <label htmlFor="zipCode">Zip Code</label>
//               <br />
//               <br />
//               <input
//                 id="zipCode"
//                 type="text"
//                 className="border-2 border-black rounded-xl w-full md:w-[453px] h-[75px]" />
//             </div>
//             <br />
//             <br />
//             {/* Phone */}
//             <div className="mt-6">
//               <label htmlFor="phone">Phone</label>
//               <br />
//               <br />
//               <input
//                 id="phone"
//                 type="text"
//                 className="border-2 border-black rounded-xl w-full md:w-[453px] h-[75px]" />
//             </div>
//             <br />
//             <br />
//             {/* Email */}
//             <div className="mt-6">
//               <label htmlFor="email">Email Address</label>
//               <br />
//               <br />
//               <input
//                 id="email"
//                 type="text"
//                 className="border-2 border-black rounded-xl w-full md:w-[453px] h-[75px]" />
//             </div>
//             <br />
//             <br />
//             {/* Additional Information */}
//             <div className="mt-6">
//               <label htmlFor="additionalInfo">Additional Information</label>
//               <br />
//               <br />
//               <input
//                 id="additionalInfo"
//                 type="text"
//                 className="border-2 border-black rounded-xl w-full md:w-[453px] h-[75px]" />
//             </div>
//           </div>
//         </div>
//         <div className="w-full max-w-md border-2 p-6 flex flex-col space-y-4 h-[400px]">
//   <h2 className="text-xl font-semibold text-start">Product</h2>
//   <h3 className="text-lg font-medium">Asgaard Sofa XL</h3>
  
//   <div className="flex justify-between items-center">
//     <p className="text-sm">Subtotal</p>
//     <p className="text-sm font-medium">$500</p>
//   </div>

//   <div className="flex justify-between items-center">
//     <p className="text-sm">Total</p>
//     <p className="text-sm font-semibold">$550</p>
//   </div>

//   <button className="w-full max-w-[200px] h-[50px] border rounded text-center text-black bg-gray-200 hover:bg-gray-300">
//     Checkout
//   </button>
// </div>

     
//       </div>
//     </>
//   );
// }

// export default CheckOut;

import React from "react";
import { BiSolidUserCheck } from "react-icons/bi";
import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

function CheckOut() {
  return (
    <>
      <div className="border-2 w-full min-h-screen flex flex-col">
        {/* Header Section */}
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <div className="flex flex-grow items-center justify-between md:justify-start gap-10">
              {/* Navigation Links */}
              <nav className="hidden md:flex md:ml-auto flex-wrap items-center text-base justify-center gap-10">
                <Link href="/Shop" className="hover:text-gray-900">
                  Shop
                </Link>
                <Link href="/About" className="hover:text-gray-900">
                  About
                </Link>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact
                </Link>
              </nav>
              {/* Header Icons */}
              <div className="flex items-center space-x-4 md:gap-10">
                <BiSolidUserCheck className="text-xl cursor-pointer hover:text-gray-900" />
                <FaSearch className="text-xl cursor-pointer hover:text-gray-900" />
                <FaRegHeart className="text-xl cursor-pointer hover:text-gray-900" />
                <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-900" />
              </div>
            </div>
          </div>
        </header>
        <img src="/images/Group 78.svg" alt="checkout" />
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Billing Details Section */}
          <div className="border-2 p-6 flex flex-col space-y-4">
            <h1 className="text-2xl font-bold">Billing Details</h1>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col w-full">
                <label htmlFor="firstName">First Name:</label>
                <input
                  id="firstName"
                  type="text"
                  className="border-2 border-black rounded-xl h-[50px] px-3"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  id="lastName"
                  type="text"
                  className="border-2 border-black rounded-xl h-[50px] px-3"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="companyName">Company Name (Optional):</label>
              <input
                id="companyName"
                type="text"
                className="border-2 border-black rounded-xl h-[50px] px-3"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="streetAddress">Street Address:</label>
              <input
                id="streetAddress"
                type="text"
                className="border-2 border-black rounded-xl h-[50px] px-3"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city">Town / City:</label>
              <input
                id="city"
                type="text"
                className="border-2 border-black rounded-xl h-[50px] px-3"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="province">Province:</label>
              <select
                id="province"
                className="border-2 border-black rounded-xl h-[50px] px-3"
              >
                <option value="western">Western Province</option>
                <option value="southern">Southern Province</option>
                <option value="eastern">Eastern Province</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="zipCode">Zip Code:</label>
              <input
                id="zipCode"
                type="text"
                className="border-2 border-black rounded-xl h-[50px] px-3"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone">Phone:</label>
              <input
                id="phone"
                type="text"
                className="border-2 border-black rounded-xl h-[50px] px-3"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email Address:</label>
              <input
                id="email"
                type="text"
                className="border-2 border-black rounded-xl h-[50px] px-3"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="additionalInfo">Additional Information:</label>
              <textarea
                id="additionalInfo"
                className="border-2 border-black rounded-xl h-[100px] px-3"
              ></textarea>
            </div>
          </div>

          {/* Product Summary Section */}
          <div className="border-2 p-6 flex flex-col space-y-4">
            <h2 className="text-2xl font-bold">Product Summary</h2>
            <div className="flex justify-between items-center border-b py-2">
              <p className="text-sm font-medium">Product Name:</p>
              <p className="text-sm font-medium">Asgaard Sofa XL</p>
            </div>
            <div className="flex justify-between items-center border-b py-2">
              <p className="text-sm">Quantity:</p>
              <p className="text-sm">1</p>
            </div>
            <div className="flex justify-between items-center border-b py-2">
              <p className="text-sm">Subtotal:</p>
              <p className="text-sm font-medium">$500</p>
            </div>
            <div className="flex justify-between items-center border-b py-2">
              <p className="text-sm">Shipping:</p>
              <p className="text-sm">$50</p>
            </div>
            <div className="flex justify-between items-center border-b py-2">
              <p className="text-sm">Total:</p>
              <p className="text-sm font-bold">$550</p>
            </div>
            <button className="w-full h-[50px] text-white bg-black rounded hover:bg-gray-800">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
