import { Header } from "../components/Header";
import Brands from "../components/Brands";
import PopularCategories from "../components/PopularCategories";
import PopularProducts from "../components/PopularProducts";

export const getServerSideProps = async ({ req }) => {
  const categorias = await fetch(`http://${req.headers.host}/api/categories/popularscat?popular=true`);
  const categories = await categorias.json();
  // console.log(categories)
  return {
    props: {
      categories
    }
  }
}

export default function Home({categories}) {
  return (
    <div>
      <Header />
      <Brands />
      <PopularCategories popularCategories={categories} />
      <PopularProducts />
    </div>
  )
}
