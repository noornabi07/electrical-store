import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Shoap = () => {
    const products = useLoaderData()
    return (
        <div className='grid grid-cols-3 gap-8 mt-20 px-20'>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default Shoap;