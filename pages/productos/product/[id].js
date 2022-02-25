import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaCartPlus, FaPlus, FaMinus } from 'react-icons/fa';
import { BsFillBookmarkPlusFill, BsFillBookmarkCheckFill } from 'react-icons/bs';
import Loader from '../../../components/Loader';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToCart, errorCart, saveCart } from '../../../redux/features/cart/Cart';

export const getServerSideProps = async ({ req, query }) => {
    const productItem = await fetch(`http://${req.headers.host}/api/products/product?item=${query.id}`);
    const product = await productItem.json();
    
    return {
        props: {
            product
        }
    }
}

const index = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [prodsize, setProdSize] = useState('');
    const [isFavorite, setIsFavorite] = useState(false);
    const router = useRouter();
    const { id } = router.query;

    useEffect(()=>{
        setProdSize(product.sizes[0]);
    },[]);

    const addQuantity = () => {
        setQuantity(quantity + 1);
    }

    const restQuantity = () => {
        quantity > 1
            ? setQuantity(quantity - 1)
            : setQuantity(1)
    }

    const saveProduct = () => {
        console.log(quantity);
        console.log(prodsize);
    }

    return (
        <section className='mt-24 w-full h-full flex justify-center'>
            {
                product
                    ? (
                        <div className='w-[90%] h-auto bg-slate-200 flex flex-col relative p-4 rounded-lg'>
                            <div className='flex flex-col md:flex-row gap-3'>
                                <div className='relative w-full h-[300px] rounded-lg md:w-[50%]'>
                                    <Image src={product.img} alt={product.name} layout='fill' />
                                </div>
                                <div className='w-full h-[300px] flex flex-col p-6'>
                                    <div>
                                        <h1 className='font-fvolkhov text-4xl'>{product.name}</h1>
                                        <div className='mt-2'>
                                            <h6 className='font-fmate text-xl'>Precio</h6>
                                            <h2 className='font-fmate text-2xl font-bold'>{`$ ${product.price}`}</h2>
                                        </div>
                                    </div>
                                    <div className='mt-4 flex gap-14'>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <h3 className='font-fmate'>Cantidad</h3>
                                            <div className='flex items-center gap-3'>
                                                <button
                                                    className='w-7 h-7 bg-amber-500 flex justify-center items-center rounded-sm'
                                                    onClick={restQuantity}
                                                >
                                                    <FaMinus size={15} />
                                                </button>
                                                {/* <input type='text' defaultValue={quantity} /> */}
                                                <h3 className='font-fvolkhov w-7 text-center'>{quantity}</h3>
                                                <button
                                                    className='w-7 h-7 bg-amber-500 flex justify-center items-center rounded-sm'
                                                    onClick={addQuantity}
                                                >
                                                    <FaPlus size={15} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <h3 className='font-fmate'>Talla</h3>
                                            <select className='w-16 h-7 font-fvolkhov cursor-pointer' defaultValue={product.sizes[0]} onChange={(e) => setProdSize(e.target.value)}>
                                                {
                                                    product.sizes.map((psize)=>{
                                                        return(
                                                            <option key={psize}>{psize}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className='mt-9'>
                                        <button 
                                            className='w-32 h-11 bg-green-400 hover:bg-green-500 flex justify-center items-center gap-2 rounded-lg font-fvolkhov text-lg'
                                            onClick={saveProduct}
                                        >
                                            <FaCartPlus size={25} />
                                            agregar
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <fieldset className='border-4 border-slate-300 w-full p-6 mt-6'>
                                <legend className='font-fvolkhov '>Descripcion</legend>
                                <p className='font-fmate'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit consectetur, similique corrupti dolore beatae maxime, sapiente dolorum quo illum laboriosam. Vitae quod culpa reprehenderit ex quasi totam beatae ipsa.</p>
                            </fieldset>
                            <div className='absolute top-8 right-8 '>
                                <button className='outline-none border-none bg-none' onClick={() => setIsFavorite(!isFavorite)}>
                                    {
                                        isFavorite
                                            ? <BsFillBookmarkCheckFill color='rgb(34,197,94)' size={40} />
                                            : <BsFillBookmarkPlusFill size={40} />
                                    }
                                </button>
                            </div>
                        </div>
                    ) 
                    : <Loader />
            }

        </section>
    )
}

export default index;