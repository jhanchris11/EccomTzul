import React from 'react';
import Image from 'next/image';
import { FaSun } from 'react-icons/fa';
import { GiPalmTree } from 'react-icons/gi';

const Header = () => {
  return (
    <header className="w-screen h-screen md:flex md:flex-row flex flex-col-reverse pt-8">
      <div className="md:w-3/6 w-full h-3/6 md:h-full flex flex-col justify-center relative pl-10 gap-3">
        <h1 className="font-fvolkhov text-2xl text-left w-[85%] leading-snug  md:text-5xl">
          Viste al Mejor Estilo este <span className='underline decoration-amber-500 decoration-wavy underline-offset-8'>Verano!</span>
        </h1>
        <p className='font-fmate text-lg md:text-2xl'>En GCN store encontrará los mejores precios y las mejores marcas</p>
        <button className='bg-amber-500 w-fit px-5 py-3 rounded-l-full rounded-r-full font-fvolkhov text-lg' onClick={() => console.log('header')}>Explorar</button>
        <GiPalmTree className='absolute bottom-[10%] right-[6%] text-amber-500 scale-x-[-1]' size={'25%'} />
        <GiPalmTree className='absolute bottom-[10%] right-0 text-amber-500' size={'10%'} />
      </div>
      <div className="w-full relative h-3/6 flex justify-center items-end md:items-center md:w-3/6 md:h-full">
        <div className='absolute z-20 top-[80px] md:top-0  w-[50%] h-[90%] md:w-[50%] md:h-[100%] flex justify-center items-center'>
          <Image className=" bg-orange-500 object-contain rounded-t-full rounded-b-full" src="/girl.png" width={350} height={500} />
        </div>
        <div className="w-[90%] md:w-3/4 h-[80%] md:h-3/5 bg-slate-300 border-8 border-dashed relative flex justify-center items-center">
          <div className="absolute z-30 top-[-10%] md:top-[-17%] left-0">
            <FaSun className="text-amber-500" size={'30%'} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
