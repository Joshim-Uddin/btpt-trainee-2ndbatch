import React from 'react';
import ReactImageZoom from 'react-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';


const Magazine = () => {
    
    const images = ["https://res.cloudinary.com/dfxk2ofkn/image/upload/v1726468614/2_noh3zw.jpg", "https://res.cloudinary.com/dfxk2ofkn/image/upload/v1726468748/1_pj0qk9.jpg"]
    return (
        <>
        <div className='flex md:flex-row flex-col items-center justify-center md:gap-5'>
            
            <InnerImageZoom src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1726464568/3_xvwzzo.jpg" zoomSrc="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1726464568/3_xvwzzo.jpg" className=' md:w-[400px]' />
            <div>
            <h1 className='text-center md:text-5xl text-2xl font-semibold text-violet-400 md:py-4 py-2'>Magazine</h1>
            <h4>Magazine Organizer Team</h4>

            </div>
            
        </div>
       <div className='bg-orange-300 mt-5 mb-4 py-2'>
       <h3 className='text-center md:mt-5 my-2 md:text-3xl text-xl'>Magazine Opening Ceremony</h3>
        <div className='flex md:flex-row flex-col gap-4 justify-center items-center px-10'>
           
            {
                images.map((image, index)=> <img src={image} alt="" key={index} className="md:h-[300px] md:w-[600px]"/>)
            }
        </div>
            <p className='text-center text-blue-700'>Trainees with Superintendent, Assistant Superintendent and Instructors</p>
       </div>
        </>
    );
};

export default Magazine;