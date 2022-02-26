import { useState, useRef } from 'react'
import Link from 'next/link'
import { BsArrowBarLeft } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { useRouter } from 'next/router'

const ProductsPageLayout = ({ categoriesList, children, products }) => {
  const [isCatgMenuOpen, setIsCatgMenuOpen] = useState(false)
  const searchRef = useRef(null)
  const router = useRouter()

  const searchProducts = () => {
    router.push(`/productos/${searchRef.current.value}`)
    searchRef.current.value = ''
  }

  const handleChangeSubmit = (e) => {
    if (e.key === 'Enter') {
      const nameLowercase = searchRef.current.value.toLowerCase()
      const nameValidation = products.find((product) =>
        product.name.toLowerCase().startsWith(nameLowercase)
      )
      if (nameValidation) {
        router.push(`/productos/${nameValidation.name}`)
      } else {
        router.push(`/productos/${searchRef.current.value}`)
      }
      searchRef.current.value = ''
    }
  }

  return (
    <section className="mt-24">
      <div className="w-full h-14 flex justify-between md:justify-end items-center px-5">
        <div className="w-auto h-auto flex items-center gap-3">
          <input
            ref={searchRef}
            onKeyDown={handleChangeSubmit}
            className="h-8 outline-none rounded-md p-2 text-center bg-slate-300 md:w-80"
            type="text"
          />
          <button
            className="h-8 w-8 box-border flex justify-center items-center rounded-md bg-amber-600"
            onClick={searchProducts}
          >
            <BiSearchAlt size={25} />
          </button>
        </div>
        <button
          className="h-8 w-8 box-border flex justify-center items-center bg-none md:hidden"
          onClick={() => setIsCatgMenuOpen(!isCatgMenuOpen)}
        >
          <BsArrowBarLeft size={25} />
        </button>
      </div>
      <div className="w-full h-full flex relative mt-9">
        <div
          className={`box-border bg-orange-500 z-50 md:bg-white md:border-r-2 md:border-amber-500 ${
            isCatgMenuOpen ? 'w-52' : 'w-0'
          }  md:w-52 overflow-hidden h-full absolute md:relative right-0 transition-all duration-500`}
        >
          <h1 className="ml-4 mt-4 underline decoration-slate-100 md:decoration-amber-500 decoration-wavy underline-offset-8">
            Categorias
          </h1>
          <ul className="ml-4 mt-4 flex flex-col gap-1">
            {categoriesList.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/productos/category/${category.tag}`} passHref>
                    <a>
                      <div className="w-full h-10 bg-orange-400 md:bg-slate-50 md:hover:bg-slate-100 flex items-center pl-2">
                        {category.tag}
                      </div>
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="w-full h-full ">{children}</div>
      </div>
    </section>
  )
}

export default ProductsPageLayout
