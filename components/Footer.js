import React from 'react';
import Link from 'next/link';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-amber-700 w-full h-auto  mt-16 text-slate-50 flex flex-col'>
            <div className='w-full h-auto flex flex-col md:flex-row'>
                <div className='w-full md:w-[20%] h-auto p-6'>
                    <h3 className='font-fvolkhov font-bold underline decoration-slate-50 decoration-wavy underline-offset-8'>Navegacion</h3>
                    <ul className='w-max flex flex-col mt-5 gap-1 font-fmate'>
                        <Link href={'#'} >Inicio</Link>
                        <Link href={'#'} >Productos</Link>
                    </ul>
                </div>
                <div className='w-full md:w-[20%] h-auto p-6'>
                    <h3 className='font-fvolkhov font-bold underline decoration-slate-50 decoration-wavy underline-offset-8'>Destacado</h3>
                    <ul className='w-max h-auto flex flex-wrap flex-col mt-5 gap-1 font-fmate'>
                        <Link href={'/'} >Vestidos</Link>
                        <Link href={'/'} >Camisetas</Link>
                        <Link href={'/'} >Shorts</Link>
                        <Link href={'/'} >Sombreros</Link>
                        <Link href={'/'} >Tenis</Link>
                    </ul>
                </div>
                <div className='w-full md:w-[20%] h-auto p-6'>
                    <h3 className='font-fvolkhov font-bold underline decoration-slate-50 decoration-wavy underline-offset-8'>Redes Sociales</h3>
                    <ul className='w-full h-auto flex mt-5 gap-2 font-fmate'>
                        <Link href={'/'} passHref>
                            <a className='w-20 max-w-fit h-10'>
                                <FaFacebookSquare size={'100%'} />
                            </a>
                        </Link>
                        <Link href={'/'} passHref>
                            <a className='w-20 max-w-fit h-10'>
                                <FaInstagramSquare className='cursor-pointer' size={'100%'} />
                            </a>
                        </Link>
                        <Link href={'/'} passHref>
                            <a className='w-20 max-w-fit h-10'>
                                <FaTwitterSquare className='cursor-pointer' size={'100%'} />
                            </a>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className='w-full h-auto'>
                <h3 className='text-center p-2'> Tzuzul Bootcamp 2022 &copy; Desarrollada por Gonzalo P., Christian C. y Nahum C. </h3>
            </div>
        </footer>
    )
}

export default Footer;