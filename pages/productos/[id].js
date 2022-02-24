import React from 'react'
import ProductsPageLayout from './ProductsPageLayout';
import Products from '../../components/Products/Products';
import Product from '../../components/Products/Product';
import Loader from '../../components/Loader';

export const getServerSideProps = async ({ req, query }) => {
    const productsList = await fetch(`http://${req.headers.host}/api/products/productssearch?search=${query.id}`);
    const products = await productsList.json();
    const categoriesData = await fetch(`http://${req.headers.host}/api/categories`);
    const categories = await categoriesData.json();
  
    return {
      props: {
        products,
        categories
      }
    }
}

const  index = ({categories, products}) => {
    return (
        <ProductsPageLayout categoriesList={categories} >
             <Products>
            {
               products 
               ? (
                 products.message 
                 ? <h1>{products.message}</h1>
                 : products.map(product => <Product key={product.id} product={product}></Product>)
               )
               : <Loader />
            } 
          </Products>
        </ProductsPageLayout>
      )
}

export default  index