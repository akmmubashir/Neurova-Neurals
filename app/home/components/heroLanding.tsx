import React from 'react'
import Image from 'next/image'

const HeroLanding = () => {
    return (
        <div style={{
            backgroundImage: "url(/assets/common/landing.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }} className='h-screen relative grid grid-cols-12 gap-10 p-[100px_100px_0]'>
            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/0 to-transparent pointer-events-none" />
            {/* <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent pointer-events-none" /> */}
            <div className='col-span-6 flex flex-col justify-center items-start z-10'>
                <div>
                    <h1 className='text-[52px] max-2xl:text-[46px] max-xl:text-[36px] font-semibold'>
                        Committed To Learn Excellence In Education
                    </h1>
                    <button className='cursor-pointer bg-white/15 text-white hover:bg-white/25 px-6 py-3 rounded-md mt-6 font-medium shadow-2xl hover:scale-105 transition-all duration-300'>
                        Learn More
                    </button>
                </div>
            </div>
            <div className='col-span-6 flex flex-col justify-center items-start z-10'>
                <Image
                    src="/assets/common/heroImage.png"
                    alt="Hero Landing Text"
                    width={600}
                    height={400}
                    className='w-full h-auto'
                />
            </div>
        </div>
    )
}

export default HeroLanding