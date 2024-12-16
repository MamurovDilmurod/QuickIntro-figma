import React, { useEffect } from 'react';
import AOS from 'aos'; // AOS kutubxonasini import qilish
import 'aos/dist/aos.css'; // AOS animatsiya uslublarini import qilish
import hero_img from '../assets/hero-img.png'; // Rasmni import qilish

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animatsiya davomiyligi
            once: true, // Animatsiya faqat bir marta bajariladi
        });
    }, []); // Faqat bir marta ishlaydi

    return (
        <div className="flex flex-col items-center gap-12 px-6 pt-32 md:flex-row">
            {/* Chap bo'lim */}
            <div className="w-full text-center md:w-1/2 md:text-left" data-aos="fade-right">
                <h1 className="mb-4 text-2xl font-bold leading-tight text-gray-800 md:text-4xl">
                    Introduce Your Product <br /> Quickly & Effectively
                </h1>
                <p className="mb-6 leading-relaxed text-gray-600">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br /><br />
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                </p>
                {/* Tugmalar */}
                <div className="flex justify-center gap-4 md:justify-start">
                    <button className="px-4 py-2 text-white bg-[#111b47f0] rounded shadow hover:bg-[#111B47]">
                        Purchase UI Kit
                    </button>
                    <button className="px-4 py-2 text-gray-600 border border-gray-400 rounded hover:bg-gray-200">
                        Learn More
                    </button>
                </div>
            </div>
            {/* O'ng bo'lim */}
            <div className="flex justify-center w-full md:w-1/2" data-aos="fade-left">
                <img src={hero_img} alt="Hero Section" className="w-10/12 md:w-full" />
            </div>
        </div>
    );
};

export default Hero;
