import React, { useState } from 'react';
import { PiFinnTheHumanFill } from "react-icons/pi";
import Button from './Button';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full h-20 text-white flex justify-between items-center px-4 md:px-10'>
      
     
      <div className='flex items-center gap-2 text-3xl md:text-5xl'>
        <PiFinnTheHumanFill />
        <span className='text-xl md:text-3xl mt-1.5'>Developer</span>
      </div>

      
      <div className='md:hidden'>
        <button className='text-white focus:outline-none' onClick={toggleMenu}>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
          </svg>
        </button>
      </div>

      
      <ul className={`md:flex gap-8 lg:gap-12 text-lg absolute md:static  w-full md:w-auto left-0 top-20 md:top-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <li className='hover:text-gray-400 cursor-pointer p-4 md:p-0 border-b md:border-none '>Home</li>
        <li className='hover:text-gray-400 cursor-pointer p-4 md:p-0 border-b md:border-none '>About</li>
        <li className='hover:text-gray-400 cursor-pointer p-4 md:p-0 border-b md:border-none '>Skills</li>
        <li className='hover:text-gray-400 cursor-pointer p-4 md:p-0 border-b md:border-none '>Projects</li>
        <li className='hover:text-gray-400 cursor-pointer p-4 md:p-0 border-b md:border-none '>Contact</li>
      </ul>

      
      <div className='hidden md:block'>
        <Button />
      </div>
    </div>
  );
}

export default Navbar;