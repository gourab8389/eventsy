import React from 'react';
import HeroContent from './ui/HeroContent';
import { Spotlight } from './ui/Spotlight';

const Hero = () => {
    return (
        <div className="relative flex flex-col h-screen w-full">
            <Spotlight className='-top-40 -left-10 md:left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vh]' fill='blue' />
            <HeroContent />
        </div>
    );
};

export default Hero;
