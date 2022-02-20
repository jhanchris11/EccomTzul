import React from 'react';
import Products from '../../components/Products';
import Product from '../../components/Product';
import ProductsPageLayout from './ProductsPageLayout';
import Loader from '../../components/Loader';


export const getServerSideProps = async ({ req }) => {
  const data = await fetch(`http://${req.headers.host}/api/products`);
  const products = await data.json();
  const categoriesData = await fetch(`http://${req.headers.host}/api/categories`);
  const categories = await categoriesData.json();

  return {
    props: {
      products,
      categories
    }
  }
}

const index = ({products, categories}) => {
  return (
    <ProductsPageLayout categoriesList={categories}>
      <Products>
        {
          products 
          ? products.map(product => <Product key={product.id} product={product}></Product>)
          :  <Loader />
        }
      </Products>
    </ProductsPageLayout>
  )
}

export default index