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
        <div className="md:h-24 flex flex-col md:flex-row items-center md:items-center md:justify-between bg-white rounded-md my-3 border-solid md:border-l-8 md:border-t-0 md:border-l-amber-500 border-t-8 border-t-amber-500 border-b-black border-b-opacity-10 shadow-md shadow-[0_3px_6px_rgb(0,0,0,0.1)]">
            <div className='h-auto mt-2 md:mt-0 md:w-7/12 flex flex-col md:flex-row justify-center md:justify-start md:items-center md:ml-5'>
                <Image className='rounded-md' objectFit='contain' src={product.img} width={50} height={75}/>
                <h1 className="mx-2 md:text-left text-center font-fvolkhov font-normal text-xl md:ml-5">{product.description}</h1>
            </div>
            <div className='md:w-5/12 flex md:justify-around flex-col md:flex-row items-center text-xl'>
                <div>
                    <h1 className="font-fvolkhov font-light">Cantidad: <span className='font-semibold'>{product.quantity}</span></h1>
                </div>
                <div>
                    <h1 className='font-fvolkhov text-emerald-500'>${product.price.toFixed(2)}</h1>
                </div>
                <div
                    className='flex' 
                    onClick={removeProductFromCart}
                >
                    <RemoveIconCart />
                </div>
            </div>
        </div>
    )
}

export default CartProduct