import React from 'react'

const Products = ({ children }) => {
  return (
    <div className="p-10 flex justify-center">
      <div className=" w-4/5 flex justify-evenly">{children}</div>
    </div>
  )
}

export default Products
