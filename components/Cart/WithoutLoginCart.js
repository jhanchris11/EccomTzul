import Link from 'next/link'

const WithoutLoginCart = () => {
  return (
    <div className="text-center mt-24 mb-8">
      <h1 className="font-light text-2xl">Tienes que loguearte para acceder al carrito</h1>
      <div className="mt-2">
        <button className="w-max font-semibold bg-sky-400 rounded-md text-white py-2 px-8 mt-2">
          Ir a Iniciar Sesión
        </button>
      </div>
    </div>
  )
}

export default WithoutLoginCart
