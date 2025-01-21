
 import React  from 'react';
import Image from "next/image"

export default function Shop() {
  return (
    <div className="bg-red-300 text-center border-2 rounded-b-lg w-full h-full flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-semibold mb-4">Shop</h1>
      <div className="w-full max-w-md">
        <Image
          src="/images/Rukhsana 2.PNG"
          alt="Description of the image"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        /> 
      </div>
    </div>
  );
}
