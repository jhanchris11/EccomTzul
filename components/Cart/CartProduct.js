import Image from 'next/image'
import RemoveIconCart from './RemoveIconCart'
import { useDispatch } from 'react-redux'
import { removeFromCart, saveCart } from '../../redux/features/cart/Cart'

const CartProduct = ({ product }) => {
    const dispatch = useDispatch()

    const removeProductFromCart = () => {
        dispatch(removeFromCart(product))
        dispatch(saveCart())
    }

    return (
        <div className="h-24 flex items-center justify-between bg-white rounded-md my-3 border-solid border-l-8 border-l-sky-500 border-b-black border-b-opacity-10 shadow-md shadow-[0_3px_6px_rgb(0,0,0,0.1)]">
            <div className='h-auto w-7/12 flex items-center ml-5'>
                <Image className='rounded-md' src={product.img} width={50} height={75}/>
                <h1 className="font-light text-xl ml-5">{product.description}</h1>
            </div>
            <div className='w-5/12 flex justify-around text-xl'>
                <div>
                    <h1 className="font-light">Cantidad <span className='font-semibold'>{product.quantity}</span></h1>
                </div>
                <div>
                    <h1 className='text-emerald-600'>${product.price.toFixed(2)}</h1>
                </div>
                <div onClick={removeProductFromCart}>
                    <RemoveIconCart />
                </div>
            </div>
        </div>
    )
}

export default CartProduct