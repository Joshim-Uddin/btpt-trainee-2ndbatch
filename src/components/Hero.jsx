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
      <Swiper navigation={true} autoplay={true} modules={[Navigation, Autoplay]} className="mySwiper">
        {
            images.map((image, index)=> <SwiperSlide key={index}><img src={image} alt="image of trainee" className='h-screen w-full'/></SwiperSlide>)
        }
      </Swiper>
    </>
    );
};

export default Hero;
