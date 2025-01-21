import React from 'react';

function OurBlog() {
  return (
    <div className="blog-container box-border m-4 sm:m-6 lg:m-10 w-full h-auto">
      {/* Blog Title */}
      <h1 className="blog-title text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        Our Blog
      </h1>
      
      {/* Blog Subtitle */}
      <h2 className="blog-subtitle text-lg sm:text-xl md:text-2xl text-center mt-4 sm:mt-6">
        Find a bright idea to suit your taste with our great selection
      </h2>

      {/* Blog Image Container */}
      <div className="blog-image-container mt-6 sm:mt-10 mx-auto max-w-full px-4">
        <img
          src="/images/Group 52.svg"
          alt="Group 52"
          className="blog-image w-full h-auto object-contain max-w-[1240px]"
        />
      </div>
    </div>
  );
}

export default OurBlog;
