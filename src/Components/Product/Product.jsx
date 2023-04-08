import React from 'react';

const Product = ({ product }) => {
    const { picture, name, price, } = product;
    return (
        <div className='w-full bg-gray-100 py-6 px-8 rounded shadow-slate-200 shadow-lg'>
            <img src={picture} alt="" />
            <p className='font-bold text-3xl mt-5'>{name}</p>
            <p className='my-5 text-xl text-gray-500'>Category: Home Appliance</p>
            <p className='font-bold text-xl text-gray-700'>Price: ${price}</p>
            <div className='text-center mt-6'>
                <button className='font-bold text-gray-600 text-xl hover:bg-cyan-500 bg-cyan-300 px-20 py-4 rounded-3xl'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;