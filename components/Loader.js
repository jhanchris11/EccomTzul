import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loader = () => {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <span className='animate-spin'>
                <AiOutlineLoading3Quarters size={50} />
            </span>
        </div>
    )
}

export default Loader;