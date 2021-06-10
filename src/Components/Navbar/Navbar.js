import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import mainLogo from '../../Images/logos/logo.png'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div style={{ background: '#fbd062' }}>
            <nav>
                <div className="w-full mx-auto sm:px-6 lg:px-8">
                    <div className=" pt-4 justify-between items-center w-full   h-16">
                        <div className="grid grid-cols-2 items-center">
                            <img
                                className="h-8"
                                src={mainLogo}
                                alt="Workflow"
                            />
                            <div className="hidden md:block  justify-self-end">
                                <div className="mx-auto flex  ">
                                    <a
                                        href="#"
                                        className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium"
                                    >Home</a>
                                    <a href="#" className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Our Portfolio</a>
                                    <a href="#" className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Our Team</a>
                                    <a href="#" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>

                                    <a href="#" className="text-gray-300 bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
                                </div>
                            </div>
                        </div>



                        <div style={{marginLeft:'90%', marginTop: '-30px'}} className=" flex md:hidden md:d-none">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>



                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div  style={{ background: '#000' }} className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a
                                    href="#"
                                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Dashboard
                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Team
                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Projects
                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Calendar
                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Reports
                </a>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
}

export default Navbar;






