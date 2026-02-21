"use client";

import { useState } from "react";
import { GALLERY_IMAGES } from "../utils/constants";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (imgSrc) => {
    setSelectedImage(imgSrc);
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-4">Galeri Kenangan</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-amber-300 to-rose-300 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beberapa momen spesial yang kami abadikan selama perjalanan cinta kami.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {GALLERY_IMAGES.map((imgSrc, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl cursor-pointer transform hover:-translate-y-1 transition-all duration-300 aspect-square"
                onClick={() => openLightbox(imgSrc)}
              >
                {/* Placeholder image - replace with actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-rose-300 flex items-center justify-center">
                  <span className="text-4xl">
                    {index % 3 === 0 ? "❤️" : index % 3 === 1 ? "👰‍♀️" : "🤵‍♂️"}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm">Foto {index + 1}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">Klik pada foto untuk melihat lebih besar</p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-amber-300 transition-colors duration-200"
            >
              ✕
            </button>
            <div className="bg-gradient-to-br from-amber-200 to-rose-300 rounded-xl p-4">
              <div className="w-full h-96 flex items-center justify-center">
                <span className="text-6xl">
                  {selectedImage.includes("couple-1") ? "❤️" :
                    selectedImage.includes("couple-2") ? "👰‍♀️" :
                      selectedImage.includes("couple-3") ? "🤵‍♂️" : "📸"}
                </span>
              </div>
            </div>
            <p className="text-white text-center mt-4">Foto kenangan Andi & Sari</p>
          </div>
        </div>
      )}
    </>
  );
}