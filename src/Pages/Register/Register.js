import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const handleForm = (e) => {
        e.preventDefault();
    }
    const { error, signInUsingGoogle, signInUsingGithub, createUserWithEmail, emailChange, passChange, nameChange, formEmail, formPass, formName } = useAuth();
    return (
        <div className="bg-white dark:bg-gray-800">
            <div className="flex md:flex-row flex-col-reverse  px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
                <div>
                    <h2 className="text-2xl font-semibold font-display text-black dark:text-white sm:text-3xl">
                        We&#x27;ve got more coming...
                    </h2>
                    <p className="mt-2 max-w-xl text-base text-gray-400">
                        Want to hear from us when we add new components? Sign up for our newsletter and we&#x27;ll email you every time we release a new batch of components.
                    </p>
                    <form>
                        <div className="sm:flex jusitfy-start mt-6">
                            <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                                <div className=" relative ">
                                    <input type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent" placeholder="Email" />
                                </div>
                                <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-pink-600 rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-pink-200" type="submit">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </form>
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