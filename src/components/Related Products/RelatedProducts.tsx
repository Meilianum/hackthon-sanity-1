// 
import React from 'react';

function RelatedProducts() {
  return (
    <div className='m-4 md:m-10'>
      <h1 className='text-xl md:text-2xl font-bold mb-4'>Related Products</h1>
      <div className='w-full h-auto flex justify-center items-center'>
        <img 
          src="/images/Group 111 (1).svg" 
          alt="Related Product" 
          className='w-full max-w-[1240px] h-auto object-contain' 
        />
      </div>
      <div className='w-full flex justify-center items-center mt-6'>
        <button className='underline font-serif text-base md:text-lg'>
          View More
        </button>
      </div>
    </div>
  );
}

export default RelatedProducts;



