import { HandIcon, LogoutIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import AddReview from '../AddReview/AddReview';
import AllOrders from '../AllOrders/AllOrders';
import LogOut from '../LogOut/LogOut';
import Pay from '../Pay/Pay';


const DashBoard = () => {
    const [onMyOrders, setOnMyOrders] = useState(true);
    const [onPay, setOnPay] = useState(false);
    const [onMyReview, setOnMyReview] = useState(false);
    const [onLogOut, setOnLogOut] = useState(false);
    const [where, setWhere] = useState('myOrders')

    const myOrders = () => {
        // if (onMyOrders) {
        //     setOnMyOrders(false)
        // } else {
        //     setOnMyOrders(true)
        //     setOnPay(false)
        // }
        setWhere('myOrders')
    }

    const pay = () => {
        // if (onPay) {
        //     setOnPay(false)
        // } else {
        //     setOnPay(true)
        // }
        setWhere('pay')
    }

    const review = () => {
        // if (onMyReview) {
        //     setOnMyReview(false)
        // } else {
        //     setOnMyReview(true)
        // }
        setWhere('myReview')
    }

    const logOut = () => {
        // if (onLogOut) {
        //     setOnLogOut(false)
        // } else {
        //     setOnLogOut(true)
        // }
        setWhere('logOut')
    }
    return (
        <div>
            <div className=" bg-white lg:my-10">
                <nav className=" flex items-center justify-center gap-10 mx-40" aria-label="Global">
                    <button
                        onClick={myOrders}
                        class="md:px-5 md:py-5 px-3 py-1 transition ease-in duration-200 uppercase  rounded md:rounded-full hover:bg-pink-500 hover:text-white border-2 border-pink-600 focus:outline-none flex flex-col justify-center items-center">
                        <ShoppingCartIcon className=" md:h-1/2 md:w-1/2 " />
                        <h1 className="h-1/2 w-1/2 ">My Orders</h1>
                    </button>
                    <button
                        onClick={pay}
                        class="md:px-5 md:py-5 px-3 py-1 transition ease-in duration-200 uppercase  rounded md:rounded-full hover:bg-pink-500 hover:text-white border-2 border-pink-600 focus:outline-none flex flex-col justify-center items-center">
                        <HandIcon className=" md:h-1/2 md:w-1/2 " />
                        <h1 className="h-1/2 w-1/2 ">Pay</h1>
                    </button>
                    <button
                        onClick={review}
                        class="md:px-5 md:py-5 px-3 py-1 transition ease-in duration-200 uppercase  rounded md:rounded-full hover:bg-pink-500 hover:text-white border-2 border-pink-600 focus:outline-none flex flex-col justify-center items-center">
                        <StarIcon className=" md:h-1/2 md:w-1/2 " />
                        <h1 className="h-1/2 w-1/2 ">Review</h1>
                    </button>
                    <button
                        onClick={logOut}
                        class="md:px-5 md:py-5 px-3 py-1 transition ease-in duration-200 uppercase  rounded md:rounded-full hover:bg-pink-500 hover:text-white border-2 border-pink-600 focus:outline-none flex flex-col justify-center items-center">
                        <LogoutIcon className=" md:h-1/2 md:w-1/2 " />
                        <h1 className="h-1/2 w-1/2 ">Log Out</h1>
                    </button>
                </nav>
            </div >

            {where === 'myOrders' ? <AllOrders></AllOrders> : ''}
            {where === 'pay' ? <Pay></Pay> : ''}
            {where === 'myReview' ? <AddReview></AddReview> : ''}
            {where === 'logOut' ? <LogOut></LogOut> : ''}


            {/* {onMyOrders ?
                <AllOrders></AllOrders>
                : ''}
            {onPay ? <Pay></Pay> : ''}
            {onMyReview ? <AddReview></AddReview> : ''} */}
        </div>
    );
};

export default DashBoard;