import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hero_img from '../assets/hero-img.png';

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="flex flex-col items-center gap-12 px-6 pt-32 md:flex-row">
            {/* Left Section */}
            <div
                className="w-full text-center md:w-1/2 md:text-left"
                data-aos="fade-right"
            >
                <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-800">
                    Introduce Your Product <br /> Quickly & Effectively
                </h1>
                <p className="mb-6 leading-relaxed text-gray-600">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br /> <br />
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <div className="flex justify-center gap-4 md:justify-start">
                    <button className="px-4 py-2 text-white bg-[#111b47f0] rounded shadow hover:bg-[#111B47]">
                        Purchase UI Kit
                    </button>
                    <button className="px-4 py-2 text-gray-600 border border-gray-400 rounded hover:bg-gray-200">
                        Learn More
                    </button>
                </div>
            </div>
            {/* Right Section */}
            <div className="flex justify-center w-full md:w-1/2" data-aos="fade-left">
                <img src={hero_img} alt="Hero Section" className="w-10/12 md:w-full" />
            </div>
        </div>
    );
};

export default Hero;
