"use client";
import React, { useState, useEffect, useRef } from 'react';
// import MyForm from '@/components/MyForm'
import Image from 'next/image'
// import Tabs from '@/components/Tabs';
// import MapBox from '@/components/MapBox';
// import ImageGallery from '@/components/ImageGallery';
// import MyModal from '@/components/Mymodal';
import dynamic from 'next/dynamic';

// Dynamically import MyForm to prevent hydration issues
const MyForm = dynamic(() => import('@/components/MyForm'), { ssr: false });
const MapBox = dynamic(() => import('@/components/MapBox'), { ssr: false });
const Tabs = dynamic(() => import('@/components/Tabs'), { ssr: false });
const MyModal = dynamic(() => import('@/components/MyModal'), { ssr: false });
const ImageGallery = dynamic(() => import('@/components/ImageGallery'), { ssr: false });




export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasModalBeenShown, setHasModalBeenShown] = useState(false);
  const triggerSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasModalBeenShown) {
          setIsModalOpen(true);
          setHasModalBeenShown(true); // Set to true so it won't open again
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = triggerSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasModalBeenShown]);

  return (
    <>
      <MyModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <section className={`heroImg flex items-center justify-center w-full`}>
      <Image
        src="/palm-armani.webp"
        alt="Palm Armani"
        fill // Replaces `layout="fill"`
        quality={20}
        priority
        className="absolute z-0"
        style={{ objectFit: 'cover', objectPosition: 'center' }} // Use `style` for these properties
      />


      <div className="overlay absolute inset-0 z-10"></div>
      <div className="flex flex-col justify-between items-center lg:flex-row w-full px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 relative z-20">
        <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0 w-full">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white lg:text-5xl sm:leading-none">
              Armani Beach{' '}
              <br className="hidden md:block" />
              Residences at Palm <span className="inline-block text-deep-purple-accent-400">
                Jumeirah by Arada
              </span>
            </h2>
            <div>
              <span className="inline text-lg md:text-xl">Starting From</span>
              <p className="text-3xl lg:text-4xl font-bold">AED 21,500,000</p>
            </div>
          </div>
        </div>
        <div className="bg-black/40 rounded-3xl p-8 flex flex-col md:ml-auto mt-10 md:mt-0 border-4 border-gray-300">
          <div className="mb-5 border-b pb-2 border-white">
            <h2 className="text-gray-50 text-lg md:text-2xl font-medium title-font capitalize">
              Please fill in the form
            </h2>
            <p className="text-gray-50">
              Begin your journey to premium living by sharing your details with us.
            </p>
          </div>
          <React.Suspense fallback={<div>Loading...</div>}>
            {/* Lazy load the form component */}
            <MyForm />
          </React.Suspense>
        </div>
      </div>
    </section>

      <section>
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className=" mb-10 md:mx-auto sm:text-center md:mb-12">
            <h2 className="mb-6 font-sans font-bold leading-none tracking-tight text-gray-900  lg:text-5xl md:text-4xl text-3xl md:mx-auto">
              <span className="relative inline-block">
                <span className="relative">Armani Beach Residences</span>
              </span>
              — Luxury Residences With Panoramic Views Of The Arabian Gulf
            </h2>
            <p className=" text-gray-700 text-lg md:text-xl lg:text-2xl ">
            Living in Armani Beach Residences is an indulgence in opulence. The interiors, crafted by Armani / Casa, exude a blend of modern aesthetics and traditional Japanese design principles. The development includes:
            </p>
          </div>
          <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col justify-center items-center">
                  
                <div className='flex space-x-8 justify-center items-center'>
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full border-2 border-[#DD3C07] px-2">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#DD3C07"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="tick"> <polyline fill="none" points="3.7 14.3 9.6 19 20.3 5" stroke="#DD3C07" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> </g> </g> </g></svg>
                  </div>
                  <h6 className="mb-2 font-semibold leading-5 text-black text-md md:text-lg lg:text-xl">
                  Spacious residences with high-end finishes and fittings, and breathtaking sea views
                  </h6>
                </div>
                  <hr className="w-full my-6 border-gray-300" />
              </div>
              <div className="flex flex-col justify-center items-center">
                  
                <div className='flex space-x-8 justify-center items-center'>
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full border-2 border-[#DD3C07] px-2">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#DD3C07"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="tick"> <polyline fill="none" points="3.7 14.3 9.6 19 20.3 5" stroke="#DD3C07" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> </g> </g> </g></svg>
                  </div>
                  <h6 className="mb-2 font-semibold leading-5 text-black text-md md:text-lg lg:text-xl">
                  Exquisite interiors designed by the legendary Tadao Ando
                  </h6>
                </div>
                  <hr className="w-full my-6 border-gray-300" />
              </div>
              <div className="flex flex-col justify-center items-center">
                  
                <div className='flex space-x-8 justify-center items-center'>
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full border-2 border-[#DD3C07] px-2">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#DD3C07"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="tick"> <polyline fill="none" points="3.7 14.3 9.6 19 20.3 5" stroke="#DD3C07" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> </g> </g> </g></svg>
                  </div>
                  <h6 className="mb-2 font-semibold leading-5 text-black text-md md:text-lg lg:text-xl">Located in the heart of Dubai's most exclusive community</h6>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center rounded-xl overflow-hidden">
            <Image
              src="/armani-02.webp"
              alt="Armani Beach Residences"
              width={500}
              height={500} // Explicit width and height
              style={{ width: '100%', height: 'auto' }} // Ensure responsiveness
            />

            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
        <ImageGallery / >
      </section>

      <section>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          
          <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
            <div className="max-w-md sm:mx-auto sm:text-center">
              <div className="flex m-5 items-center justify-center sm:mx-auto rounded-xl overflow-hidden">
              <Image
                src='/branded-interiors.webp'
                alt="Branded Interiors"
                width={500}
                height={500} 
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
              </div>
              <h6 className="mb-3 text-xl font-bold leading-5 text-black md:text-3xl">Branded Interiors</h6>
              <p className="mb-3 text-sm text-gray-900">
              The exquisite interiors are adorned with limited-edition decor that was designed by Armani himself.
              </p>
            </div>
            <div className="max-w-md sm:mx-auto sm:text-center">
              <div className="flex m-5 items-center justify-center sm:mx-auto rounded-xl overflow-hidden">
              <Image
                src='/breathtaking-view-scaled.webp'
                alt="Breathtaking View"
                width={500}
                height={500} 
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
              </div>
              <h6 className="mb-3 text-xl font-bold leading-5 text-black md:text-3xl">Breathtaking Views</h6>
              <p className="mb-3 text-sm text-gray-900">
              Your panoramic windows will give you insatiable views of Palm Jumeirah, Dubai Harbour and Dubai Marina.
              </p>
            </div>
            <div className="max-w-md sm:mx-auto sm:text-center">
              <div className="flex m-5 items-center justify-center sm:mx-auto rounded-xl overflow-hidden">
              <Image
                src='/car-parking.webp'
                alt="Car Parking"
                width={500}
                height={500} 
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
              </div>
              <h6 className="mb-3 text-xl font-bold leading-5 text-black md:text-3xl">Designer Car Park</h6>
              <p className="mb-3 text-sm text-gray-900">
              The designer car park offers a stylish and secure space for residents, blending functionality with modern aesthetics for an enhanced everyday experience.
              </p>
            </div>
            <div className="max-w-md sm:mx-auto sm:text-center">
              <div className="flex m-5 items-center justify-center sm:mx-auto rounded-xl overflow-hidden">
              <Image
                src='/infinity-pool-scaled.webp'
                alt="Infinity Pool Scaled"
                width={500}
                height={500} 
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
              </div>
              <h6 className="mb-3 text-xl font-bold leading-5 text-black md:text-3xl">Infinity Pool</h6>
              <p className="mb-3 text-sm text-gray-900">
              The infinity pool offers a serene, luxurious escape, merging with the horizon for a breathtaking, endless view.


              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="px-4 py-12 md:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-20 relative shadow-lg rounded-3xl bg-black">
        <div class="rounded-2xl w-full z-20 md:z-0">
          <div class="flexflex-col w-full h-auto px-4 py-3 md:py-6 md:px-8 text-white">
              <div>
                <h2 class="text-3xl lg:text-4xl font-black pb-2 mb-4 w-full border-b-2 border-white playfair uppercase font-raleway">Download Brochure</h2> 
                <p class="text-lg lg:text-xl font-extralight mt-4 font-raleway">All you need to know about this project</p>
              </div>
              <div class="flex flex-col justify-center items-start py-4 ">
                <button type="submit" class="trigger select-none flex justify-between items-center relative space-x-4 hover:cursor-pointer bg-white text-[#000000] hover:bg-white/80 transition delay-50 px-6 rounded-full py-3 text-xl uppercase">Download Now
                  {/* <svg class="pl-2 h-5" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 515.283 515.283" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path d="M400.775 515.283H114.507c-30.584 0-59.339-11.911-80.968-33.54C11.911 460.117 0 431.361 0 400.775v-28.628c0-15.811 12.816-28.628 28.627-28.628s28.627 12.817 28.627 28.628v28.628c0 15.293 5.956 29.67 16.768 40.483 10.815 10.814 25.192 16.771 40.485 16.771h286.268c15.292 0 29.669-5.957 40.483-16.771 10.814-10.815 16.771-25.192 16.771-40.483v-28.628c0-15.811 12.816-28.628 28.626-28.628s28.628 12.817 28.628 28.628v28.628c0 30.584-11.911 59.338-33.54 80.968-21.629 21.629-50.384 33.54-80.968 33.54zM257.641 400.774a28.538 28.538 0 0 1-19.998-8.142l-.002-.002-.057-.056-.016-.016c-.016-.014-.03-.029-.045-.044l-.029-.029a.892.892 0 0 0-.032-.031l-.062-.062-114.508-114.509c-11.179-11.179-11.179-29.305 0-40.485 11.179-11.179 29.306-11.18 40.485 0l65.638 65.638V28.627C229.014 12.816 241.83 0 257.641 0s28.628 12.816 28.628 28.627v274.408l65.637-65.637c11.178-11.179 29.307-11.179 40.485 0 11.179 11.179 11.179 29.306 0 40.485L277.883 392.39l-.062.062-.032.031-.029.029c-.014.016-.03.03-.044.044l-.017.016a1.479 1.479 0 0 1-.056.056l-.002.002c-.315.307-.634.605-.96.895a28.441 28.441 0 0 1-7.89 4.995l-.028.012c-.011.004-.02.01-.031.013a28.5 28.5 0 0 1-11.091 2.229z" fill="#000000" opacity="1" data-original="#000000" class=""></path></g></svg> */}
                </button>
                {/* <p class="text-white/60 text-sm lg:text-base ml-4 mt-2 text-center">14 Pages | Download time ~ 7 sec.</p> */}
              </div>
          </div>
        </div>

        <div class="w-full max-w-2xl max-h-[7rem] lg:max-h-[15rem] flex justify-center items-center">
              <Image
              src="/mockup.webp" // Path to your image
              alt="Download brochure"
              width={500} // Replace with the desired width
              height={500} // Replace with the desired height
              className="w-full h-full max-w-lg lg:max-w-md lg:mr-20 rotate-[-25]" // Tailwind classes
            />
            {/* <img class="w-full h-full  max-w-lg lg:max-w-md lg:mr-20" src="./images/brochure.webp" alt="download brochure"> */}
        </div>
      </div>
    </section>

      <section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-10 md:mx-auto sm:text-center md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 lg:text-5xl md:mx-auto">
        Armani Beach Residences Amenities
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        The residences boast an array of world-class amenities, ensuring a lifestyle of unparalleled comfort and luxury
        </p>
      </div>
      <div className="grid gap-4 row-gap-5 grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-center items-center p-5 rounded shadow-sm hover:shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full ">
              <Image
                className="relative text-black "
                src="/film.svg"
                alt="Mini Theatre"
                width={180}
                height={37}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-black text-lg md:text-xl">Mini Theatre</h6>
        </div>
        <div className="flex flex-col justify-center items-center p-5 rounded shadow-sm hover:shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full ">
              <Image
                className="relative text-black "
                src="/gym.svg"
                alt="Gymnasium"
                width={180}
                height={37}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-black text-lg md:text-xl">Gymnasium</h6>
        </div>
        <div className="flex flex-col justify-center items-center p-5 rounded shadow-sm hover:shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full ">
              <Image
                className="relative text-black "
                src="/sport-court.svg"
                alt="Indoor Sports Court"
                width={180}
                height={37}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-black text-lg md:text-xl">Indoor Sports Court</h6>
        </div>
        <div className="flex flex-col justify-center items-center p-5 rounded shadow-sm hover:shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full ">
              <Image
                className="relative text-black "
                src="/retail.svg"
                alt="Premium Retail Outlets"
                width={180}
                height={37}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-black text-lg md:text-xl">Premium Retail Outlets</h6>
        </div>
      </div>
    </div>
      </section>

      <section className='pt-16 lg:pt-20'>
        <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Armani Beach Residences Palm Jumeirah Location
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Nestled on the Eastern Crescent of Palm Jumeirah, the Armani Beach Residences offer breathtaking views of the Arabian Gulf. Its strategic location provides seamless access to Dubai's key landmarks.
            </p>
          </div>
          <div className="grid gap-4 row-gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col justify-center items-center p-5 border rounded shadow-sm">
              <h6 className="mb-2 font-semibold leading-5 text-2xl text-black md:text-3xl">25 Minutes</h6>
              <p className="mb-3 text-sm text-gray-900">
                to Downtown Dubai
              </p>
            </div>
            <div className="flex flex-col justify-center items-center p-5 border rounded shadow-sm">
              <h6 className="mb-2 font-semibold leading-5 text-2xl text-black md:text-3xl">20 Minutes</h6>
              <p className="mb-3 text-sm text-gray-900">
                to Dubai Marina
              </p>
            </div>
            <div className="flex flex-col justify-center items-center p-5 border rounded shadow-sm">
              <h6 className="mb-2 font-semibold leading-5 text-2xl text-black md:text-3xl">35 Minutes</h6>
              <p className="mb-3 text-sm text-gray-900">
                to DXB Airport
              </p>
            </div>
            <div className="flex flex-col justify-center items-center p-5 border rounded shadow-sm">
              <h6 className="mb-2 font-semibold leading-5 text-2xl text-black md:text-3xl">10 Minutes</h6>
              <p className="mb-3 text-sm text-gray-900">
                to Sheik Zayed Road
              </p>
            </div>
          </div>
        </div>

        <div className='mt-6 lg:mt-12'>
            <MapBox />
          </div>
      </section>

      <section >
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className=" mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Armani Beach Residences Payment Plan
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Secure your dream home at Armani Beach Residences with our flexible payment plan. Offering a manageable down payment and staggered installments, our plan aligns with construction milestones, easing your financial journey towards luxury living. Contact us for detailed terms and make your aspiration a reality.
            </p>
          </div>
          <div className='flex justify-center items-center'>
            <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3 w-full">
              <div className="flex flex-col justify-center items-center p-5 w-full border rounded shadow-sm">
                <h6 className="mb-2 leading-5 text-black text-2xl lg:text-5xl font-black">25%</h6>
                <p className="mb-3 text-sm text-gray-900">On Booking
                </p>
              </div>
              <div className="flex flex-col justify-center items-center p-5 w-full border rounded shadow-sm">
                <h6 className="mb-2 leading-5 text-black text-2xl lg:text-5xl font-black">35%</h6>
                <p className="mb-3 text-sm text-gray-900">During Construction</p>
              </div>
              <div className="flex flex-col justify-center items-center p-5 w-full border rounded shadow-sm">
                <h6 className="mb-2 leading-5 text-black text-2xl lg:text-5xl font-black">40%</h6>
                <p className="mb-3 text-sm text-gray-900">On Handover</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section ref={triggerSectionRef}>
        <div className="text-black px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12">
            <h2 className=" mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Armani Beach Residences Floor Plan
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Armani Beach Residences offers a range of unit types with tailored floor plans to suit diverse preferences. From spacious apartments to lavish penthouses, each unit is designed with meticulous attention to detail.
            </p>
          </div>
          <Tabs />
        </div>
      </section> */}

      

    <section className="text-gray-600 body-font bg-gray-100">
      <div className="container px-5 py-24 mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <p className="text-4xl font-black text-black">Property in Duba<br />
            Paved path to high ROI
            </p>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-black">
              Investing in Dubai's property market offers a direct route to high ROI, thanks to its luxurious real estate, strategic location, and robust development, making it a prime choice for savvy investors.
            </p>
          </div>
          {/* <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-black">We manage your expectations.</p>
          </div> */}
          <p className="text-base font-bold tracking-wide text-black mt-5">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-black font-medium">Phone:</p>
            <a
              href="tel:+971 50 486 0604"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-black hover:text-gray-500"
              >+971 50 486 0604</a
            >
          </div>
          <div className="flex text-black">
            <p className="mr-1 text-black font-medium">Address:</p>
            Dubai Hills Estate, Business Park 3- 104 - Dubai
          </div>
        </div>
        <div
          className=" md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
        >
          <h2
            className="text-gray-700 text-lg md:text-2xl font-medium title-font mb-5"
          >
            Register
          </h2>
          <MyForm style={'white'}/>
        </div>
      </div>
    </section>

    </>
  )
}