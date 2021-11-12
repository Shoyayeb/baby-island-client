import React, { useEffect, useState } from 'react';
import ProductsCard from '../ProductsCard/ProductsCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://baby-island.herokuapp.com/homeproduct')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div class="w-full bg-white p-12">
            <div class="header flex items-end justify-between mb-12">
                <div class="title">
                    <p class="text-4xl font-bold text-gray-800 mb-4">
                        Lastest Toys from world class manufacturer
                    </p>
                    <p class="text-2xl font-light text-pink-400">
                        All products are verified by 2 experts and valdiate by the CTO
                    </p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                {products.map((product) => (
                    <ProductsCard
                        key={product._id}
                        product={product}
                    ></ProductsCard>
                ))}
            </div>
        </div>
    );
};

export default Products;