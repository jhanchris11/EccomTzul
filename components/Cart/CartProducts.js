import { useSelector } from "react-redux"
import CartProduct from "./CartProduct"

const Cart = () => {
    const products = useSelector(state => state.cart.products)
    const price = useSelector(state => state.cart.price)

    return (
        <div>
            {products.length === 0
            ?   <div className="text-center mt-24 mb-8">
                    <h1 className="font-fvolkhov font-light text-2xl">No hay elementos en el carrito</h1>
                </div>
            :   <div className="mt-24">
                    {products.map(product =>
                    <CartProduct key={product.id} product={product}></CartProduct>)}
                    <div className="h-12 w-max flex items-center justify-between bg-white rounded-md my-3 px-5 border-solid border-b-black border-b-opacity-10 shadow-md shadow-[0_3px_6px_rgb(0,0,0,0.1)]">
                        <h1 className="font-fvolkhov text-xl">Total: ${price.toFixed(2)}</h1>
                    </div>
                </div>}
        </div>
    )
}

export default Cart