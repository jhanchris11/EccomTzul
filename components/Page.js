import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCart, emptyCart } from '../redux/features/cart/Cart'
import Navbar from './Navbar/Navbar';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/database'
import { login } from '../redux/features/auth/Auth';

const Page = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (authResult) => {
      if(authResult){
        dispatch(login({
          email: authResult.email,
          id: authResult.uid,
        }))
        dispatch(getCart())
      }
      else{
        dispatch(emptyCart())
      }
    })
  },[])

  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default Page;
