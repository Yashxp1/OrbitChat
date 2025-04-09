import React from 'react';

const Home = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='border-2'>
        <h1 className='text-6xl md:text-8xl lg:9xl text-center py-3 font-extrabold'>zapIQ</h1>
        <p className="text-2xl md:text-4xl lg:text-6xl font-extralight">Think Fast. Score Big.</p>
      </div>

      <div>
        <button>Get Started</button>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Home;
