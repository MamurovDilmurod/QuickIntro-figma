import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Fast from '../assets/Fast.png';

const FastSection = () => {
    useEffect(() => {
        // AOS-ni ishga tushurish
        AOS.init({ duration: 1500, once: true, easing: 'ease-in-out', delay: 300 });
    }, []);

    return (
        <div className='flex flex-col-reverse items-center gap-12 px-8 py-24 md:flex-row sm:flex-row'>
            {/* Left section with animation */}
            <div className='w-full overflow-hidden md:w-1/2' data-aos="fade-left" data-aos-delay="400">
                <img src={Fast} alt="Light, Fast & Powerful" className='object-cover w-full h-auto transition-transform duration-300 ease-linear hover:scale-105' />
            </div>
            {/* Right section with animation */}
            <div className='flex flex-col justify-center w-full md:w-1/2' data-aos="fade-left" data-aos-delay="600">
                <h2 className='font-bold text-3xl sm:text-5xl text-[#1d3b45] mb-8'>
                    Light, Fast & Powerful
                </h2>
                <p className='text-base text-gray-700 sm:text-lg'>
                    Discover the perfect balance of speed and performance with our cutting-edge solution. Optimized for efficiency, it delivers exceptional power in a lightweight package. <br /><br />
                    Enjoy seamless experiences with faster load times, enhanced productivity, and superior performance for all your needs.
                </p>
            </div>
        </div>
    );
}

export default FastSection;
