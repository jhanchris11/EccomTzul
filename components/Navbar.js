import Link from 'next/link'
import React from 'react'
import Cart from './Cart'

const Navbar = () => {
  return (
    <div className='bg-sky-500 flex h-12 items-center justify-between px-12 text-white text-2xl font-bold'>
        <div>
            Logo
        </div>
        <div className='flex gap-28'>
            <nav>
                <ul className='flex gap-8'>
                    <li><Link href='/'>Inicio</Link></li>
                    <li><Link href='/productos'>Productos</Link></li>
                    <li><Link href='/login'>Login</Link></li>
                </ul>
            </nav>
            <div className='flex gap-10'>
                <Link href='/carro'>
                    <div><Cart /></div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
