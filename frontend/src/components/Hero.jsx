// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400'>
//       {/* Hero Left Side */}
//       <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//             <div className='text-[#414141]'>
//                 <div className='flex items-center gap-2'>
//                     <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//                     <p className=' font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
//                 </div>
//                 <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
//                 <div className='flex items-center gap-2'>
//                     <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
//                     <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
//                 </div>
//             </div>
//       </div>
//       {/* Hero Right Side */}
//       <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
//     </div>
//   )
// }

// export default Hero

import React from "react";
import Slider from "react-slick";
import { assets } from "../assets/assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css"; // Tailwind & custom styles


const heroData = [
  {
    title: "Latest Arrivals",
    subtitle: "OUR BESTSELLERS",
    img: assets.hero_img,
  },
  {
    title: "Summer Collection",
    subtitle: "HOT PICKS",
    img: assets.hero,
  },
  {
    title: "Winter Essentials",
    subtitle: "TRENDING NOW",
    img: assets.hero2,
  },
  {
    title: "The Bridal Edit",
    subtitle: "GRACEFUL & ELEGANT",
    img: assets.wedding_img,
  },
  {
    title: "Night Glam",
    subtitle: "DRESS TO IMPRESS",
    img: assets.party_img,
  },
  {
    title: "Celebration Mode",
    subtitle: "TRADITIONAL FLAIR",
    img: assets.function_img,
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {heroData.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col sm:flex-row border border-gray-300 shadow-sm rounded-lg overflow-hidden">
              {/* Left Side */}
              <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
                <div className="text-[#414141] px-4 sm:px-8 fade-in">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                    <div className="w-10 h-[1px] bg-gray-400" />
                  </div>

                  <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl leading-tight mb-3">
                    {item.title}
                  </h1>

                  <div className="flex items-center gap-2">
                    <div className="w-10 h-[1px] bg-gray-400" />
                    <p className="text-sm font-medium text-gray-600">Shop the trend now</p>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="w-full sm:w-1/2">
                <img
                  src={item.img}
                  alt="Hero Slide"
                  className="w-full h-full object-cover rounded-none sm:rounded-r-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
