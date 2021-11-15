import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const handleForm = (e) => {
        e.preventDefault();
    }
    const { error, setError, signInUsingGoogle, signInUsingGithub, createUserWithEmail, emailChange, passChange, nameChange, formEmail, formPass, formName } = useAuth();
    return (
        <div className="bg-white dark:bg-gray-800">
            {error ? <div className="bg-red-600" id="error">
                <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="w-0 flex-1 flex items-center">
                            <span className="flex p-2 rounded-lg bg-red-800">
                                <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                            <p className="ml-3 font-medium text-white truncate">
                                {error}
                            </p>
                        </div>
                        <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                            <a
                                href="/"
                                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-600 bg-white hover:bg-red-50"
                            >
                                Learn more
                            </a>
                        </div>
                        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                            <button
                                onClick={() => { setError('') }}
                                type="button"
                                className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                            >
                                <span className="sr-only">Dismiss</span>
                                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div> : ''}

            <div className="flex md:flex-row flex-col-reverse justify-around px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
                <div>
                    <h2 className="text-2xl font-semibold font-display text-black dark:text-white sm:text-3xl">
                        Login with Google or Github
                    </h2>
                    <p className="mt-2 max-w-xl text-base text-gray-400">
                        You can login with google and github by just clicking the button below
                    </p>
                    <div className="sm:flex gap-4 jusitfy-start mt-6">
                        <button type="button" onCLick={signInUsingGoogle} class="py-2 px-4 my-3 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            <FaGoogle className="mx-2" />
                            Google
                        </button>
                        <button type="button" onClick={signInUsingGithub} class="py-2 px-4 my-3 flex justify-center items-center  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            <FaGithub className="mx-2" />
                            Github
                        </button>
                    </div>
                </div>

                <div className="lg:block ">

                    <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                            Create a new account
                        </div>
                        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">   Already have an account ?
                            <Link to="/login" className="text-sm text-pink-500 underline hover:text-pink-700">
                                Sign in
                            </Link>
                        </span>
                        <div className="p-6 mt-8">
                            <form onSubmit={handleForm}>
                                <div className="flex flex-col mb-2">
                                    <div className=" relative ">
                                        <input
                                            onChange={nameChange}
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="first-name"
                                            required
                                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                                            placeholder="Name"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-2">
                                    <div className=" relative ">
                                        <input
                                            onChange={emailChange}
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-2">
                                    <div className=" relative ">
                                        <input
                                            onChange={passChange}
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>
                                <div>
                                    {error ? <p className="text-red-600 font-bold">{error}</p> : ''}
                                </div>
                                <div className="flex w-full my-4">
                                    <button
                                        type="submit"
                                        onClick={() => { createUserWithEmail(formEmail, formPass, formName) }}
                                        className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;