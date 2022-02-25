import ProductCloseIcon from "./ProductCloseIcon"

const ProductAuthValidation = ({ children }) => {
    console.log('error')
    return (
        <div className="fixed bottom-3 right-3">
            <div className="z-10">
                <ProductCloseIcon />
            </div>
            <div className="rounded-md bg-red-100 text-red-600 py-3 px-6">
                {children} 
            </div>
        </div>
    )
}

export default ProductAuthValidation