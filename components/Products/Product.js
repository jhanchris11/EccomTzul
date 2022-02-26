import React from 'react'
import Image from 'next/image'
import IconCart from '../Cart/IconCart'
import { useDispatch, useSelector } from 'react-redux'

import { addToCart, errorCart, saveCart } from '../../redux/features/cart/Cart'
import { useRouter } from 'next/router'

const Product = ({ product }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const logged = useSelector((state) => state.auth.logged)

  const addProductToCart = () => {
    if (logged) {
      dispatch(addToCart(product))
      dispatch(saveCart())
      dispatch(errorCart(''))
    } else {
      dispatch(errorCart('Para agregar productos al carrito, por favor inicie sesion'))
    }
  }

  const productDetails = (productID) => {
    router.push(`/productos/product/${productID}`)
  }

  return (
    <div>
      <div
        style={{ borderWidth: '1px' }}
        className="w-72 border-solid border-black border-opacity-10 bg-white flex flex-col items-center justify-center rounded-sm shadow-sm shadow-[0_3px_5px_rgb(0,0,0,0.1)] duration-150 hover:scale-105"
      >
        <Image src={product.img} width={400} height={600} />
        <div className="w-4/5 flex flex-col items-start">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <h2>${product.price}</h2>
        </div>
        <div className="m-2 flex justify-center gap-6">
          <button
            className="bg-sky-400 text-white font-medium py-2 px-3 rounded-md cursor-pointer"
            onClick={() => productDetails(product.id)}
          >
            Comprar ahora
          </button>
          <div
            onClick={addProductToCart}
            className="text-sky-400 flex items-center px-3 border-sky-500 border-2 rounded-lg cursor-pointer"
          >
            <IconCart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
