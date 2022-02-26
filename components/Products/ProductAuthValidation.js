import ProductCloseIcon from './ProductCloseIcon'

const ProductAuthValidation = ({ children }) => {
  console.log('error')
  return (
    <div className="w-max">
      <div className="absolute bottom-8 right-3 z-10">
        <ProductCloseIcon />
      </div>
      <div className="absolute bottom-3 right-3 rounded-md bg-red-100 text-red-600 py-3 px-6">
        {children}
      </div>
    </div>
  )
}

export default ProductAuthValidation
