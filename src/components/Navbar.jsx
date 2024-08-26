import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='text-white'>
            <div className='flex justify-between items-center max-[600px]:hidden px-10 min-h-20 py-5 bg-violet-700'>
                <h2 className='text-3xl text-amber-200'>BTPT BATCH-2</h2>
                <ul className='flex justify-between items-center gap-5'>
                <li className='text-xl'> <Link to="/">Home</Link> </li>
                <li className='text-xl'> <Link to="/magazine">Wall Magazine</Link></li>
                <li className='text-xl'><Link to="/gallery">Gallery</Link></li>
                <li className='text-xl'><Link to="/about">About Us</Link></li>
            </ul>
            </div>
            <div className='flex justify-between items-center min-[600px]:hidden px-10 min-h-20 py-5 bg-violet-700'>
                <h2 className='text-3xl text-amber-200'>BTPT BATCH-2</h2>
                <div>
                <FaBarsStaggered onClick={()=>setOpen(!open)}/>
                {
                    open?<ul className='flex-col justify-between items-center gap-5'>
                    <li className='text-lg'> <Link to="/">Home</Link> </li>
                    <li className='text-lg'> <Link to="/magazine">Wall Magazine</Link></li>
                    <li className='text-lg'><Link to="/gallery">Gallery</Link></li>
                    <li className='text-lg'><Link to="/about">About Us</Link></li>
                </ul>:""
                }
                </div>
            </div>

        </nav>
    );
};

export default Navbar;