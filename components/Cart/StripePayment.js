import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
)
  
const StripePayment = () => {
  const products = useSelector(state => state.cart.products)
  
  React.useEffect(() => {
      
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
          console.log('Order placed! You will receive an email confirmation.');
        }
    
        if (query.get('canceled')) {
          console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
    }, [])

    const handleSubmit = async (e) => {
      e.preventDefault()

      const itemsToSend = products.map(product => ({
        price: product.priceID,
        quantity: product.quantity,
      }))
      console.log(itemsToSend)

      const res = await fetch('/api/payment', {
        method: 'POST',
        body: JSON.stringify(itemsToSend)
      })

      const stripe = await stripePromise
      const session = await res.json()
      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      })

      if (result.error) {
        console.log(result.error.message)
      }
    }

    return (
        <div>
          {products.length === 0
          ? <div className='flex justify-center'>
              <Link href={'/productos'}><button className="bg-sky-500 text-white font-semibold rounded-md py-2 px-8 border-solid border-b-black border-b-opacity-10 shadow-md shadow-[0_3px_6px_rgb(0,0,0,0.2)] hover:bg-sky-400 duration-100">Seguir comprando</button></Link>  
            </div>
          : <div className="w-full flex items-center justify-center">
              <form onSubmit={handleSubmit}>
                <button className="bg-sky-500 text-white font-semibold rounded-md py-2 px-12 hover:bg-sky-400 duration-150">Comprar</button>
              </form>
            </div>}
        </div>
    )
}

export default StripePayment