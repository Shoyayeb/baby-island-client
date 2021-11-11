import React, { useState } from 'react';

const AddNew = () => {
    // name, description, image, price and button

    const [Name, setName] = useState('');
    const [Description, setDescription] = useState('');
    const [Image, setImage] = useState('');
    const [Price, setPrice] = useState('');


    const nameChange = (e) => {
        setName(e.target.value);
    }
    const descriptionChange = (e) => {
        setDescription(e.target.value);
    }
    const imageChange = (e) => {
        setImage(e.target.value);
    }
    const priceChange = (e) => {
        setPrice(e.target.value);
    }


    const handleForm = (e) => {
        e.preventDefault();
        console.log(e);
    }
    return (
        <div class="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden my-5">
            <div class="px-4 py-8 sm:px-10">
                <div class=" mt-6">
                    <div class=" inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300">
                        </div>
                    </div>
                    <div class=" flex justify-center text-sm leading-5">
                        <span class="px-2 text-gray-800 my-4 bg-white">
                            <p className="text-3xl">Add a new product</p>
                        </span>
                    </div>
                    <div class=" inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300">
                        </div>
                    </div>
                </div>
                <div class="mt-6">
                    <form onSubmit={handleForm} class="w-full space-y-6">
                        <div class="w-full">
                            <div class="  ">
                                <input required aria-required="true" type="text" id="product-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Product Name" onChange={nameChange} />
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="  ">
                                <input required aria-required="true" type="text" id="product-description" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Product Description" onChange={descriptionChange} />
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="  ">
                                <input required aria-required="true" type="text" id="product-image" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Product Image Link" onChange={imageChange} />
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="  ">
                                <input required aria-required="true" type="number" id="product-price" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Product Price" onChange={priceChange} />
                            </div>
                        </div>
                        <div>
                            <span class="block w-full rounded-md shadow-sm">
                                <button type="submit" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Submit
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
            <div class="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                <p class="text-xs leading-5 text-gray-500">
                    Internet connection required for adding new products*
                </p>
            </div>
        </div>

    );
};

export default AddNew;