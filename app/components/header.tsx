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
        <div className={`p-[30px_100px] fixed w-full left-0 top-0 z-50 ${scrolled ? 'bg-white shadow-2xl' : 'bg-transparent'} flex items-center justify-between`}>
            <Logo color={scrolled ? 'black' : 'white'} />
            <Navigation type={scrolled ? 'scroll' : 'transparent'} />
            <button
                className='cursor-pointer p-[10px_20px] rounded-[5px] bg-linear-to-r from-[#952A20] to-[#EA4434] hover:from-white hover:to-white text-white hover:text-[#160A0A] hover:scale-105 transition-all duration-300 font-medium shadow-2xl'
            >
                Login/Register
            </button>
        </div>
    )
}

export default Header