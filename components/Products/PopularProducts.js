import React from 'react';
import {GiBeachBag} from 'react-icons/gi';

const PopularProducts = () => {
  return (
   <section className="mt-14">
      <div className='w-full h-auto p-8 flex flex-col items-center md:items-start'>
          <GiBeachBag className='text-amber-500' size={'10%'} />
          <h1 className='font-fvolkhov text-2xl md:text-4xl underline decoration-amber-500  decoration-wavy underline-offset-8'>Productos Destacados</h1>
      </div>
      <div className='w-full h-auto grid grid-cols-1 md:grid-cols-4 gap-5 justify-items-center'>
          <div className='w-[250px] h-[320px] bg-yellow-400'></div>
          <div className='w-[250px] h-[320px] bg-yellow-400'></div>
          <div className='w-[250px] h-[320px] bg-yellow-400'></div>
          <div className='w-[250px] h-[320px] bg-yellow-400'></div>

          <div className='w-[250px] h-[320px] bg-yellow-400'></div>
          <div className='w-[250px] h-[320px] bg-yellow-400'></div>
          <div className='w-[250px] h-[320px] bg-yellow-400'></div>
          <div className='w-[250px] h-[320px] bg-yellow-400'></div>
      </div>
   </section>
  )
}

export default PopularProducts