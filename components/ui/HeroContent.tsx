"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';

import { useRouter } from 'next/navigation';

const HeroContent = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    console.log('Button clicked');
    router.push("/events");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-5xl lg:text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hello
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {' '}
              Welcome to Eventsy{' '}
            </span>
            Create your event and join with us...
          </span>
        </motion.div>
        <motion.div variants={slideInFromLeft(1)} className="py-2 text-center">
          {/* <MagicButton
            title="Lets go.."
            icon={<FaServicestack />}
            position="right"
            handleClick={handleButtonClick}
          /> */}
          <button
      onClick={handleButtonClick}
      className='bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-md p-2 w-40 text-white hover:text-black text-center border border-transparent cursor-pointer font-bold text-xl mr-12 lg:mr-64 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl'
    >
      Let's go..
    </button>
        </motion.div>
      </div>

    </motion.div>
  );
};

export default HeroContent;
