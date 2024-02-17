import React from "react";

function Main() {
  return (
    <>
      <div className="mt-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800">ギャラリー</h1>
      </div>
      <div className="container mx-auto px-4 mt-9">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <div className="relative">
            <img
              src="./img/kurosaka-gallery01.jpg"
              className="w-full h-auto object-cover rounded-md shadow-md"
              alt="Image 1"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-50 rounded-md">
              <span className="text-white text-lg font-bold">自然満喫</span>
            </div>
          </div>
          <div className="relative">
            <img
              src="./img/kurosaka-gallery02.jpg"
              className="w-full h-auto object-cover rounded-md shadow-md"
              alt="Image 2"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-50 rounded-md">
              <span className="text-white text-lg font-bold">水辺遊び</span>
            </div>
          </div>
          <div className="relative">
            <img
              src="./img/kurosaka-gallery03.jpg"
              className="w-full h-auto object-cover rounded-md shadow-md"
              alt="Image 3"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-50 rounded-md">
              <span className="text-white text-lg font-bold">星空観賞</span>
            </div>
          </div>
          <div className="relative">
            <img
              src="./img/kurosaka-gallery04.jpg"
              className="w-full h-auto object-cover rounded-md shadow-md"
              alt="Image 4"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-50 rounded-md">
              <span className="text-white text-lg font-bold">焚火交流</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
