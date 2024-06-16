import React from 'react';
import { TextGenerateEffect } from './ui/TextGenerate';

const Hero = () => {
    return (
        <div className="flex items-center justify-center relative my-20 z-10">
            <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
                <h1 className='tracking-widest text-5xl font-bold text-black mb-4'>Hello</h1>
                <h2 className='text-2xl md:text-3xl lg:text-4xl'>
                    <TextGenerateEffect words='Welcome to Eventsy' />
                </h2>
                <h3 className='text-1xl md:text-2xl lg:text-3xl'>
                <TextGenerateEffect words='Create your event and join with us...' />
                </h3>
            </div>
        </div>
    )
}

export default Hero;
