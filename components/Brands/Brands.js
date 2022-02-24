import React from 'react';
import BrandItem from './BrandItem';

const Brands = () => {
  return (
    <section className='w-full h-auto mt-4'>
        <div className='w-full h-auto text-center'>
            <h1 className='font-fvolkhov font-bold text-3xl md:text-5xl text-gray-400'>Marcas</h1>
        </div>
        <div className='w-[70%] mx-auto mt-5 px-8 grid grid-cols-2 md:grid-cols-4 overflow-hidden gap-5 justify-center'>
            <BrandItem />
            <BrandItem />
            <BrandItem />
            <BrandItem />
            <BrandItem />
            <BrandItem />
            <BrandItem />
            <BrandItem />
        </div>
    </section>
  )
}

export default Brands;