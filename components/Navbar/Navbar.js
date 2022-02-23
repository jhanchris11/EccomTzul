import Link from 'next/link'
import React from 'react'
import IconCart from '../Cart/IconCart'
import { useSelector } from 'react-redux'
import LogoutButton from './LogoutButton'

const Navbar = () => {
    const logged = useSelector(state => state.auth.logged) 

  return (
    <div className='bg-sky-400 flex h-12 items-center justify-between px-12 text-white text-2xl font-bold'>
        <div>
            Logo
        </div>
        <div className='flex gap-28'>
            <nav>
                <ul className='flex gap-8'>
                    <li><Link href='/'>Inicio</Link></li>
                    <li><Link href='/productos'>Productos</Link></li>
                    <li>
                        {
                            !logged 
                            ? <Link href='/auth'>Login</Link> 
                            : <LogoutButton>Logout</LogoutButton>
                        }
                    </li>
                </ul>
            </nav>
            <div className='flex gap-10'>
                <Link href='/carro'>
                    <div>
                        <IconCart />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
