import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import Swal from 'sweetalert2';

const Navbar = () => {
    // Burger menyuni ochib/yopish uchun holat
    const [isOpen, setIsOpen] = useState(false);
    // Sahifani skroll qilganini tekshirish uchun holat
    const [isScrolled, setIsScrolled] = useState(false);

    // Sahifa skroll qilinganida "isScrolled" ni yangilaydigan event
    useEffect(() => {
        const handleScroll = () => {
            // Skroll 300px dan katta bo‘lsa "isScrolled" true bo‘ladi
            if (window.scrollY > 300) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Skroll eventini qo‘shish
        window.addEventListener("scroll", handleScroll);
        // Komponent unmounted bo‘lganida eventni olib tashlash
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Burger menyuni ochish/yopish funksiyasi
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Sahifaning yuqorisiga smootch skroll qilish funksiyasi
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // "Buy Now" tugmasi bosilganda SweetAlert chiqarish
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
        // Navbar skroll bo‘lganda fonni o‘zgartirish
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-50' : 'bg-transparent'}`}>
            <div className='p-4 max-w-[1240px] mx-auto'>
                <div className='flex items-center justify-between'>
                    {/* Katta ekranlar uchun navbar linklar */}
                    <ul className={`hidden sm:flex gap-14`}>
                        <a href="#" className='font-medium text-sm sm:text-base text-[#505F98] capitalize hover:text-[#4463de] hover:underline transition-all duration-300 ease-out'>
                            <li>home</li>
                        </a>
                        <a href="#" className='font-medium text-sm sm:text-base text-[#505F98] capitalize hover:text-[#4463de] hover:underline transition-all duration-300 ease-out'>
                            <li>about</li>
                        </a>
                        <a href="#" className='font-medium text-sm sm:text-base text-[#505F98] capitalize hover:text-[#4463de] hover:underline transition-all duration-300 ease-out'>
                            <li>contact</li>
                        </a>
                    </ul>

                    {/* Logo */}
                    <h2 className='text-2xl font-bold text-[#37447E]'>Landing</h2>

                    {/* Katta ekranlar uchun "Buy Now" tugmasi */}
                    <div className="items-center hidden sm:flex">
                        <button
                            onClick={handlePurchase}
                            className="px-12 py-1 bg-[#111B47] text-white text-lg rounded-md shadow-md hover:bg-[#141c3e] transition-all duration-300 ease-in-out"
                        >
                            Buy Now
                        </button>
                    </div>

                    {/* Burger menyu tugmasi */}
                    <div className="sm:hidden">
                        <button onClick={toggleMenu}>
                            {isOpen ? (
                                <IoClose className="text-2xl text-[#1d328e] cursor-pointer hover:text-white hover:bg-red-600 transition-all duration-200" />
                            ) : (
                                <AiOutlineMenu className="text-2xl text-[#1d328e] cursor-pointer hover:text-blue-700 transition-all duration-200" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobil menyu */}
                {isOpen && (
                    <ul className="absolute left-0 z-40 flex flex-col items-start w-full px-8 py-4 space-y-4 bg-white shadow-md top-16">
                        <a href="#" className='font-medium text-sm sm:text-base text-[#505F98] capitalize hover:text-[#4463de] hover:underline transition-all duration-300 ease-out'>
                            <li>home</li>
                        </a>
                        <a href="#" className='font-medium text-sm sm:text-base text-[#505F98] capitalize hover:text-[#4463de] hover:underline transition-all duration-300 ease-out'>
                            <li>about</li>
                        </a>
                        <a href="#" className='font-medium text-sm sm:text-base text-[#505F98] capitalize hover:text-[#4463de] hover:underline transition-all duration-300 ease-out'>
                            <li>contact</li>
                        </a>
                        <button
                            onClick={handlePurchase}
                            className="px-12 py-1 bg-[#111B47] text-white text-lg rounded-md shadow-md hover:bg-[#141c3e] transition-all duration-300 ease-in-out"
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
                    className="fixed bottom-5 right-5 p-3 bg-[#111B47] text-white rounded-full shadow-lg hover:bg-[#16204f] transition-all duration-300 z-50"
                >
                    <IoIosArrowUp />
                </button>
            )}
        </nav>
    );
};

export default Navbar;
