import React from 'react'
import axios from 'axios'
import Products from '../../components/Products'
import { Footer } from '../../components/layout/footer'
import { Navbar } from '../../components/layout/navbar'
import WrapperMain from '../../components/WrapperMain'
import Head from 'next/head'

export async function getServerSideProps({ req }) {
  // Lunes: Una solución a este problema
  const { data: products } = await axios.get(
    `http://${req.headers.host}/api/products`
  )

  return {
    props: {
      products
    }
  }
}

export default function index({ products }) {
  console.log(products)
  return (
    <>
      <WrapperMain>
        <Head>
          <title>Ecommerce</title>
        </Head>
        <Navbar />
        <div className="mt-8">
          {products && <Products products={products} />}
        </div>
        <Footer />
      </WrapperMain>
    </>
  )
}
