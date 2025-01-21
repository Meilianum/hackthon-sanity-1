
import { Link } from "lucide-react";
import { BiSolidUserCheck } from "react-icons/bi";
import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";

export default function MyAccount() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="text-gray-600 body-font border-b">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-evenly items-end">
          <div className="flex flex-grow items-center justify-between gap-4 md:gap-10">
            {/* Navigation Links */}
            <nav className="hidden md:flex flex-wrap items-center text-base justify-center gap-6 lg:gap-10">
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

      {/* Banner Section */}
      <div className="w-full h-[150px] sm:h-[200px] md:h-[316px] lg:h-[400px] xl:h-[500px]">
      <img src="/images/Group 78 (1).png" alt="" 
         
          className="w-full h-full object-cover"
        />
      </div>

      {/* Login and Register Section */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 my-10 px-5">
        {/* Log In Section */}
        <div className="w-full max-w-md border-2 p-6 flex flex-col space-y-4">
          <h2 className="text-xl font-semibold text-start">Log In</h2>
          <label htmlFor="username" className="text-sm">
            Username or email address
          </label>
          <input
            id="username"
            type="text"
            className="border rounded w-full h-[50px] px-3"
          />
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="border rounded w-full h-[50px] px-3"
          />
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember-me"
              className="w-20 h-10"
            />
            <label htmlFor="remember-me" className="text-sm">
              Remember me
            </label>
          </div>
          <button className="w-full max-w-[200px] h-[50px] border rounded text-center text-black">
            Log In
          </button>
        </div>

        {/* Register Section */}
        <div className="w-full max-w-md border-2 p-6 flex flex-col space-y-4 h-[400px]">
          <h2 className="text-xl font-semibold text-start">Register</h2>
          <label htmlFor="email" className="text-sm">
            Email Address
          </label>
          <input
            id="email"
            type="text"
            className="border rounded w-full h-[50px] px-3"
          />
          <p className="text-sm">
            A link to set a new password will be sent to your email address.
          </p>
          <p className="text-sm">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
          <button className="w-full max-w-[200px] h-[50px] border rounded text-center text-black">
            Register
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#FAF4F4] w-full py-10 h-[400px] text-center">
        <section className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10 px-5 mt-32 ">
          {/* Free Delivery */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="font-medium text-gray-900 text-lg sm:text-xl lg:text-2xl ">
              Free Delivery
            </h2>
            <p className="text-sm sm:text-base leading-relaxed ">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          {/* 90 Days Return */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="font-medium text-gray-900 text-lg sm:text-xl lg:text-2xl">
              90 Days Return
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          {/* Secure Payment */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="font-medium text-gray-900 text-lg sm:text-xl lg:text-2xl">
              Secure Payment
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
