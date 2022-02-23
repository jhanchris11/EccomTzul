import { IoIosClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { errorCart } from '../../redux/features/cart/Cart'

const ProductCloseIcon = () => {
    const dispatch = useDispatch()
    
    return (
        <div className='text-xl text-red-600'>
            <button onClick={() => dispatch(errorCart(''))}>
                <IoIosClose />  
            </button>
        </div>
    )
}

export default ProductCloseIcon