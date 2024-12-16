import React, { useEffect } from "react";
import price_img from "../assets/price_img.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Swal from "sweetalert2";

function PriceSection() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animatsiya davomiyligi
            once: true, // Faqat bir marta ishlashi
        });
    }, []);

    // const handlePurchase = () => {
    //     Swal.fire({
    //         title: 'Purchase Successful!',
    //         text: 'Your order has been placed successfully.',
    //         icon: 'success',
    //         confirmButtonText: 'OK',
    //         confirmButtonColor: '#1d2c70',
    //     });
    // };

    return (
        <div
            id="price"
            className="flex flex-col items-center justify-center w-full h-screen text-white bg-center bg-no-repeat bg-cover"
            style={{
                backgroundImage: `url(${price_img})`,
            }}
            data-aos="fade-up"
        >
            <div className="flex flex-col items-center px-4 text-center md:px-8" data-aos="fade-up" data-aos-delay="200">
                <h1 className="text-4xl font-medium text-[#091133] leading-tight md:text-5xl">
                    A Price To Suit Everyone
                </h1>
                <p className="text-base font-normal leading-7 text-[#6f7cb2] max-w-xl mt-4">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                    et magnis dis parturient montes, nascetur ridiculus
                </p>
                <h1 className="text-5xl font-medium text-[#222f65] mt-8">$40</h1>
                <span className="text-base font-normal text-[#37447e] mt-2">UI Design Kit</span>
                <span className="text-sm font-normal text-[#5d6970] mt-8">
                    See, One price. Simple.
                </span>
                <button
                    className="relative px-12 py-3 mt-6 font-medium text-white group"
                // onClick={handlePurchase}
                >
                    <span
                        className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#1d2c70] to-[#111B47] rounded-lg 
                    transform group-hover:scale-105 group-hover:shadow-lg transition duration-300 ease-in-out"
                    ></span>
                    <span className="relative">Purchase Now</span>
                </button>


            </div>
        </div>
    );
}

export default PriceSection;
