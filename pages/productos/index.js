import React from 'react'
import Products from '../../components/Products'
import Product from '../../components/Product'


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
  return (
    <>
        <Products>
          {products.map(product => <Product key={product.id} product={product}></Product>)}
        </Products>
    </>
  )
}

export default ProductsPage
