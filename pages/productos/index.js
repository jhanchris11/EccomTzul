import React from 'react'
import Products from '../../components/Products/Products'
import Loader from '../../components/Loader'
import ProductsPageLayout from './ProductsPageLayout'
import Product from '../../components/Products/Product'
import { useSelector } from 'react-redux'
import ProductAuthValidation from '../../components/Products/ProductAuthValidation'


export const getServerSideProps = async ({ req }) => {
    const data = await fetch(`http://${req.headers.host}/api/products`)
    const products = await data.json()
    const categoriesData = await fetch(`http://${req.headers.host}/api/categories`);
    const categories = await categoriesData.json()
  
    return {
      props: {
        products,
        categories
      }
    }
  }
  
const ProductsPage = ({ products, categories }) => {
  const errorMessage = useSelector(state => state.cart.errorMessage)
  
  return (
    <ProductsPageLayout categoriesList={categories}>
        <Products>
        {
          products 
          ? products.map(product => <Product key={product.id} product={product}></Product>)
          :  <Loader />
        }
        </Products>
        {errorMessage && <ProductAuthValidation>{errorMessage}</ProductAuthValidation>}
    </ProductsPageLayout>
  )
}

export default ProductsPage
