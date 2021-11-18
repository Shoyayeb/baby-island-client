import { useState } from 'react';

const useDashFunctions = () => {

    const [onMyOrders, setOnMyOrders] = useState(true);
    const [onPay, setOnPay] = useState(false);
    const [onMyReview, setOnMyReview] = useState(false);
    const [onLogOut, setOnLogOut] = useState(false);

    const myOrders = () => {
        if (onMyOrders) {
            setOnMyOrders(false)
        } else {
            setOnMyOrders(true)
        }
    }

    const pay = () => {
        if (onPay) {
            setOnPay(false)
        } else {
            setOnPay(true)
        }
    }

    const review = () => {
        if (onMyReview) {
            setOnMyReview(false)
        } else {
            setOnMyReview(true)
        }
    }

    const logOut = () => {
        if (onLogOut) {
            setOnLogOut(false)
        } else {
            setOnLogOut(true)
        }
    }

    return {
        myOrders,
        pay,
        review,
        logOut,
        onMyOrders,
        onPay,
        onMyReview,
        onLogOut,
    };
};

export default useDashFunctions;