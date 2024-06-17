import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItem } from '@/data';

const Grid = () => {
  return (
    <section className='flex flex-col items-center justify-center mx-2 text-center'>
      <h1 className="text-white font-bold text-xl md:text-5xl lg:text-5xl mt-5 mb-5">
        We provides
      </h1>
      <BentoGrid className="w-full py-20 cursor-pointer">
        {gridItem.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            img={item.img}
            imgClassName={item.imgClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
