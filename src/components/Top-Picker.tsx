import React from 'react';

function TopPicker() {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-4">
      {/* Title */}
      <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-medium leading-tight text-center">
        Top Picks For You
      </h1>

      {/* Subtitle */}
      <h2 className="font-poppins text-lg sm:text-xl md:text-2xl text-center mt-4 opacity-80">
        Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
      </h2>

      {/* Image Grid */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <span className="w-full sm:w-[287px] h-auto opacity-100">
          <img src="/images/Group 15.svg" alt="Group 15" className="w-full h-auto" />
        </span>
        <span className="w-full sm:w-[287px] h-auto opacity-100">
          <img src="/images/Group 16.svg" alt="Group 16" className="w-full h-auto" />
        </span>
        <span className="w-full sm:w-[287px] h-auto opacity-100">
          <img src="/images/Group 17.svg" alt="Group 17" className="w-full h-auto" />
        </span>
        <span className="w-full sm:w-[287px] h-auto opacity-100">
          <img src="/images/Group 18.svg" alt="Group 18" className="w-full h-auto" />
        </span>
      </div>
      
      {/* Background Image Section */}
      <div className="bg-red-200 w-full h-[400px] sm:h-[500px] md:h-[639px] opacity-100 mt-10">
        <img
          src="/images/Group 23.png"
          alt="Group 23"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default TopPicker;
