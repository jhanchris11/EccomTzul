import NavBars from './NavBars';
import { FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import LogoutButton from './LogoutButton'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const logged = useSelector(state => state.auth.logged) 

  const openMenu = () => {
    setIsNavOpen(!isNavOpen);
  }
    
  return (
    <nav className="bg-amber-500 h-16 w-full md:flex justify-between items-center m-0 fixed z-[500] md:px-5">
      <div className="w-36 h-16 flex justify-center items-center p-0 cursor-pointer">
        <Link href='/'>
          <Image src="/logoGCN.svg" width={'100%'} height={'100%'} alt="logo" />
        </Link>
      </div>
      <div className='flex gap-10'>
        <ul className={`flex flex-col justify-center items-center gap-5 font-fvolkhov w-full overflow-y-hidden transition-height ease-in delay-150 bg-gray-400 md:bg-transparent md:flex-row md:h-auto ${isNavOpen ? 'h-48' : 'h-0'}`}>
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
        <div className='flex gap-4 absolute z-50 right-5 top-1/4 md:relative'>
          <Link href={'/carro'} passHref>
            <a>
              <FaShoppingCart size={35} />
            </a>
          </Link>
          <NavBars navOpen={isNavOpen} handleOpen={openMenu} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
