"use client";
import React, { useState, useEffect, useRef } from 'react';
import MyForm from '@/components/MyForm'
import Image from 'next/image'
import Tabs from '@/components/Tabs';
import MapBox from '@/components/MapBox';
import ImageGallery from '@/components/ImageGallery';
import MyModal from '@/components/Mymodal';

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
      <section className="heroImg flex items-center justify-center w-full">
      <div className="flex flex-col justify-between items-center lg:flex-row w-full px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0 w-full">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white lg:text-5xl sm:leading-none">
            Armani Beach{' '}
              <br className="hidden md:block" />
              Residences at Palm{" "}
              <span className="inline-block text-deep-purple-accent-400">
              Jumeirah by Arada
              </span>
            </h2>
            {/* <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p> */}
            <div>
            <span className="inline text-lg md:text-xl">Starting From</span>
              <p className="text-3xl lg:text-4xl font-bold">AED 21,500,000</p>
            </div>
          </div>
          {/* <hr className="mb-6 border-gray-300" /> */}
          {/* <div className="flex">
            <a href="/" aria-label="Play Song" className="mr-3">
              <div className="flex items-center justify-center w-10 h-10 text-white transition duration-300 transform rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 hover:scale-110">
                <svg className="w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                </svg>
              </div>
            </a>
            <div className="flex flex-col">
              <div className="text-sm font-semibold">
                Rich the kid &amp; Famous Dex
              </div>
              <div className="text-xs text-gray-700">Rich Forever Intro</div>
            </div>
          </div> */}
        </div>
        <div className="bg-black/40 rounded-3xl p-8 flex flex-col md:ml-auto mt-10 md:mt-0 border-4 border-gray-300">
        <div className="mb-5 border-b pb-2 border-white">

                      <h2 className="text-gray-50 text-lg md:text-2xl font-medium title-font capitalize">
                      Please fill in the form
                      </h2>
                      <p className="text-gray-50">Begin your journey to premium living by sharing your details with us.</p>
                    </div>
        <MyForm />
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
                  <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#DD3C07"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="tick"> <polyline fill="none" points="3.7 14.3 9.6 19 20.3 5" stroke="#DD3C07" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> </g> </g> </g></svg>
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
                  <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#DD3C07"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="tick"> <polyline fill="none" points="3.7 14.3 9.6 19 20.3 5" stroke="#DD3C07" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> </g> </g> </g></svg>
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
                  <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#DD3C07"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="tick"> <polyline fill="none" points="3.7 14.3 9.6 19 20.3 5" stroke="#DD3C07" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> </g> </g> </g></svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-black text-md md:text-lg lg:text-xl">Located in the heart of Dubai's most exclusive community</h6>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center rounded-xl overflow-hidden">
        <Image
          src="/armani-02.webp"
          layout="responsive"
          width={500}  // Original width of your image
          height={500}
          alt="Armani Beach Residences"
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
                priority
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
                priority
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
                priority
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
                priority
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-black text-lg md:text-xl">Premium Retail Outlets</h6>
        </div>
      </div>
    </div>
      </section>

      <section>
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

      <section ref={triggerSectionRef}>
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

    <section class="text-gray-600 body-font bg-gray-100">
      <div class="container px-5 py-24 mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="w-full md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <p class="text-4xl font-black text-black">Property in Dubai<br />
            Paved path to high ROI
            </p>
          <div class="mt-6 lg:max-w-sm">
            <p class="text-sm text-black">
              Investing in Dubai's property market offers a direct route to high ROI, thanks to its luxurious real estate, strategic location, and robust development, making it a prime choice for savvy investors.
            </p>
          </div>
          {/* <div class="mt-6 lg:max-w-sm">
            <p class="text-sm text-black">We manage your expectations.</p>
          </div> */}
          <p class="text-base font-bold tracking-wide text-black mt-5">
            Contacts
          </p>
          <div class="flex">
            <p class="mr-1 text-black font-medium">Phone:</p>
            <a
              href="tel:+971 50 486 0604"
              aria-label="Our phone"
              title="Our phone"
              class="transition-colors duration-300 text-black hover:text-gray-500"
              >+971 50 486 0604</a
            >
          </div>
          <div class="flex text-black">
            <p class="mr-1 text-black font-medium">Address:</p>
            Dubai Hills Estate, Business Park 3- 104 - Dubai
          </div>
        </div>
        <div
          class=" md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
        >
          <h2
            class="text-gray-700 text-lg md:text-2xl font-medium title-font mb-5"
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
