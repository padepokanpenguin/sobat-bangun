'use client';
import Button from '@/molecules/button';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductImg() {
  const [current, setCurrent] = useState(0);

  const imgSrc = Array.from({ length: 5 }).map(
    () =>
      `https://source.unsplash.com/random/1441x552?sig=${Math.random().toFixed(2)}`
  );

  const nextSlide = () => {
    setCurrent(current === imgSrc.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? imgSrc.length - 1 : current - 1);
  };

  return (
    <div>
      <Image
        className='inset-0 z-10 h-[552px] w-full object-cover'
        src={imgSrc[current]}
        width={1441}
        height={552}
        alt={`product-${current + 1}`}
      />

      <div className='flex'>
        <Button
          className='absolute bg-white p-2.5 border border-red-500 left-14 top-1/2 lg:top-[40%]  w-11 h-11 flex justify-center items-center'
          value='<'
          onClick={prevSlide}
        />
        <Button
          className='absolute bg-white p-2.5 border border-red-500 right-14 top-1/2 lg:top-[40%]  w-11 h-11 flex justify-center items-center'
          value='>'
          onClick={nextSlide}
        />
      </div>
    </div>
  );
}
