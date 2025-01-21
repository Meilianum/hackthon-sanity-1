import React from 'react';

function OurInstagram() {
  return (
    <div className="flex flex-col items-center px-4 py-8 sm:px-6 md:px-12 lg:px-16">
      <h1 className="text-2xl font-bold text-center sm:text-3xl md:text-4xl lg:text-5xl">
        Our Instagram
      </h1>
      <h2 className="text-base text-center text-gray-600 mt-2 sm:text-lg md:text-xl lg:text-2xl">
        Follow our store on Instagram
      </h2>
     
      <div className="mt-8">
        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-sm sm:text-base md:text-lg lg:text-xl sm:py-3 sm:px-8">
          Follow Us
        </button>
      </div>
    </div>
  );
}

export default OurInstagram;
