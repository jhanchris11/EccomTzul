const CartContainer = ({ children }) => {
    return (
        <div className="w-3/5 h-screen flex flex-col">
            {children}
        </div>
    )
}

export default CartContainer