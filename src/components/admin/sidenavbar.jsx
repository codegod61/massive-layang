import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faTools, faFileAlt, faMap, faQuestionCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Article from './article';

const Sidenavbar = () => {
    return (
        <>
            <div className='fixed w-screen h-screen flex'>
                <ul className='absolute top-0 left-0'>
                    <div className="bg-[#27005D] w-64 pb-4 rounded-r-3xl border-r-4 border-white h-screen">
                        <div className="mb-1">
                            <img className="w-52 h-52 mx-auto" src="img/adminlogo.png" alt="logo" />
                        </div>

                        <nav className="mb-8 pb-8 font-Poppins md:pt-16 lg:pt-16">
                            <ul className=" rounded-r-full py-4 pl-16 ml-auto">
                                <li href="#" className="mb-1 bg-white hover:bg-gray-300 cursor-pointer rounded-tl-xl py-2">
                                    <a className="text-black text-xl pl-5 ">
                                        <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
                                        Article
                                    </a>
                                </li>
                                <li href="#" className="mb-1 bg-white hover:bg-gray-300 cursor-pointer py-2">
                                    <a className="text-black text-xl pl-5 ">
                                        <FontAwesomeIcon icon={faTools} className="mr-2" />
                                        Service
                                    </a>
                                </li>
                                <li href="#" className="mb-1 bg-white hover:bg-gray-300 cursor-pointer py-2">
                                    <a className="text-black text-xl pl-5 ">
                                        <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                                        Report
                                    </a>
                                </li>
                                <li href="#" className="mb-1 bg-white hover:bg-gray-3npm 00 cursor-pointer py-2">
                                    <a className="text-black text-xl pl-5 ">
                                        <FontAwesomeIcon icon={faMap} className="mr-2" />
                                        Maps
                                    </a>
                                </li>
                                <li href="#" className="mb-1 bg-white hover:bg-gray-300 cursor-pointer rounded-bl-xl py-2">
                                    <a className="text-black text-xl pl-5 ">
                                        <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
                                        Help
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex justify-center md:mt-32 lg:mt-64">
                            <a href="#" className="text-[#27005D] hover:text-gray-400 bg-white py-2 px-14 rounded-xl font-Poppins">
                                Logout
                            </a>
                        </div>
                    </div>
                </ul>
                <div className='flex flex-col flex-grow w-full'>
                    <div className="bg-[#27005D] p-4 flex justify-between items-center rounded-br-3xl">
                        <div className="text-white">
                            <span className="font-semibold text-2xl pl-64 font-Poppins">Article Overview</span>
                        </div>
                        <div className='pr-10'>
                            <img
                                alt=""
                                className="w-12 h-12 rounded-full bg-slate-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-64 pl-1 pr-6 py-24'>
                <Article />
            </div>
        </>
    );
}

export default Sidenavbar;
