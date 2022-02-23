import React from 'react'
import Products from '../../components/Products/Products'
import Product from '../../components/Products/Product'
import { useSelector } from 'react-redux'
import ProductAuthValidation from '../../components/Products/ProductAuthValidation'


export const getServerSideProps = async ({ req }) => {
    const data = await fetch(`http://${req.headers.host}/api/products`)
    const products = await data.json()
  
    return {
      props: {
        products
      }
    }
  }
  
const ProductsPage = ({ products }) => {
  const errorMessage = useSelector(state => state.cart.errorMessage)
  
  return (
    <>
        <Products>
          {products.map(product => <Product key={product.id} product={product}></Product>)}
        </Products>
        {errorMessage && <ProductAuthValidation>{errorMessage}</ProductAuthValidation>}
    </>
  )
}

export default ProductsPage
