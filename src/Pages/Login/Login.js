import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    // login-register
    const handleForm = (e) => {
        e.preventDefault();
    }
    const location = useLocation();
    const history = useHistory();
    const { error, signInUsingGoogle, signInUsingGithub, emailChange, passChange, signUserWithEmail, formEmail, formPass, setError } = useAuth();
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

                <div className="shadow-xl rounded-lg">
                    <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                            Login to your existing account
                        </div>
                        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">   Don't have an account ?
                            <Link to="/register" className="text-sm text-pink-500 underline hover:text-pink-700">
                                Register Now
                            </Link>
                        </span>
                        <div className="p-6 mt-8">
                            <form onSubmit={handleForm} autoComplete="off">
                                <div class="flex flex-col mb-2">
                                    <div class="flex relative ">
                                        <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                                </path>
                                            </svg>
                                        </span>
                                        <input onChange={emailChange}
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            aria-required="true" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent" placeholder="Your email" />
                                    </div>
                                </div>
                                <div class="flex flex-col mb-6">
                                    <div class="flex relative ">
                                        <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                                </path>
                                            </svg>
                                        </span>
                                        <input onChange={passChange}
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            aria-required="true" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent" placeholder="Your password" />
                                    </div>
                                </div>
                                <div class="flex items-center mb-6 -mt-4">
                                    <div class="flex ml-auto">
                                        <a href="/" class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
                                            Forgot Your Password?
                                        </a>
                                    </div>
                                </div>
                                <div>

                                </div>
                                <div class="flex w-full">
                                    <button type="submit"
                                        onClick={() => { signUserWithEmail(formEmail, formPass, history, location) }}
                                        class="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Login
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;