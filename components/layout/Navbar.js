import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export const Navbar = () => {
  const [show, setShow] = useState(false)
  const cart = useSelector((state) => state.cart)

  return (
    <nav className="bg-white shadow-md py-3 px-5 sm:px-0">
      <div className="flex justify-between max-w-screen-xl mx-auto">
        <Link href={'/'}>Inicio</Link>
        <ul className={`gap-5 ${show ? 'flex' : 'hidden'} sm:flex  `}>
          <li>
            <Link href={'/products'}>Productos</Link>
          </li>
          <li>
            <Link href={'/products'}>Productos</Link>
          </li>
          <li>
            <Link passHref href={'/cart'}>
              <p>Carrito {cart.items.length}</p>
            </Link>
          </li>
          <li>
            <Link passHref href={'/login'}>
              Login
            </Link>
          </li>
        </ul>
        <button className="sm:hidden" onClick={() => setShow(!show)}>
          Menu
        </button>
      </div>
    </nav>
  )
}
