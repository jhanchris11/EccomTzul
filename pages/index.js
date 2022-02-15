import { Header } from "../components/Header";
import Brands from "../components/Brands";
import PopularCategories from "../components/PopularCategories";
import PopularProducts from "../components/PopularProducts";

export default function Home() {
  return (
    <div>
      <Header />
      <Brands />
      <PopularCategories />
      <PopularProducts />
    </div>
  )
}
