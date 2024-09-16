import React, { useState } from 'react';
import { useEffect } from 'react';
import Pagination from './components/Pagination';
import one from './../src/assets/images/one.jpg';
import two from './../src/assets/images/two.jpg';
import three from './../src/assets/images/three.jpg';
import four from './../src/assets/images/four.jpg';

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
const images = [one, two, three, four]
    //testing to do remove this
    const [index, setIndex] = useState(0)

    useEffect(() => {
        fetch('https://btpt-server.vercel.app/teachers')
        .then(res=>res.json())
        .then(data=>setTeachers(data))
    }, [])

    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
      useEffect(() => {
        const handleResize = () => {
          setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
         // Clean up the event listener on component unmount
         return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
        //console.log(screenSize.width);
  const teachersPerPage = screenSize.width<=600?5:16;
  const totalPages = Math.ceil(teachers.length / teachersPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const currentTeachers = teachers.slice(
    (currentPage - 1) * teachersPerPage,
    currentPage * teachersPerPage
  );

  
    
    //console.log(teachers);
    return (
        <>
        <div className='bg-yellow-200'>
        <h1 className='md:text-5xl text-2xl font-semibold text-center py-5 my-10'>Our Teachers</h1>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-5 px-4'>
            {currentTeachers?.map((teacher)=><div key={teacher._id} className="bg-slate-100 rounded-md p-4 flex flex-col items-center shadow-md gap-1">
            <img src={teacher.image} alt={`${teacher.name}'s photo`} className="max-h-48 w-[70%]"/>
            <h2 className='text-xl font-semibold'>{teacher.name}</h2>
            <h3 className='text-lg'>Mobile : {`0${teacher.mobile}`}</h3>
            <h5 className='font-semibold'>Blood Group : {teacher.blood}</h5>
            <h5 className='text-center'>{teacher.school}</h5>
            <h5>Upazila : {teacher.upazila}</h5>


            </div>)}
        </div>
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
        </div>
        {/* to do remove */}
        <div className='flex py-4 justify-center'>
          <div>
          {images.map((image,index) => <img key={index} src={image} alt="" className='max-h-32 w-32' onClick={()=>setIndex(index)}/>)}
          </div>
          <img src={images[index]} alt="" className='max-h-44'/>
        </div>
        
        </>
    );
};

export default Teachers;