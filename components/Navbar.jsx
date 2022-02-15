import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {FaShoppingCart} from 'react-icons/fa';
import NavBars from './NavBars';

const Navbar = () => {
  const  [isNavOpen, setIsNavOpen] = useState(false);

  const openMenu = () => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <nav className="bg-amber-500 h-16 w-full md:flex justify-between items-center m-0 fixed z-[500] md:px-5">
      <div className="w-36 h-16 flex justify-center items-center p-0">
        <Image src="/logoGCN.svg" width={'100%'} height={'100%'} alt="logo" />
      </div>
      <div className='flex gap-10'>
        <ul className={`flex flex-col justify-center items-center gap-5 font-fvolkhov w-full overflow-y-hidden transition-height ease-in delay-150 bg-gray-400 md:bg-transparent md:flex-row md:h-auto ${isNavOpen ? 'h-48':'h-0'}`}>
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/products">Productos</Link></li>
          <li><Link href="/">Log in</Link></li>
        </ul>
        <div className='flex gap-4 absolute z-50 right-5 top-1/4 md:relative'>
            <button onClick={() => console.log('hola')}>
              <FaShoppingCart size={35} />
            </button>
            <NavBars navOpen={isNavOpen} handleOpen={openMenu} />
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
