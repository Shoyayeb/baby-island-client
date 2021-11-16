import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { ExclamationIcon, MenuIcon, ShoppingCartIcon, XIcon } from '@heroicons/react/outline';
import { Fragment, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const navigation = [
    { name: 'Home', to: '/home', current: true, hidden: false },
    { name: 'Add New', to: '/addnew', current: false, hidden: false },
    { name: 'Purchase', to: '/purchase', current: false, hidden: false },
    { name: 'Login', to: '/login', current: false, hidden: false },
    { name: 'Explore', to: '/explore', current: false, hidden: true },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const { user, logOut } = useAuth();
    const [open, setOpen] = useState(false);
    const cancelButtonRef = useRef(null);

    const logOutModal = () => {
        setOpen(true);
    };
    const logOutWithModal = () => {
        logOut();
        setOpen(false);
    };

    const windowLocation = window.location.href;
    if (windowLocation.includes("/dashboard")) {
        console.log(windowLocation);
    }
    return (
        <div>
            <Disclosure as="nav" className="bg-pink-600">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center">
                                        <img
                                            className="block lg:hidden h-10 w-auto"
                                            src="/logo.png"
                                            alt="Workflow"
                                        />
                                        <img
                                            className="hidden lg:block h-12 w-auto"
                                            src="/logo.png"
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.to}
                                                    className={classNames(
                                                        'text-white hover:bg-pink-700 ',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    ) + classNames(item.hidden ? 'block md:hidden' : '')}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <Link
                                        to="/explore"
                                        className="sm:block hidden text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'"
                                    >
                                        Explore
                                    </Link>

                                    <Link
                                        to="/cart"
                                        className="ml-3 p-1 rounded-full text-md text-gray-100 text-4xl gap-0 hidden sm:flex"
                                    >
                                        <ShoppingCartIcon className="flex-1 h-6 w-6" aria-hidden="true" />
                                        <span className="h-4 w-4 rounded-full text-xs text-center bg-gray-900" aria-hidden="true">
                                            0
                                        </span>
                                    </Link>
                                    {/* Profile dropdown */}
                                    {user.displayName ? (
                                        <Menu as="div" className="ml-3 relative">
                                            <div>
                                                <Menu.Button className="bg-gray-200 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-500 focus:ring-white">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="h-10 w-10 rounded-full"
                                                        src={user.photoURL ? user.photoURL : '/default.png'}
                                                        alt="profile"
                                                    />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-light ring-1 ring-black ring-opacity-5 focus:outline-none bg-white">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <div>
                                                                <h3 className="text-center block px-4 py-2 text-lg fw-bold font-normal">
                                                                    {user.displayName}
                                                                    <span className="block py-2 text-xs font-bold">
                                                                        {user.email}
                                                                    </span>
                                                                </h3>
                                                            </div>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="/dashboard"
                                                                className={classNames(
                                                                    active ? "bg-gray-100" : "",
                                                                    "block w-full px-4 py-2 text-center text-sm text-pink-500 font-normal"
                                                                )}
                                                            >
                                                                Dashboard
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={logOutModal}
                                                                className={classNames(
                                                                    active ? "bg-gray-100" : "",
                                                                    "block w-full px-4 py-2 text-sm text-pink-500 font-normal"
                                                                )}
                                                            >
                                                                Sign Out
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>

                                    ) : (
                                        <Link
                                            to="/login"
                                            className={classNames(
                                                "text-pink-500 bg-white hover:text-white hover:bg-pink-500 hover:border-pink-500 border-pink-400 border-2",
                                                "block px-3 py-2 rounded-md text-base font-medium"
                                            )}
                                        >
                                            Log In
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        as="a"
                                        to={item.to}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed z-10 inset-0 overflow-y-auto"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen}
                >
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <ExclamationIcon
                                                className="h-6 w-6 text-red-600"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg leading-6 font-medium text-gray-900"
                                            >
                                                LogOut from account
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Are you sure you want to Log Out?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={logOutWithModal}
                                    >
                                        LogOut
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}
