import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const popularCat = [
  'Science',
  'History',
  'Movies',
  'Games',
  'Politics',
  'Tech',
  'Math',
  'Facts',
];

const Home = () => {
  return (
    <div className="">
      <Navbar />

      <div className="flex flex-col py-12 px-4">
        <div className="">
          <h1 className="text-purple-500 text-4xl md:text-5xl lg:text-6xl font-bold">
            Challenge Your Knowledge with{' '}
            <span className="text-white">zapIQ</span>
          </h1>
          <p className="py-7 text-lg font-extralight text-gray-400">
            Test your skills, compete with friends, and learn something new with
            our collection of thousands of quizzes across various categories.
          </p>
        </div>

        <div className="space-x-2">
          <button className="px-6 py-3 rounded-md bg-purple-600">
            Get started
          </button>
          <button className="px-6 py-3 rounded-md bg-gray-700">
            Learn More
          </button>
        </div>
        <div className="flex justify-center items-center my-5">
          <div className="items-center border rounded-lg  border-gray-800 p-3 my-10 md:w-[70%] lg:w-[70%]">
            <h1 className="text-2xl text-center md:text-3xl lg:text-3xl font-bold w-full py-3">
              Popular categories
            </h1>
            <div className="grid grid-cols-2 gap-3 ">
              {popularCat.map((cat, idx) => (
                <div
                  key={idx}
                  className="border-1 text-center hover:bg-purple-600 hover:transition border-black bg-gray-700 rounded-lg px-3 py-2"
                >
                  {cat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


<div>
  
</div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
