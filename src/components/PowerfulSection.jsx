import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import powerful from '../assets/powerful.png';

const PowerfulSection = () => {
    useEffect(() => {
        // AOS-ni ishga tushurish
        AOS.init({ duration: 1500, once: true, easing: 'ease-out', delay: 200 });
    }, []);

    return (
        <div className='flex flex-col items-center gap-16 px-6 pt-12 pb-12 md:flex-row sm:flex-row'>
            {/* Left section with animation */}
            <div className='w-full overflow-hidden md:w-1/2' data-aos="zoom-in" data-aos-delay="200">
                <img src={powerful} alt="Light, Fast & Powerful" className='object-cover w-full h-auto transition-transform duration-300 ease-linear hover:scale-110' />
            </div>
            {/* Right section with animation */}
            <div className='flex flex-col justify-center w-full md:w-1/2' data-aos="zoom-in" data-aos-delay="400">
                <h2 className='font-semibold text-3xl sm:text-4xl text-[#091133da] mb-6'>
                    Light, Fast & Powerful
                </h2>
                <p className='text-sm text-gray-600 sm:text-base'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br /><br />
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <div className="flex items-start pt-10 ">
                    <button
                        className="mt-6 px-12 py-2 bg-[#111B47] text-white rounded hover:bg-[#1d2c70] transition-all transform hover:scale-105"
                    >
                        Purchase Now
                    </button>
                </div>


            </div>
        </div>
    );
}

export default PowerfulSection;
