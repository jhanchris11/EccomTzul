import React from 'react'

const Products = ({ children }) => {
  return (
      <div className='p-10 h-auto flex justify-center'>
          <div className='w-full h-auto flex flex-col items-center md:flex-wrap md:flex-row gap-5 justify-items-center'>
              {children}
          </div>
      </div>
  )
}

export default Products
