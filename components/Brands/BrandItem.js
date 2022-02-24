import React from 'react'
import Image from 'next/image'

const BrandItem = () => {
    return (
        <div className='w-20 h-16 md:w-[120px] md:h-[80px] relative'>
            <Image src='/logoGCNgray.svg' alt='brand' layout='fill' />
        </div>
    )
}

export default BrandItem