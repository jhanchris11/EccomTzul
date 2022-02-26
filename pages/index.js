import Header from '../components/Header/Header'
import Brands from '../components/Brands/Brands'
import PopularCategories from '../components/Products/PopularCategories'
import PopularProducts from '../components/Products/PopularProducts'

export const getServerSideProps = async ({ req }) => {
  const categorias = await fetch(
    `http://${req.headers.host}/api/categories/popularscat?popular=true`
  )
  const categories = await categorias.json()
  return {
    props: {
      categories
    }
  }
}

export default function Home({ categories }) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <Brands />
      <PopularCategories popularCategories={categories} />
      <PopularProducts />
    </div>
  )
}
