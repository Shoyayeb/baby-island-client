import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Buy = () => {
    const { toyId } = useParams();
    const { user } = useAuth();
    const [toy, setToy] = useState([]);
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        const url = `https://baby-island.herokuapp.com/buy/${toyId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setToy(data));
    }, []);
    return (

        <div class="bg-gray-400 dark:bg-gray-800 flex relative z-20 items-center">
            <div class="container mx-auto px-6 flex relative flex-row-reverse py-16">
                <div class="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto">
                    <div class="px-4 py-8 sm:px-10">
                        <div class="relative mt-6">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-gray-300">
                                </div>
                            </div>
                            <div class="relative flex justify-center text-sm leading-5">
                                <span class="px-2 text-gray-500 bg-white">
                                    {toy.name}
                                </span>
                            </div>
                        </div>
                        <div class="mt-6">
                            <form class="w-full space-y-6">
                                <div class="w-full">
                                    <div class=" relative ">
                                        <input type="text" readOnly aria-readonly id="search-form-name" value={user.displayName} class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your name" />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class=" relative ">
                                        <input type="text" readOnly aria-readonly id="search-form-email" value={user.email} class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email" />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class=" relative ">
                                        <input type="text" onChange={(e) => setAddress(e.target.value)} id="search-form-address" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your address" />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class=" relative ">
                                        <input required aria-required="true" type="tel" onChange={(e) => setPhone(e.target.value)} id="search-form-phone" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your phone" />
                                    </div>
                                </div>
                                <div>
                                    <span class="block w-full rounded-md shadow-sm">
                                        <button type="submit" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                                            Search
                                        </button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                        <p class="text-xs leading-5 text-gray-500">
                            This data are display for information and can change
                        </p>
                    </div>
                </div>

                <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                    <img src={toy.image} alt={toy.name} class="max-w-xs md:max-w-sm m-auto" />
                </div>
            </div>
        </div>

    );
};

export default Buy;