import React from 'react';
import useDashFunctions from '../../../hooks/useDashFunctions';

const Pay = () => {
    const { myOrders, pay, review, logOut, onMyOrders, onPay, onMyReview, onLogOut, } = useDashFunctions();
    onPay ? return (
        <p>hji</p>
    ): return null;
};

export default Pay;