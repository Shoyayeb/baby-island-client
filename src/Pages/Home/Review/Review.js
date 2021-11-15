import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Review = () => {
    return (
        <div className="">
            <Carousel showArrows={false} centerMode={true} infiniteLoop={true} >

                <div class="bg-white dark:bg-gray-800 w-full rounded-lg p-4 mb-6 shadow sm:inline-block">
                    <div class="flex items-start text-left">
                        <div class="flex-shrink-0">
                            <div class="inline-block relative">
                                <a href="/" class="block relative">
                                    <img alt="profil" src="/logo.png" class="mx-auto object-cover rounded-full h-16 w-16 " />
                                </a>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1">
                                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                            </div>
                        </div>
                        <div class="ml-6">
                            <p class="flex items-baseline">
                                <span class="text-gray-600 dark:text-gray-200 font-bold">
                                    A Msan
                                </span>
                                <span class="text-gray-500 dark:text-gray-300  ml-2 text-sm">
                                    2 months ago
                                </span>
                            </p>
                            <div class="flex items-center mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                    </path>
                                </svg>
                            </div>
                            <div class="mt-3">
                                <p class="mt-1 max-w-xs dark:text-white">
                                    My first job of scanning photos at the Memories 2 Digital Photo Scanning was fantastic. She completed the work quickly while I was waiting. Thanks for a great service..
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </Carousel>
        </div>
    );
};

export default Review;