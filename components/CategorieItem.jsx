import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CategorieItem = ({ image, title, altname }) => {
    return (
        <div>
            <Link href={`/products/category/${altname}`} passHref >
                <a>
                    <Image className="hover:scale-125 transition-transform duration-700" src={image} alt={altname} layout='fill' objectFit='cover' />
                </a>
            </Link>
            <div className='w-fit px-8 py-4 bg-black absolute z-20 bottom-2 left-2 bg-opacity-60 '>
                <h2 className='text-white font-fmate'>{title}</h2>
            </div>
        </div>
    )
}

export default CategorieItem;