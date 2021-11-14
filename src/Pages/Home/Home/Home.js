import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Products from '../Products/Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Features></Features>
        </div>
    );
};

export default Home;