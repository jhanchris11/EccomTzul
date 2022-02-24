/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart, addToCart, reduceFromCart } from '../features/Cart'
import { IMinus } from '../icons/Minus'
import { IPlus } from '../icons/Plus'
import { IRemove } from '../icons/Remove'
export default function Product({ product }) {
  console.log(product)
  const dispatch = useDispatch()

  const handleAddCart = () => {
    console.log(product)
    dispatch(addToCart(product))
  }
  const handleReduceCart = () => {
    dispatch(reduceFromCart(product))
  }

  const handleRemoveCart = () => {
    console.log(product)
    dispatch(removeFromCart({ id: product.id }))
  }

  return (
    <article className="bg-gray-100 shadow-md">
      <div className="p-2">
        <div className={'flex items-center justify-between'}>
          <h3 className="text-2xl font-bold">{product.name}</h3>
          <button
            className="text-red-500 px-3 py-2 rounded-md"
            onClick={handleRemoveCart}
          >
            <IRemove size={24} />
          </button>
        </div>
        <p className="my-3 text-center">{product.description}</p>
        <div className="flex flex-auto space-x-4 justify-center ">
          <button
            className="text-white bg-black px-3 py-2 rounded-md"
            onClick={handleAddCart}
          >
            <IPlus size={24} />
          </button>

          <button
            className="text-black bg-white border-slate-400 px-3 py-2 rounded-md"
            onClick={handleReduceCart}
          >
            <IMinus size={24} />
          </button>
        </div>
      </div>
      <img src={product.img} alt="Product image"></img>
    </article>
  )
}
