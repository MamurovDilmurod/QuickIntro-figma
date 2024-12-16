import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import lihtImg from '../assets/ligtImg.png';

const LightSection = () => {
    useEffect(() => {
        // AOS-ni ishga tushurish
        AOS.init({ duration: 1500, once: true });
    }, []);

    return (
        <div className='flex flex-col items-center gap-16 px-6 pt-24 md:flex-row sm:flex-row'>
            {/* Left section */}
            <div className='w-full overflow-hidden md:w-1/2' data-aos="fade-right">
                <img src={lihtImg} alt="Light, Fast & Powerful" className='object-cover w-full h-auto transition-transform duration-300 ease-linear hover:scale-110' />
            </div>
            {/* Right section */}
            <div className='flex flex-col justify-center w-full md:w-1/2' data-aos="fade-right">
                <h2 className='font-semibold text-3xl sm:text-4xl text-[#091133da] mb-6'>
                    Light, Fast & Powerful
                </h2>
                <p className='text-sm text-gray-600 sm:text-base'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br /><br />
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
            </div>
        </div>
    );
}

export default LightSection;
