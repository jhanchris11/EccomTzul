import React from 'react';
import { FaUmbrellaBeach } from 'react-icons/fa';
import CategorieItem from './CategorieItem';
import Link from 'next/link';

const PopularCategories = () => {
    return (
        <section className='w-full h-auto mt-24 bg-amber-500'>
            <div className='w-full h-auto p-8 flex flex-col items-center md:items-start'>
                <FaUmbrellaBeach className='text-slate-50' size={'10%'} />
                <h1 className='font-fvolkhov text-2xl md:text-4xl underline decoration-slate-50 decoration-wavy underline-offset-8'>Categorias Populares</h1>
            </div>
            <div className='w-full h-auto md:h-[600px] grid grid-cols-1 md:grid-cols-3 grid-flow-row p-8'>
                <div className='min-h-[250px] bg-slate-500 md:row-span-2 relative hover:shadow-2xl hover:shadow-black transition-shadow duration-700'>
                    <CategorieItem image={'/vestidos.jpg'} title={'Vestidos'} altname="vestidos" />
                </div>
                <div className='min-h-[250px] bg-slate-500 relative hover:shadow-2xl hover:shadow-black transition-shadow duration-700'>
                    <CategorieItem image={'/tshirts.jpg'} title={'Camisetas'} altname="camisetas" />
                </div>
                <div className='min-h-[250px] bg-slate-500 relative hover:shadow-2xl hover:shadow-black transition-shadow duration-700'>
                    <CategorieItem image={'/shorts.jpg'} title={'Shorts'} altname="shorts" />
                </div>
                <div className='min-h-[250px] bg-slate-500 relative hover:shadow-2xl hover:shadow-black transition-shadow duration-700'>
                    <CategorieItem image={'/sombreros.jpg'} title={'Sombreros'} altname="sombreros" />
                </div>
                <div className='min-h-[250px] bg-slate-500 relative hover:shadow-2xl hover:shadow-black transition-shadow duration-700'>
                    <CategorieItem image={'/zapatos.jpg'} title={'Tenis'} altname="zapatos" />
                </div>
            </div>

        </section>
    )
}

export default PopularCategories