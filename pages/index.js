import Header from "../components/Header/Header";
import Brands from "../components/Brands/Brands";
import PopularCategories from "../components/Products/PopularCategories";
import PopularProducts from "../components/Products/PopularProducts";
import { useEffect } from "react";
import { saveCart, emptyCart } from "../redux/features/cart/Cart"
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

export const getServerSideProps = async ({ req }) => {
  const categorias = await fetch(`http://${req.headers.host}/api/categories/popularscat?popular=true`);
  const categories = await categorias.json();
  const popularproducts = await fetch(`http://${req.headers.host}/api/products/popularproducts?popular=true`);
  const products = await popularproducts.json();

  return {
    props: {
      categories,
      products
    }
  }
}

export default function Home({categories, products}) {
  const dispatch = useDispatch()
  const router = useRouter()
  const logged = useSelector(state => state.auth.logged)

  let query
  if (typeof window !== "undefined") {
    query = new URLSearchParams(window.location.search)
  }
 
  useEffect(() => {
    if (query.get('success')) {
      dispatch(emptyCart())
      dispatch(saveCart())
      router.push('/')
    }
    if (query.get('canceled')) {
      router.push('/carro')
    }
  }, [logged])

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <Brands />
      <PopularCategories popularCategories={categories} />
      <PopularProducts popularProducts={products} />
    </div>
  )
}
