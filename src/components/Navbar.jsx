import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import bgImg from '../assets/backround-img.png';
import { IoIosArrowUp } from "react-icons/io";
import Swal from 'sweetalert2';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // "Back to Top" tugmasi ko'rinishini boshqarish
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {  // 300px dan yuqori skroll bo'lsa
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const handlePurchase = () => {
        Swal.fire({
            title: 'Thank you!',
            text: 'Your purchase was successful!',
            icon: 'success',
            confirmButtonText: 'Continue Shopping',
            confirmButtonColor: '#111B47',
            backdrop: `
                rgba(0,0,123,0.4)
                url("https://i.gifer.com/origin/cc/cc4baf21755ed9b88b0ae4c626e2dc84.gif")
                left top
                no-repeat
            `,
        });
    };

    return (
        <nav className='fixed top-0 left-0 right-0 z-50 bg-white'>
            <div className='flex items-center justify-between p-4 max-w-[1240px] mx-auto'>
                {/* Navbar link */}
                <ul className={`gap-14 hidden sm:flex`}>
                    <a className='font-medium text-sm sm:text-base text-[#505F98] capitalize hover:text-[#4463de] hover:underline transition-all duration-300 ease-out' href="#"><li>home</li></a>
                    <a className='font-medium text-sm sm:text-base text-[#505F98] capitalize hover:text-[#4463de] hover:underline transition-all duration-300 ease-out' href="#"><li>about</li></a>
                    <a className='font-medium text-sm sm:text-base text-[#505F98] capitalize hover:text-[#4463de] hover:underline transition-all duration-300 ease-out' href="#"><li>contact</li></a>
                </ul>
                <h2 className='text-2xl font-bold text-[#37447E]'>Landing</h2>

                <div className="items-center hidden sm:flex">
                    <button
                        onClick={handlePurchase}
                        className="px-12 py-1 bg-[#111B47] text-white text-lg rounded-md shadow-md hover:bg-[#141c3e] hover:shadow-lg focus:ring-2 focus:ring-[#4463de] focus:outline-none transition-all duration-300 ease-in-out"
                    >
                        Buy Now
                    </button>
                </div>

                {/* Mobile uchun burger menyu */}
                <div className="flex items-center justify-center sm:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                            <IoClose className='text-2xl text-[#1d328e] cursor-pointer hover:text-white hover:bg-red-600 transition-all duration-200 ease-in' />
                        ) : (
                            <AiOutlineMenu className='text-2xl text-[#1d328e] cursor-pointer hover:text-blue-700 transition-all duration-200 ease-in' />
                        )}
                    </button>
                </div>

                {/* Mobil menyu */}
                {isOpen && (
                    <ul className="absolute left-0 z-10 flex flex-col items-start w-full px-8 py-4 space-y-4 bg-white shadow-md top-16 sm:hidden">
                        <a
                            className="font-medium text-sm sm:text-base text-[#505F98] capitalize hover:text-[#4463de] hover:underline transition-all duration-300 ease-out"
                            href="#"
                        >
                            <li>home</li>
                        </a>
                        <a
                            className="font-medium text-sm sm:text-base text-[#505F98] capitalize hover:text-[#4463de] hover:underline transition-all duration-300 ease-out"
                            href="#"
                        >
                            <li>about</li>
                        </a>
                        <a
                            className="font-medium text-sm sm:text-base text-[#505F98] capitalize hover:text-[#4463de] hover:underline transition-all duration-300 ease-out"
                            href="#"
                        >
                            <li>contact</li>
                        </a>
                        <button
                            onClick={handlePurchase}
                            className="px-12 py-1 bg-[#111B47] text-white text-lg rounded-md shadow-md hover:bg-[#141c3e] hover:shadow-lg focus:ring-2 focus:ring-[#4463de] focus:outline-none transition-all duration-300 ease-in-out"
                        >
                            Buy Now
                        </button>
                    </ul>
                )}
            </div>

            {/* "Back to Top" tugmasi */}
            {isScrolled && (
                <button
                    onClick={scrollToTop}
                    className="fixed p-3 text-white transition-all duration-300 ease-in-out bg-[#111b47e6] rounded-full shadow-lg bottom-5 right-5 hover:bg-[#16204f]"
                >
                    <IoIosArrowUp />
                </button>
            )}
        </nav>
    );
};

export default Navbar;
