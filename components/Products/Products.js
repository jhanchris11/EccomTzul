import React from 'react'

const Products = ({ children }) => {
  return (
      <div className='p-10 flex justify-center'>
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-4 gap-5 justify-items-center'>
              {children}
          </div>
      </div>
  )
}

export default Products
