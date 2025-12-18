"use client"
import React, { useEffect, useState } from 'react'
import Logo from './logo'
import Navigation from './navigation'


const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`'flex justify-center fixed w-full left-0 top-0 z-50 ${scrolled ? 'bg-white shadow-2xl' : 'bg-transparent'} `}>
            <div className={`p-[30px_0px] max-xl:p-[30px_40px] max-md:p-[20px_20px] max-w-300 mx-auto flex items-center justify-between`}>
                <Logo color={scrolled ? 'black' : 'white'} />
                <Navigation type={scrolled ? 'scroll' : 'transparent'} />
                <button
                    className='cursor-pointer text-[16px] max-md:text-[14px] p-[10px_20px] max-md:p-[8px_12px] rounded-[5px] bg-linear-to-r from-[#952A20] to-[#EA4434] hover:from-white hover:to-white text-white hover:text-[#160A0A] hover:scale-105 transition-all duration-300 font-medium shadow-2xl'
                >
                    Join Now
                </button>
            </div>
        </div>
    )
}

export default Header
