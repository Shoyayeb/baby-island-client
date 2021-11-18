import React from 'react';
import AllOrders from '../AllOrders/AllOrders';
import Nav from '../Nav/Nav';
import Pay from '../Pay/Pay';

const DashBoard = () => {
    return (
        <div>
            <Nav></Nav>
            <AllOrders></AllOrders>
            <Pay></Pay>
        </div>
    );
};

export default DashBoard;