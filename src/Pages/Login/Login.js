import React from 'react';
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
    const { error, signInUsingGoogle, signInUsingGithub, emailChange, passChange, signUserWithEmail, formEmail, formPass, } = useAuth();
    // redirect

    // const handleLogin = (provider) => {
    //     if (provider === "google") {
    //         signInUsingGoogle().then((res) => {
    //             history.push(redirect_uri);
    //         });
    //     } else if (provider === "github") {
    //         signInUsingGithub().then((res) => {
    //             history.push(redirect_uri);
    //         });
    //     } else if (provider === "emailpass") {
    //         signUserWithEmail(formEmail, formPass).then((res) => {
    //             history.push(redirect_uri);
    //         });
    //     };
    // }
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

                <div className="">

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
                                    {error ? <p className="text-red-600 font-bold">{error}</p> : ''}
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