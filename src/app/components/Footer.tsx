import { GraduationCap } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <div className="py-14 border border-gray-700">
      <div className=" flex flex-col justify-center items-center">
        <div className=" text-purple-600 flex items-center justify-center gap-2 text-xl font-bold cursor-pointer rounded-full px-4 py-2">
          {' '}
          <span className="">
            {' '}
            <GraduationCap />{' '}
          </span>
          <p className="">zapIQ</p>
        </div>

        <div className="flex justify-between gap-4 items-center font-extralight text-gray-400">
          <p>Terms</p>
          <p>Contact</p>
          <p>About</p>
          <p>Privacy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
