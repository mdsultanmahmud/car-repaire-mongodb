import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const Products = () => {
    const [products, setProducts] = useState([])
        useEffect(() =>{
        fetch('https://car-with-mongodb-server.vercel.app/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])
    return (
        <div className='my-3'>
            <div className='text-center my-7'>
            <p className='text-lg text-red-600 font-semibold'>Popular Products</p>
            <h3 className='text-3xl font-bold mb-3'>Browse Our Products</h3>
            <p className='w-3/4 mx-auto text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(prod => <SingleProduct
                    key={prod._id}
                        product = {prod}
                    ></SingleProduct>)
                }
            </div>
            <button className="btn btn-outline btn-secondary mx-auto my-8 block">More Products</button>
        </div>
    );
};

export default Products;