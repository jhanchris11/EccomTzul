// import { Hero } from '../components/hero'
import { Footer } from '../components/layout/footer'
import { Navbar } from '../components/layout/navbar'
import WrapperMain from '../components/WrapperMain'
import axios from 'axios'
import Head from 'next/head'
import { Products } from '../components/Products'
export async function getServerSideProps({ req }) {
  const { data: products } = await axios.get(
    `http://${req.headers.host}/api/products/filter?popular=true`
  )
  return {
    props: {
      products
    }
  }
}

export default function Home({ products }) {
  // console.log(products)
  return (
    <WrapperMain>
      <Head>
        <title>Ecommerce</title>
      </Head>
      <Navbar />
      <div className="mt-8">
        <Products products={products} />
      </div>
      <Footer />
    </WrapperMain>
  )
}
