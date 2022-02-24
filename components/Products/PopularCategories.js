import React from 'react';
import { FaUmbrellaBeach } from 'react-icons/fa';
import CategorieItem from './CategorieItem';

const PopularCategories = ({ popularCategories }) => {
    return (
        <section className='w-full h-auto mt-24 bg-amber-500'>
            <div className='w-full h-auto p-8 flex flex-col items-center md:items-start'>
                <FaUmbrellaBeach className='text-slate-50' size={'10%'} />
                <h1 className='font-fvolkhov text-2xl md:text-4xl underline decoration-slate-50 decoration-wavy underline-offset-8'>Categorias Populares</h1>
            </div>
            <div className='w-full h-auto md:h-[600px] grid grid-cols-1 md:grid-cols-3 grid-flow-row p-8'>
                <div className='min-h-[250px] bg-slate-500 md:row-span-2 relative hover:shadow-2xl hover:shadow-black transition-shadow duration-700'>
                    <CategorieItem
                        image={popularCategories[1].image}
                        title={popularCategories[1].name}
                        altname={popularCategories[1].tag}
                    />
                </div>
                <div className='min-h-[250px] bg-slate-500 relative hover:shadow-2xl hover:shadow-black transition-shadow duration-700'>
                    <CategorieItem
                        image={popularCategories[0].image}
                        title={popularCategories[0].name}
                        altname={popularCategories[0].tag}
                    />
                </div>
                <div className='min-h-[250px] bg-slate-500 relative hover:shadow-2xl hover:shadow-black transition-shadow duration-700'>
                    <CategorieItem
                        image={popularCategories[2].image}
                        title={popularCategories[2].name}
                        altname={popularCategories[2].tag}
                    />
                </div>
                <div className='min-h-[250px] bg-slate-500 relative hover:shadow-2xl hover:shadow-black transition-shadow duration-700'>
                    <CategorieItem
                        image={popularCategories[3].image}
                        title={popularCategories[3].name}
                        altname={popularCategories[3].tag}
                    />
                </div>
                <div className='min-h-[250px] bg-slate-500 relative hover:shadow-2xl hover:shadow-black transition-shadow duration-700'>
                    <CategorieItem
                        image={popularCategories[4].image}
                        title={popularCategories[4].name}
                        altname={popularCategories[4].tag}
                    />
                </div>
            </div>

        </section>
    )
}

export default PopularCategories