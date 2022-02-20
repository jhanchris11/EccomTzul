import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCart } from '../redux/features/cart/Cart'
import Navbar from './NavbarAnt';

const Page = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCart())
  }, [])

  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default Page;
