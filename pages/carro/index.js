import React from 'react'
import { useSelector } from 'react-redux'

const CartPage = () => {
  const products = useSelector(state => state.cart.products)

  return (
      <>
        <h1 className='text-3xl'>Productos: </h1>
        <div>
          {products.map(product => <h1 key={product.id}>{product.name}</h1>)}  
        </div>          
      </>
  )
}

export default CartPage
