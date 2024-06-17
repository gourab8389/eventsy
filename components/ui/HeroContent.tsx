"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';
import Image from 'next/image';
import MagicButton from './MagicButton';
import {FaServicestack } from 'react-icons/fa';

const HeroContent = () => {
  const handleButtonClick = () => {
    console.log('Button clicked');
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
          className="flex flex-col gap-6 mt-6 text-3xl md:text-5xl lg:text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
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
        <motion.div variants={slideInFromLeft(1)} className="py-2 text-center cursor-pointer">
          <MagicButton
            title="Lets go.."
            icon={<FaServicestack />}
            position="right"
            handleClick={handleButtonClick}
          />
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image src="/mainIconsdark.svg" alt="work icons" height={650} width={650} />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
