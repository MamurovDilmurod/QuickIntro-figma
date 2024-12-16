import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div style={{
            backgroundColor: '#E7ECFF',
            padding: '20px',
            borderTop: '1px solid #E5E7EB',
        }}>
            <div
                className="p-4 max-w-[1240px] mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-0"
                data-aos="fade-up" // Pastdan yuqoriga chiqadigan animatsiya
            >
                {/* Link */}
                <ul className="flex flex-wrap justify-center gap-8 sm:justify-start">
                    <li className="text-gray-400 transition-colors duration-300 hover:text-gray-600">
                        ©2023 Yourcompany
                    </li>
                </ul>

                {/* Title */}
                <h2
                    className="text-xl md:text-2xl font-bold text-[#37447E] text-center sm:text-left"
                    data-aos="fade-up" // Pastdan yuqoriga chiqish
                >
                    Landing
                </h2>

                {/* Button */}
                <div className="flex justify-center sm:justify-end">
                    <button
                        className="px-8 md:px-12 py-2 bg-[#111B47] text-white text-sm md:text-lg rounded-md shadow-md 
                       hover:bg-[#1f2d6a] hover:shadow-lg active:bg-[#0d1433] focus:ring-2 focus:ring-[#4463de] 
                       focus:outline-none transition-all duration-300 ease-in-out"
                        data-aos="zoom-in"
                    >
                        Purchase now
                    </button>
                </div>
            </div>

            {/* HR element */}
            <hr
                className="block mt-10 border-gray-300 max-w-[1240px] w-full mx-auto mb-5"
                data-aos="fade-up" // Pastdan yuqoriga chiqish
            />
            <div
                className="flex flex-wrap items-center justify-between gap-y-4 p-4 max-w-[1240px] mx-auto"
                data-aos="fade-up" // Pastdan yuqoriga chiqish
            >
                {/* Footer links */}
                <ul className="flex flex-wrap justify-center gap-6 md:gap-14">
                    <li><a className="font-normal text-gray-400 capitalize transition-colors duration-300 cursor-pointer hover:underline hover:text-gray-600 active:text-gray-700" href="#">home</a></li>
                    <li><a className="font-normal text-gray-400 capitalize transition-colors duration-300 cursor-pointer hover:underline hover:text-gray-600 active:text-gray-700" href="#">about</a></li>
                    <li><a className="font-normal text-gray-400 capitalize transition-colors duration-300 cursor-pointer hover:underline hover:text-gray-600 active:text-gray-700" href="#">contact</a></li>
                </ul>
                <div className="flex justify-center gap-4 md:gap-7">
                    <span className="group" data-aos="flip-left">
                        <FaFacebookF className="text-gray-400 transition-colors duration-300 cursor-pointer md:text-xl group-hover:text-blue-600" />
                    </span>
                    <span className="group" data-aos="flip-left">
                        <FaLinkedinIn className="text-gray-400 transition-colors duration-300 cursor-pointer md:text-xl group-hover:text-blue-600" />
                    </span>
                    <span className="group" data-aos="flip-left">
                        <FaTwitter className="text-gray-400 transition-colors duration-300 cursor-pointer md:text-xl group-hover:text-blue-500" />
                    </span>
                    <span className="group" data-aos="flip-left">
                        <FaYoutube className="text-gray-400 transition-colors duration-300 cursor-pointer md:text-xl group-hover:text-red-600" />
                    </span>
                    <span className="group" data-aos="flip-left">
                        <FaInstagram className="text-gray-400 transition-colors duration-300 cursor-pointer md:text-xl group-hover:text-pink-600" />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
