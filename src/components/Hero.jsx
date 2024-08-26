import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
const images= ["https://res.cloudinary.com/dfxk2ofkn/image/upload/v1723602960/nine_rcomdb.jpg","https://res.cloudinary.com/dfxk2ofkn/image/upload/v1723602959/eleven_bqb2yp.jpg","https://res.cloudinary.com/dfxk2ofkn/image/upload/v1723602959/eleven_bqb2yp.jpg", "https://res.cloudinary.com/dfxk2ofkn/image/upload/v1723602959/ten_dk7pum.jpg", "https://res.cloudinary.com/dfxk2ofkn/image/upload/v1723602957/19_ot9chw.jpg", "https://res.cloudinary.com/dfxk2ofkn/image/upload/v1723602957/two_dyejb8.jpg", "https://res.cloudinary.com/dfxk2ofkn/image/upload/v1723602957/eight_vvdxzq.jpg", "https://res.cloudinary.com/dfxk2ofkn/image/upload/v1723602956/five_ptrhi0.jpg", "https://res.cloudinary.com/dfxk2ofkn/image/upload/v1723602955/13_amb781.jpg", "https://res.cloudinary.com/dfxk2ofkn/image/upload/v1723602955/16_zm8duj.jpg"]

const Hero = () => {
    return (
        <>
      {/* <div className='grid grid-cols-3 items-center justify-center'>
        
        
     
      </div> */}
      <div className='grid grid-cols-5 justify-between gap-5 items-center py-10'>
        <div className='col-span-2 relative'>
          <div className="relative">
          <div className='one absolute top-10 right-20'></div>
          <div className='two absolute -bottom-5 left-64'></div>
          <div className='three absolute bottom-5 right-10'></div>
          <div className='two absolute -bottom-10 left-0'></div>
          <div className='three absolute bottom-24 right-48'></div>
          <div className='two absolute -top-32 left-28'></div>
          <div className='three absolute top-0 right-0'></div>
          </div>
        <h2 className='md:text-5xl text-2xl text-slate-700 font-semibold md:leading-relaxed text-center absolute -top-1/2 left-0 -translate-y-1/2'>Welcome to BTPT BATCH-2 Portal</h2>
        </div>
        <Swiper navigation={true} autoplay={true} modules={[Navigation, Autoplay]} className="mySwiper col-span-3 w-full">
        {
            images.map((image, index)=> <SwiperSlide key={index}><img src={image} alt="image of trainee"  className='md:h-[calc(100vh-120px)] h-52 w-full'/></SwiperSlide>)
        }
      </Swiper>
        {/* <img src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1724030250/two_srx0bg.jpg" alt="" className='w-full' /> */}
      </div>
      
    </>
    );
};

export default Hero;
