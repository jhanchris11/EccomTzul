import React from 'react'
import CartContainer from '../../components/Cart/CartContainer'
import CartProducts from '../../components/Cart/CartProducts'
import StripePayment from '../../components/Cart/StripePayment'
import WithoutLoginCart from '../../components/Cart/WithoutLoginCart'
import { useSelector } from 'react-redux'

const CartPage = () => {
  const logged = useSelector(state => state.auth.logged)

  return (
      <div className='w-auto h-auto flex flex-col items-center'>
        {logged 
        ? <CartContainer>
            <CartProducts />   
            <StripePayment />
          </CartContainer>
        : <CartContainer>
            <WithoutLoginCart />
          </CartContainer>}
      </div>
  )
}

export default CartPage
