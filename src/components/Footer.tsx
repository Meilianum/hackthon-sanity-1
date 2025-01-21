
import Link from 'next/link';
import React from 'react';


function Footer() {
  return (
    <div>
      <footer className="footer text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            {/* Address Section */}
            <div className="footer-section lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="footer-title m-10">
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </h2>
            </div>

            {/* Links Section */}
            <div className="footer-section lg:w-1/4 md:w-1/2 w-full px-4 mb-3">
              <nav className="list-none mb-10">
                <li className="footer-heading pb-10">Links</li>
                <li><Link href="/Home" className="footer-link">Home</Link></li>
                <li><Link href="/About" className="footer-link">Shop</Link></li>
                <li><Link href="/About" className="footer-link">About</Link></li>
                <li><Link href="/Contact" className="footer-link">Contact</Link></li>
              </nav>
            </div>

            {/* Help Section */}
            <div className="footer-section lg:w-1/4 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li className="footer-heading pb-10">Help</li>
                <li><Link href="#" className="footer-link">Payment Option</Link></li>
                <li><Link href="#" className="footer-link">Returns</Link></li>
                <li><Link href="#" className="footer-link">Privacy Policies</Link></li>
              </nav>
            </div>

            {/* Newsletter Section */}
            <div className="footer-section lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="footer-title mb-3">Newsletter</h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto">
                  <label
                    htmlFor="footer-field"
                    className="leading-7 text-sm text-gray-600 mx-4 underline"
                  >
                   <span> Enter your Email Addres      SUBSCRIBE </span>
                   {/* <hr />
                   <span>SUBSCRIBE</span> */}
                  </label>
               
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="footer-bottom-text text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 flex justify-start">
          © 2022 Meubel House. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
