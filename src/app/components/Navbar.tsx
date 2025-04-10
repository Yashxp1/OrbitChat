'use client';

import React, { useState } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import { div } from 'framer-motion/m';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border border-gray-800 shadow-xl sticky top-0 z-1 bg-gruy flex justify-between items-center py-5 px-3">
      <div className="flex gap-2 justify-center items-center text-xl border border-gray-800 hover:bg-purple-600 cursor-pointer rounded-full px-4 py-2">
        {' '}
        <span className="">
          {' '}
          <GraduationCap />{' '}
        </span>
        <p className="">zapIQ</p>
      </div>

      <div className="justify-center items-center hidden lg:flex">
        <div className="flex gap-3 ">
          <button className="bg-purple-600 px-3 py-2 rounded-lg hover:bg-gray-700">
            Signup
          </button>
          <button className="bg-purple-600 px-3  py-2 rounded-lg hover:bg-gray-700">
            Login
          </button>
        </div>
      </div>

      <div className="lg:hidden">
        <button onClick={handleNav}>{isOpen ? <X /> : <Menu />}</button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0  flex justify-center min-w-full h-screen bg-gruy pt-10 p-4">
          <div className=" gap-3 w-full flex flex-col">
            <button className=" bg-purple-600 px-6 py-2 rounded-lg hover:bg-gray-700">
              Signup
            </button>

            <button className="bg-purple-600 px-3  py-2 rounded-lg hover:bg-gray-700">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
