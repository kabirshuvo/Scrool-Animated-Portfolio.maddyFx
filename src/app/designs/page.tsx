import React from 'react';
import Image from 'next/image';

const DesignsPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {/* Replace the responsive gallery with Next.js Image component */}
        <div className="container grid gap-3px auto-cols-minmax lg:auto-cols-minmax">
          {/* Replace these image sources with your own */}
          <Image src="/image1.jpg" alt="Image 1" width={130} height={130} className="w-full h-full object-cover transition-transform transform-origin-65-75 hover:scale-120" />
          <Image src="/image2.jpg" alt="Image 2" width={130} height={130} className="w-full h-full object-cover transition-transform transform-origin-65-75 hover:scale-120" />
          {/* Add more images as needed */}
        </div>
      </div>

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Next.js
      </div>
    </main>
  );
}

export default DesignsPage;
