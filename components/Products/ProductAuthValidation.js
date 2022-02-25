import ProductCloseIcon from "./ProductCloseIcon"

const ProductAuthValidation = ({ children }) => {
    return (
        <div className="fixed bottom-3 right-3">
            <div className="fixed bottom-8 right-3 z-10 ">
                <ProductCloseIcon />
            </div>
            <div className="rounded-md bg-red-100 text-red-600 py-3 px-6">
                {children} 
            </div>
        </div>
    )
}

export default ProductAuthValidation