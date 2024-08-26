import React, { useState } from 'react';
import { useEffect } from 'react';

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/teachers')
        .then(res=>res.json())
        .then(data=>setTeachers(data))
    }, [])
    //console.log(teachers);
    return (
        <>
        <div className='bg-orange-300'>
        <h1 className='md:text-5xl text-2xl font-semibold text-center py-5 my-10'>Our Teachers</h1>
        <div className='grid grid-cols-4 gap-5 px-4'>
            {teachers?.map((teacher)=><div key={teacher._id} className="bg-slate-100 rounded-md p-4 flex flex-col items-center shadow-md gap-1">
            <img src={teacher.image} alt={`${teacher.name}'s photo`} className="max-h-48 w-[70%]"/>
            <h2 className='text-xl font-semibold'>{teacher.name}</h2>
            <h4>Introduction ID : {teacher.roll}</h4>
            <h3>Mobile : {`0${teacher.mobile}`}</h3>
            <h5>Blood Group : {teacher.blood}</h5>


            </div>)}
        </div>
        </div>
        </>
    );
};

export default Teachers;