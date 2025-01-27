"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../app/globals.css';

const ImageGallery = () => {
  const images = [
    '/armani01.webp',
    '/armani02.webp',
    '/armani03.webp',
    '/armani04.webp',
    '/armani05.webp',
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Swiper
        // slidesPerView={'auto'}
        // spaceBetween={30}
        className="mySwiper"
        navigation={true} modules={[Navigation]} 
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} onClick={() => openLightbox(image)}>
            <div className="image-container rounded-2xl overflow-hidden">
              <Image 
                src={image} 
                alt={`Slide ${index + 1}`} 
                layout="fill" 
                objectFit="cover" 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={selectedImage} alt="Lightbox" style={{ maxWidth: '80%', maxHeight: '80%' }} />
        </div>
      )}

      <style jsx>{`
        .image-container {
          position: relative;
          width: 100%; 
          height: 500px; // Adjust the height as needed
        }
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .lightbox img {
          max-width: 80%;
          max-height: 80%;
        }
      `}</style>
    </>
  );
};

export default ImageGallery;