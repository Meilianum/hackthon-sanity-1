import React from 'react';

export default function ResponsiveImages() {
  return (
    <div className="bg-white flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 p-4">
      {/* First Image */}
      <div className="w-full sm:w-[605px] h-auto max-w-[605px] opacity-100">
        <img className="w-full h-auto" src="/images/Group 9.svg" alt="Group 9" />
      </div>
      
      {/* Second Image */}
      <div className="w-full sm:w-[605px] h-auto max-w-[605px] opacity-100">
        <img className="w-full h-auto" src="/images/Group 8.svg" alt="Group 8" />
      </div>
    </div>
  );
}
