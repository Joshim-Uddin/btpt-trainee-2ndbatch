import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='text-white bg-violet-700 px-10 min-h-20 py-5'>
            <div className='flex justify-between items-center'>
                <h2 className='text-3xl text-amber-200'>BTPT BATCH-2</h2>
                <ul className='flex justify-between items-center gap-5'>
                <li className='text-xl'> <Link to="/">Home</Link> </li>
                <li className='text-xl'> <Link to="/magazine">Wall Magazine</Link></li>
                <li className='text-xl'><Link to="/gallery">Gallery</Link></li>
                <li className='text-xl'><Link to="/about">About Us</Link></li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;