import React from 'react';

const SingleProduct = ({product}) => {
    const {balance, name, picture} = product
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-3">
                <img src={picture} alt="Shoes" className="rounded-xl h-[200px] w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <h2 className="card-title">{name}</h2>
                <p className='text-lg font-bold text-red-700'>{balance}</p>
            </div>
        </div>
    );
};

export default SingleProduct;