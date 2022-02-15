import React from 'react'
import { PageHead } from './PageHead';
import Navbar from './Navbar';
import Footer from './Footer';

const Page = ({ children }) => {
    return (
        <div>
            <PageHead />
            <Navbar /> 
            <main className='overflow-x-hidden'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Page