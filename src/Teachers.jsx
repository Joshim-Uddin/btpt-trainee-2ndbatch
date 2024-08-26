import React, { useState } from 'react';
import { useEffect } from 'react';
import Pagination from './components/Pagination';

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch('http://localhost:5000/teachers')
        .then(res=>res.json())
        .then(data=>setTeachers(data))
    }, [])
  const teachersPerPage = 16;
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
        
        </>
    );
};

export default Teachers;