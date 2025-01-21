
import Link from "next/link";

import React from "react";   
import { BiSolidUserCheck } from "react-icons/bi";
import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";

export default function SingleProduct() {
  return (
    <div className="border- w-full min-h-screen flex flex-col">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex flex-grow items-center justify-between md:justify-start gap-10">
            {/* Navigation Links */}
            <nav className="hidden md:flex md:ml-auto flex-wrap items-center text-base justify-center gap-10">
              <a href="#" className="hover:text-gray-900">Shop</a>
              <a href="#" className="hover:text-gray-900">About</a>
              <a href="#" className="hover:text-gray-900">Contact</a>
            </nav>
            {/* Header Icons */}
            <div className="flex items-center space-x-4  md: gap-10">
              <BiSolidUserCheck className="text-xl cursor-pointer hover:text-gray-900 " />
              <FaSearch className="text-xl cursor-pointer hover:text-gray-900" />
              <FaRegHeart className="text-xl cursor-pointer hover:text-gray-900" />
              <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-900" />
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-wrap px-4 py-2">
      <nav className="flex flex-wrap items-center">
        <ul className="flex flex-wrap items-center space-x-2 text-sm md:text-base">
          <li>
            < a className="text-black hover:underline w-[52px] h-[24px] top-[152px] left-[99px] ml-20">
              Home
            </a>
          </li>
          <li>
            <select
              className=" border-gray-300 rounded-md text-sm md:text-base px-2 py-1"
              name="home-options"
              id="home-options"
            >
              <option value=""></option>
              <option value="option1"></option>
            </select>
          </li>
          <li>
            <a  className="text-black hover:underline  w-[82px] h-[24px] top-[152px] left-[205px] ml-20">
              Shop
            </a>
          </li>
          <li>
            <select
              className=" border-gray-300 rounded-md text-sm md:text-base px-2 py-1 "
              name="shop-options"
              id="shop-options"
            >
              <option value="optionA"></option>
              <option value="optionB"></option>
            </select>
          </li>
        </ul>
        <span className="text-black font-semibold text-sm md:text-base ml-20  m-10">
          | Asgard Sofa
        </span>
      </nav>
    </div> 
    <div>
        <img src="/images/Group 104.svg" alt="Sofa" />
    </div>
    <hr />
    <div className="flex flex-wrap px-4 py-2 gap-20 justify-center font-serif text:sm text: md text: lg mt-10">
      <span>Description</span>
      <span>Additional Information</span>
      <span>Reviews [5]</span>
      <div className="w-[1026px] h-[174px] top-[1152px] left-[207px]">
      <p>
      Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road
      <br />
      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, 
      stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
      </p>
      </div>
      <img src="/images/Group 109.svg" alt="double sofa" />
    </div>

      </div>
    )
    }