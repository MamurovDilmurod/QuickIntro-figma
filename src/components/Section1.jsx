import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import section1Left from '../assets/section1_left.png';
import sectionIcon from '../assets/secction1_icon.png';

function Section1() {
    useEffect(() => {
        // AOS animatsiyalarini ishga tushurish
        AOS.init({
            duration: 1000, // Animatsiya davomiyligi
            once: true, // Har bir element faqat bir marta animatsiyalanadi
        });
    }, []);

    return (
        <div className='flex flex-col items-center justify-center px-4 py-12 bg-white sm:flex-row sm:px-8'>
            {/* Left div */}
            <div className='w-full text-center sm:w-1/2 sm:text-left'>
                <h1 className='text-2xl sm:text-4xl font-medium text-[#111B47] mb-6' data-aos="fade-up">
                    Light, Fast & Powerful
                </h1>
                <p className='mb-8 text-sm text-gray-500 sm:text-base' data-aos="fade-up" data-aos-delay="200">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br /> <br /> Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <div className='flex flex-col gap-8 sm:flex-row'>
                    <div className='flex flex-col items-center w-full sm:w-1/2 sm:items-start' data-aos="fade-up" data-aos-delay="400">
                        <img className='w-10 mb-4 sm:w-12' src={sectionIcon} alt="Icon 1" />
                        <h3 className='text-[#111B47] text-lg sm:text-xl font-semibold'>Title Goes Here</h3>
                        <p className='text-xs text-gray-600 sm:text-base'>Lorem ipsum dolor sit amet, consectetuer . Aenean commodo ligula eget dolor.</p>
                    </div>
                    <div className='flex flex-col items-center w-full sm:w-1/2 sm:items-start' data-aos="fade-up" data-aos-delay="600">
                        <img className='w-10 mb-4 sm:w-12' src={sectionIcon} alt="Icon 2" />
                        <h3 className='text-[#111B47] text-base sm:text-xl font-semibold'>Title Goes Here</h3>
                        <p className='text-xs text-gray-600 sm:text-base'>Lorem ipsum dolor sit amet, consectetuer . Aenean commodo ligula eget dolor.</p>
                    </div>
                </div>
            </div>
            {/* Right div */}
            <div className='w-full mt-8 overflow-hidden sm:w-1/2 sm:mt-0'>
                <img className='w-full duration-300 ease-in-out rounded-lg hover:scale-105' src={section1Left} alt="Section Image" data-aos="fade-up" />
            </div>

        </div>
    );
}

export default Section1;
