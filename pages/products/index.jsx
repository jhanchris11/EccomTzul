import React, {useState} from 'react';
import { BsArrowBarLeft } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';


// export async function getServerSideProps({req}){
//     const {data:products} = await axios.get(`http://${req.headers.host}/api/productos`)
//     return {
//         props:{
//             products
//         }
//     }
// }

const index = ({ products, children }) => {
  const [isCatgMenuOpen, setIsCatgMenuOpen] = useState(false);

  return (
    <section className='mt-24'>
      <div className='w-full h-14 flex justify-between md:justify-end items-center px-5'>
        <div className='w-auto h-auto flex items-center gap-3'>
          <input className='h-8 outline-none rounded-md p-2 text-center bg-slate-300 md:w-80' type='text' />
          <button className='h-8 w-8 box-border flex justify-center items-center rounded-md bg-amber-600'>
            <BiSearchAlt size={25} />
          </button>
        </div>
        <button className='h-8 w-8 box-border flex justify-center items-center bg-none md:hidden'
          onClick={() => setIsCatgMenuOpen(!isCatgMenuOpen)}
        >
          <BsArrowBarLeft size={25} />
        </button>
      </div>
      <div className='w-full h-screen flex relative mt-9'>
        <div className={`box-border bg-red-600 md:bg-white md:border-r-2 md:border-amber-500 ${isCatgMenuOpen ?  'w-52':'w-0'}  md:w-52 overflow-hidden h-full absolute md:relative right-0 transition-all duration-500`}>
            <h1 className='ml-4 mt-4 underline decoration-amber-500 decoration-wavy underline-offset-8'>Categorias</h1>
            <ul className='ml-4 mt-4'>
              <li>Vestidos</li>
              <li>Camisetas</li>
            </ul>
        </div>
        <div className='w-full h-full '>
            {children}
        </div>
      </div>
    </section>
  )
}

export default index